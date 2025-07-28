'use client'

import { Button } from '@/shared/ui/button'
import { Input } from '@/shared/ui/input'
import { useState } from 'react'

const RegistrationForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '' })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // В будущем здесь будет отправка данных в коллекцию "Registrations"
    alert(`Вы успешно зарегистрированы!\nИмя: ${formData.name}\nEmail: ${formData.email}`)
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <Input
        type="text"
        name="name"
        placeholder="Ваше имя"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <Input
        type="email"
        name="email"
        placeholder="Ваш email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <Button variant="primary" type="submit">
        Зарегистрироваться
      </Button>
    </form>
  )
}

export { RegistrationForm }
