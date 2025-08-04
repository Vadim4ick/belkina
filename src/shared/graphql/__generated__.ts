import { GraphQLClient, RequestOptions } from 'graphql-request';
import gql from 'graphql-tag';
export type Maybe<T> = T;
export type InputMaybe<T> = T;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  EmailAddress: { input: any; output: any; }
  JSON: { input: any; output: any; }
  JSONObject: { input: any; output: any; }
};

export type Access = {
  readonly __typename?: 'Access';
  readonly admins: Maybe<AdminsAccess>;
  readonly canAccessAdmin: Scalars['Boolean']['output'];
  readonly courses: Maybe<CoursesAccess>;
  readonly exams: Maybe<ExamsAccess>;
  readonly faqs: Maybe<FaqsAccess>;
  readonly homePage: Maybe<HomePageAccess>;
  readonly media: Maybe<MediaAccess>;
  readonly payload_locked_documents: Maybe<Payload_Locked_DocumentsAccess>;
  readonly payload_preferences: Maybe<Payload_PreferencesAccess>;
  readonly posts: Maybe<PostsAccess>;
  readonly purchases: Maybe<PurchasesAccess>;
  readonly questions: Maybe<QuestionsAccess>;
  readonly recomendations: Maybe<RecomendationsAccess>;
  readonly subjects: Maybe<SubjectsAccess>;
  readonly tariffs: Maybe<TariffsAccess>;
  readonly testResults: Maybe<TestResultsAccess>;
  readonly tests: Maybe<TestsAccess>;
  readonly users: Maybe<UsersAccess>;
};

export type Admin = {
  readonly __typename?: 'Admin';
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly email: Scalars['EmailAddress']['output'];
  readonly hash: Maybe<Scalars['String']['output']>;
  readonly id: Scalars['Int']['output'];
  readonly lockUntil: Maybe<Scalars['DateTime']['output']>;
  readonly loginAttempts: Maybe<Scalars['Float']['output']>;
  readonly resetPasswordExpiration: Maybe<Scalars['DateTime']['output']>;
  readonly resetPasswordToken: Maybe<Scalars['String']['output']>;
  readonly role: Admin_Role;
  readonly salt: Maybe<Scalars['String']['output']>;
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
};

export type AdminUpdate_Role_MutationInput =
  | 'admin'
  | 'super';

export type Admin_CreatedAt_Operator = {
  readonly equals: InputMaybe<Scalars['DateTime']['input']>;
  readonly exists: InputMaybe<Scalars['Boolean']['input']>;
  readonly greater_than: InputMaybe<Scalars['DateTime']['input']>;
  readonly greater_than_equal: InputMaybe<Scalars['DateTime']['input']>;
  readonly less_than: InputMaybe<Scalars['DateTime']['input']>;
  readonly less_than_equal: InputMaybe<Scalars['DateTime']['input']>;
  readonly like: InputMaybe<Scalars['DateTime']['input']>;
  readonly not_equals: InputMaybe<Scalars['DateTime']['input']>;
};

export type Admin_Email_Operator = {
  readonly all: InputMaybe<ReadonlyArray<InputMaybe<Scalars['EmailAddress']['input']>>>;
  readonly contains: InputMaybe<Scalars['EmailAddress']['input']>;
  readonly equals: InputMaybe<Scalars['EmailAddress']['input']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['EmailAddress']['input']>>>;
  readonly like: InputMaybe<Scalars['EmailAddress']['input']>;
  readonly not_equals: InputMaybe<Scalars['EmailAddress']['input']>;
  readonly not_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['EmailAddress']['input']>>>;
};

export type Admin_Id_Operator = {
  readonly equals: InputMaybe<Scalars['Int']['input']>;
  readonly exists: InputMaybe<Scalars['Boolean']['input']>;
  readonly greater_than: InputMaybe<Scalars['Int']['input']>;
  readonly greater_than_equal: InputMaybe<Scalars['Int']['input']>;
  readonly less_than: InputMaybe<Scalars['Int']['input']>;
  readonly less_than_equal: InputMaybe<Scalars['Int']['input']>;
  readonly not_equals: InputMaybe<Scalars['Int']['input']>;
};

export type Admin_Role =
  | 'admin'
  | 'super';

export type Admin_Role_Input =
  | 'admin'
  | 'super';

export type Admin_Role_MutationInput =
  | 'admin'
  | 'super';

export type Admin_Role_Operator = {
  readonly all: InputMaybe<ReadonlyArray<InputMaybe<Admin_Role_Input>>>;
  readonly equals: InputMaybe<Admin_Role_Input>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Admin_Role_Input>>>;
  readonly not_equals: InputMaybe<Admin_Role_Input>;
  readonly not_in: InputMaybe<ReadonlyArray<InputMaybe<Admin_Role_Input>>>;
};

export type Admin_UpdatedAt_Operator = {
  readonly equals: InputMaybe<Scalars['DateTime']['input']>;
  readonly exists: InputMaybe<Scalars['Boolean']['input']>;
  readonly greater_than: InputMaybe<Scalars['DateTime']['input']>;
  readonly greater_than_equal: InputMaybe<Scalars['DateTime']['input']>;
  readonly less_than: InputMaybe<Scalars['DateTime']['input']>;
  readonly less_than_equal: InputMaybe<Scalars['DateTime']['input']>;
  readonly like: InputMaybe<Scalars['DateTime']['input']>;
  readonly not_equals: InputMaybe<Scalars['DateTime']['input']>;
};

export type Admin_Where = {
  readonly AND: InputMaybe<ReadonlyArray<InputMaybe<Admin_Where_And>>>;
  readonly OR: InputMaybe<ReadonlyArray<InputMaybe<Admin_Where_Or>>>;
  readonly createdAt: InputMaybe<Admin_CreatedAt_Operator>;
  readonly email: InputMaybe<Admin_Email_Operator>;
  readonly id: InputMaybe<Admin_Id_Operator>;
  readonly role: InputMaybe<Admin_Role_Operator>;
  readonly updatedAt: InputMaybe<Admin_UpdatedAt_Operator>;
};

export type Admin_Where_And = {
  readonly AND: InputMaybe<ReadonlyArray<InputMaybe<Admin_Where_And>>>;
  readonly OR: InputMaybe<ReadonlyArray<InputMaybe<Admin_Where_Or>>>;
  readonly createdAt: InputMaybe<Admin_CreatedAt_Operator>;
  readonly email: InputMaybe<Admin_Email_Operator>;
  readonly id: InputMaybe<Admin_Id_Operator>;
  readonly role: InputMaybe<Admin_Role_Operator>;
  readonly updatedAt: InputMaybe<Admin_UpdatedAt_Operator>;
};

export type Admin_Where_Or = {
  readonly AND: InputMaybe<ReadonlyArray<InputMaybe<Admin_Where_And>>>;
  readonly OR: InputMaybe<ReadonlyArray<InputMaybe<Admin_Where_Or>>>;
  readonly createdAt: InputMaybe<Admin_CreatedAt_Operator>;
  readonly email: InputMaybe<Admin_Email_Operator>;
  readonly id: InputMaybe<Admin_Id_Operator>;
  readonly role: InputMaybe<Admin_Role_Operator>;
  readonly updatedAt: InputMaybe<Admin_UpdatedAt_Operator>;
};

export type Admins = {
  readonly __typename?: 'Admins';
  readonly docs: ReadonlyArray<Admin>;
  readonly hasNextPage: Scalars['Boolean']['output'];
  readonly hasPrevPage: Scalars['Boolean']['output'];
  readonly limit: Scalars['Int']['output'];
  readonly nextPage: Maybe<Scalars['Int']['output']>;
  readonly offset: Maybe<Scalars['Int']['output']>;
  readonly page: Scalars['Int']['output'];
  readonly pagingCounter: Scalars['Int']['output'];
  readonly prevPage: Maybe<Scalars['Int']['output']>;
  readonly totalDocs: Scalars['Int']['output'];
  readonly totalPages: Scalars['Int']['output'];
};

export type AdminsCreateAccess = {
  readonly __typename?: 'AdminsCreateAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where: Maybe<Scalars['JSONObject']['output']>;
};

export type AdminsCreateDocAccess = {
  readonly __typename?: 'AdminsCreateDocAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where: Maybe<Scalars['JSONObject']['output']>;
};

export type AdminsDeleteAccess = {
  readonly __typename?: 'AdminsDeleteAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where: Maybe<Scalars['JSONObject']['output']>;
};

export type AdminsDeleteDocAccess = {
  readonly __typename?: 'AdminsDeleteDocAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where: Maybe<Scalars['JSONObject']['output']>;
};

export type AdminsDocAccessFields = {
  readonly __typename?: 'AdminsDocAccessFields';
  readonly createdAt: Maybe<AdminsDocAccessFields_CreatedAt>;
  readonly email: Maybe<AdminsDocAccessFields_Email>;
  readonly role: Maybe<AdminsDocAccessFields_Role>;
  readonly updatedAt: Maybe<AdminsDocAccessFields_UpdatedAt>;
};

export type AdminsDocAccessFields_CreatedAt = {
  readonly __typename?: 'AdminsDocAccessFields_createdAt';
  readonly create: Maybe<AdminsDocAccessFields_CreatedAt_Create>;
  readonly delete: Maybe<AdminsDocAccessFields_CreatedAt_Delete>;
  readonly read: Maybe<AdminsDocAccessFields_CreatedAt_Read>;
  readonly update: Maybe<AdminsDocAccessFields_CreatedAt_Update>;
};

export type AdminsDocAccessFields_CreatedAt_Create = {
  readonly __typename?: 'AdminsDocAccessFields_createdAt_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type AdminsDocAccessFields_CreatedAt_Delete = {
  readonly __typename?: 'AdminsDocAccessFields_createdAt_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type AdminsDocAccessFields_CreatedAt_Read = {
  readonly __typename?: 'AdminsDocAccessFields_createdAt_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type AdminsDocAccessFields_CreatedAt_Update = {
  readonly __typename?: 'AdminsDocAccessFields_createdAt_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type AdminsDocAccessFields_Email = {
  readonly __typename?: 'AdminsDocAccessFields_email';
  readonly create: Maybe<AdminsDocAccessFields_Email_Create>;
  readonly delete: Maybe<AdminsDocAccessFields_Email_Delete>;
  readonly read: Maybe<AdminsDocAccessFields_Email_Read>;
  readonly update: Maybe<AdminsDocAccessFields_Email_Update>;
};

export type AdminsDocAccessFields_Email_Create = {
  readonly __typename?: 'AdminsDocAccessFields_email_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type AdminsDocAccessFields_Email_Delete = {
  readonly __typename?: 'AdminsDocAccessFields_email_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type AdminsDocAccessFields_Email_Read = {
  readonly __typename?: 'AdminsDocAccessFields_email_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type AdminsDocAccessFields_Email_Update = {
  readonly __typename?: 'AdminsDocAccessFields_email_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type AdminsDocAccessFields_Role = {
  readonly __typename?: 'AdminsDocAccessFields_role';
  readonly create: Maybe<AdminsDocAccessFields_Role_Create>;
  readonly delete: Maybe<AdminsDocAccessFields_Role_Delete>;
  readonly read: Maybe<AdminsDocAccessFields_Role_Read>;
  readonly update: Maybe<AdminsDocAccessFields_Role_Update>;
};

export type AdminsDocAccessFields_Role_Create = {
  readonly __typename?: 'AdminsDocAccessFields_role_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type AdminsDocAccessFields_Role_Delete = {
  readonly __typename?: 'AdminsDocAccessFields_role_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type AdminsDocAccessFields_Role_Read = {
  readonly __typename?: 'AdminsDocAccessFields_role_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type AdminsDocAccessFields_Role_Update = {
  readonly __typename?: 'AdminsDocAccessFields_role_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type AdminsDocAccessFields_UpdatedAt = {
  readonly __typename?: 'AdminsDocAccessFields_updatedAt';
  readonly create: Maybe<AdminsDocAccessFields_UpdatedAt_Create>;
  readonly delete: Maybe<AdminsDocAccessFields_UpdatedAt_Delete>;
  readonly read: Maybe<AdminsDocAccessFields_UpdatedAt_Read>;
  readonly update: Maybe<AdminsDocAccessFields_UpdatedAt_Update>;
};

export type AdminsDocAccessFields_UpdatedAt_Create = {
  readonly __typename?: 'AdminsDocAccessFields_updatedAt_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type AdminsDocAccessFields_UpdatedAt_Delete = {
  readonly __typename?: 'AdminsDocAccessFields_updatedAt_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type AdminsDocAccessFields_UpdatedAt_Read = {
  readonly __typename?: 'AdminsDocAccessFields_updatedAt_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type AdminsDocAccessFields_UpdatedAt_Update = {
  readonly __typename?: 'AdminsDocAccessFields_updatedAt_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type AdminsFields = {
  readonly __typename?: 'AdminsFields';
  readonly createdAt: Maybe<AdminsFields_CreatedAt>;
  readonly email: Maybe<AdminsFields_Email>;
  readonly role: Maybe<AdminsFields_Role>;
  readonly updatedAt: Maybe<AdminsFields_UpdatedAt>;
};

export type AdminsFields_CreatedAt = {
  readonly __typename?: 'AdminsFields_createdAt';
  readonly create: Maybe<AdminsFields_CreatedAt_Create>;
  readonly delete: Maybe<AdminsFields_CreatedAt_Delete>;
  readonly read: Maybe<AdminsFields_CreatedAt_Read>;
  readonly update: Maybe<AdminsFields_CreatedAt_Update>;
};

export type AdminsFields_CreatedAt_Create = {
  readonly __typename?: 'AdminsFields_createdAt_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type AdminsFields_CreatedAt_Delete = {
  readonly __typename?: 'AdminsFields_createdAt_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type AdminsFields_CreatedAt_Read = {
  readonly __typename?: 'AdminsFields_createdAt_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type AdminsFields_CreatedAt_Update = {
  readonly __typename?: 'AdminsFields_createdAt_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type AdminsFields_Email = {
  readonly __typename?: 'AdminsFields_email';
  readonly create: Maybe<AdminsFields_Email_Create>;
  readonly delete: Maybe<AdminsFields_Email_Delete>;
  readonly read: Maybe<AdminsFields_Email_Read>;
  readonly update: Maybe<AdminsFields_Email_Update>;
};

export type AdminsFields_Email_Create = {
  readonly __typename?: 'AdminsFields_email_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type AdminsFields_Email_Delete = {
  readonly __typename?: 'AdminsFields_email_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type AdminsFields_Email_Read = {
  readonly __typename?: 'AdminsFields_email_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type AdminsFields_Email_Update = {
  readonly __typename?: 'AdminsFields_email_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type AdminsFields_Role = {
  readonly __typename?: 'AdminsFields_role';
  readonly create: Maybe<AdminsFields_Role_Create>;
  readonly delete: Maybe<AdminsFields_Role_Delete>;
  readonly read: Maybe<AdminsFields_Role_Read>;
  readonly update: Maybe<AdminsFields_Role_Update>;
};

export type AdminsFields_Role_Create = {
  readonly __typename?: 'AdminsFields_role_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type AdminsFields_Role_Delete = {
  readonly __typename?: 'AdminsFields_role_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type AdminsFields_Role_Read = {
  readonly __typename?: 'AdminsFields_role_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type AdminsFields_Role_Update = {
  readonly __typename?: 'AdminsFields_role_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type AdminsFields_UpdatedAt = {
  readonly __typename?: 'AdminsFields_updatedAt';
  readonly create: Maybe<AdminsFields_UpdatedAt_Create>;
  readonly delete: Maybe<AdminsFields_UpdatedAt_Delete>;
  readonly read: Maybe<AdminsFields_UpdatedAt_Read>;
  readonly update: Maybe<AdminsFields_UpdatedAt_Update>;
};

export type AdminsFields_UpdatedAt_Create = {
  readonly __typename?: 'AdminsFields_updatedAt_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type AdminsFields_UpdatedAt_Delete = {
  readonly __typename?: 'AdminsFields_updatedAt_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type AdminsFields_UpdatedAt_Read = {
  readonly __typename?: 'AdminsFields_updatedAt_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type AdminsFields_UpdatedAt_Update = {
  readonly __typename?: 'AdminsFields_updatedAt_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type AdminsReadAccess = {
  readonly __typename?: 'AdminsReadAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where: Maybe<Scalars['JSONObject']['output']>;
};

export type AdminsReadDocAccess = {
  readonly __typename?: 'AdminsReadDocAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where: Maybe<Scalars['JSONObject']['output']>;
};

export type AdminsUnlockAccess = {
  readonly __typename?: 'AdminsUnlockAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where: Maybe<Scalars['JSONObject']['output']>;
};

export type AdminsUnlockDocAccess = {
  readonly __typename?: 'AdminsUnlockDocAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where: Maybe<Scalars['JSONObject']['output']>;
};

export type AdminsUpdateAccess = {
  readonly __typename?: 'AdminsUpdateAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where: Maybe<Scalars['JSONObject']['output']>;
};

export type AdminsUpdateDocAccess = {
  readonly __typename?: 'AdminsUpdateDocAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where: Maybe<Scalars['JSONObject']['output']>;
};

export type Course = {
  readonly __typename?: 'Course';
  readonly banner: Media;
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly description: Scalars['String']['output'];
  readonly discount: Maybe<Scalars['Float']['output']>;
  readonly exams: Maybe<Exam>;
  readonly id: Scalars['Int']['output'];
  readonly isFree: Maybe<Scalars['Boolean']['output']>;
  readonly kinescopeVideos: Scalars['JSON']['output'];
  readonly previewVideoId: Maybe<Scalars['String']['output']>;
  readonly price: Scalars['Float']['output'];
  readonly slug: Scalars['String']['output'];
  readonly subjects: Maybe<ReadonlyArray<Subject>>;
  readonly title: Scalars['String']['output'];
  readonly totalDuration: Maybe<Scalars['String']['output']>;
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
};


export type CourseBannerArgs = {
  fallbackLocale: InputMaybe<FallbackLocaleInputType>;
  locale: InputMaybe<LocaleInputType>;
};


export type CourseExamsArgs = {
  fallbackLocale: InputMaybe<FallbackLocaleInputType>;
  locale: InputMaybe<LocaleInputType>;
};


export type CourseSubjectsArgs = {
  fallbackLocale: InputMaybe<FallbackLocaleInputType>;
  locale: InputMaybe<LocaleInputType>;
};

export type Course_Banner_Operator = {
  readonly all: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']['input']>>>;
  readonly equals: InputMaybe<Scalars['JSON']['input']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']['input']>>>;
  readonly not_equals: InputMaybe<Scalars['JSON']['input']>;
  readonly not_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']['input']>>>;
};

export type Course_CreatedAt_Operator = {
  readonly equals: InputMaybe<Scalars['DateTime']['input']>;
  readonly exists: InputMaybe<Scalars['Boolean']['input']>;
  readonly greater_than: InputMaybe<Scalars['DateTime']['input']>;
  readonly greater_than_equal: InputMaybe<Scalars['DateTime']['input']>;
  readonly less_than: InputMaybe<Scalars['DateTime']['input']>;
  readonly less_than_equal: InputMaybe<Scalars['DateTime']['input']>;
  readonly like: InputMaybe<Scalars['DateTime']['input']>;
  readonly not_equals: InputMaybe<Scalars['DateTime']['input']>;
};

export type Course_Description_Operator = {
  readonly contains: InputMaybe<Scalars['String']['input']>;
  readonly equals: InputMaybe<Scalars['String']['input']>;
  readonly like: InputMaybe<Scalars['String']['input']>;
  readonly not_equals: InputMaybe<Scalars['String']['input']>;
};

export type Course_Discount_Operator = {
  readonly equals: InputMaybe<Scalars['Float']['input']>;
  readonly exists: InputMaybe<Scalars['Boolean']['input']>;
  readonly greater_than: InputMaybe<Scalars['Float']['input']>;
  readonly greater_than_equal: InputMaybe<Scalars['Float']['input']>;
  readonly less_than: InputMaybe<Scalars['Float']['input']>;
  readonly less_than_equal: InputMaybe<Scalars['Float']['input']>;
  readonly not_equals: InputMaybe<Scalars['Float']['input']>;
};

export type Course_Exams_Operator = {
  readonly all: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']['input']>>>;
  readonly equals: InputMaybe<Scalars['JSON']['input']>;
  readonly exists: InputMaybe<Scalars['Boolean']['input']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']['input']>>>;
  readonly not_equals: InputMaybe<Scalars['JSON']['input']>;
  readonly not_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']['input']>>>;
};

export type Course_Id_Operator = {
  readonly equals: InputMaybe<Scalars['Int']['input']>;
  readonly exists: InputMaybe<Scalars['Boolean']['input']>;
  readonly greater_than: InputMaybe<Scalars['Int']['input']>;
  readonly greater_than_equal: InputMaybe<Scalars['Int']['input']>;
  readonly less_than: InputMaybe<Scalars['Int']['input']>;
  readonly less_than_equal: InputMaybe<Scalars['Int']['input']>;
  readonly not_equals: InputMaybe<Scalars['Int']['input']>;
};

export type Course_IsFree_Operator = {
  readonly equals: InputMaybe<Scalars['Boolean']['input']>;
  readonly exists: InputMaybe<Scalars['Boolean']['input']>;
  readonly not_equals: InputMaybe<Scalars['Boolean']['input']>;
};

export type Course_KinescopeVideos_Operator = {
  readonly contains: InputMaybe<Scalars['JSON']['input']>;
  readonly equals: InputMaybe<Scalars['JSON']['input']>;
  readonly intersects: InputMaybe<Scalars['JSON']['input']>;
  readonly like: InputMaybe<Scalars['JSON']['input']>;
  readonly not_equals: InputMaybe<Scalars['JSON']['input']>;
  readonly within: InputMaybe<Scalars['JSON']['input']>;
};

export type Course_PreviewVideoId_Operator = {
  readonly all: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly contains: InputMaybe<Scalars['String']['input']>;
  readonly equals: InputMaybe<Scalars['String']['input']>;
  readonly exists: InputMaybe<Scalars['Boolean']['input']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly like: InputMaybe<Scalars['String']['input']>;
  readonly not_equals: InputMaybe<Scalars['String']['input']>;
  readonly not_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type Course_Price_Operator = {
  readonly equals: InputMaybe<Scalars['Float']['input']>;
  readonly greater_than: InputMaybe<Scalars['Float']['input']>;
  readonly greater_than_equal: InputMaybe<Scalars['Float']['input']>;
  readonly less_than: InputMaybe<Scalars['Float']['input']>;
  readonly less_than_equal: InputMaybe<Scalars['Float']['input']>;
  readonly not_equals: InputMaybe<Scalars['Float']['input']>;
};

export type Course_Slug_Operator = {
  readonly all: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly contains: InputMaybe<Scalars['String']['input']>;
  readonly equals: InputMaybe<Scalars['String']['input']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly like: InputMaybe<Scalars['String']['input']>;
  readonly not_equals: InputMaybe<Scalars['String']['input']>;
  readonly not_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type Course_Subjects_Operator = {
  readonly all: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']['input']>>>;
  readonly equals: InputMaybe<Scalars['JSON']['input']>;
  readonly exists: InputMaybe<Scalars['Boolean']['input']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']['input']>>>;
  readonly not_equals: InputMaybe<Scalars['JSON']['input']>;
  readonly not_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']['input']>>>;
};

export type Course_Title_Operator = {
  readonly all: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly contains: InputMaybe<Scalars['String']['input']>;
  readonly equals: InputMaybe<Scalars['String']['input']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly like: InputMaybe<Scalars['String']['input']>;
  readonly not_equals: InputMaybe<Scalars['String']['input']>;
  readonly not_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type Course_TotalDuration_Operator = {
  readonly all: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly contains: InputMaybe<Scalars['String']['input']>;
  readonly equals: InputMaybe<Scalars['String']['input']>;
  readonly exists: InputMaybe<Scalars['Boolean']['input']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly like: InputMaybe<Scalars['String']['input']>;
  readonly not_equals: InputMaybe<Scalars['String']['input']>;
  readonly not_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type Course_UpdatedAt_Operator = {
  readonly equals: InputMaybe<Scalars['DateTime']['input']>;
  readonly exists: InputMaybe<Scalars['Boolean']['input']>;
  readonly greater_than: InputMaybe<Scalars['DateTime']['input']>;
  readonly greater_than_equal: InputMaybe<Scalars['DateTime']['input']>;
  readonly less_than: InputMaybe<Scalars['DateTime']['input']>;
  readonly less_than_equal: InputMaybe<Scalars['DateTime']['input']>;
  readonly like: InputMaybe<Scalars['DateTime']['input']>;
  readonly not_equals: InputMaybe<Scalars['DateTime']['input']>;
};

export type Course_Where = {
  readonly AND: InputMaybe<ReadonlyArray<InputMaybe<Course_Where_And>>>;
  readonly OR: InputMaybe<ReadonlyArray<InputMaybe<Course_Where_Or>>>;
  readonly banner: InputMaybe<Course_Banner_Operator>;
  readonly createdAt: InputMaybe<Course_CreatedAt_Operator>;
  readonly description: InputMaybe<Course_Description_Operator>;
  readonly discount: InputMaybe<Course_Discount_Operator>;
  readonly exams: InputMaybe<Course_Exams_Operator>;
  readonly id: InputMaybe<Course_Id_Operator>;
  readonly isFree: InputMaybe<Course_IsFree_Operator>;
  readonly kinescopeVideos: InputMaybe<Course_KinescopeVideos_Operator>;
  readonly previewVideoId: InputMaybe<Course_PreviewVideoId_Operator>;
  readonly price: InputMaybe<Course_Price_Operator>;
  readonly slug: InputMaybe<Course_Slug_Operator>;
  readonly subjects: InputMaybe<Course_Subjects_Operator>;
  readonly title: InputMaybe<Course_Title_Operator>;
  readonly totalDuration: InputMaybe<Course_TotalDuration_Operator>;
  readonly updatedAt: InputMaybe<Course_UpdatedAt_Operator>;
};

export type Course_Where_And = {
  readonly AND: InputMaybe<ReadonlyArray<InputMaybe<Course_Where_And>>>;
  readonly OR: InputMaybe<ReadonlyArray<InputMaybe<Course_Where_Or>>>;
  readonly banner: InputMaybe<Course_Banner_Operator>;
  readonly createdAt: InputMaybe<Course_CreatedAt_Operator>;
  readonly description: InputMaybe<Course_Description_Operator>;
  readonly discount: InputMaybe<Course_Discount_Operator>;
  readonly exams: InputMaybe<Course_Exams_Operator>;
  readonly id: InputMaybe<Course_Id_Operator>;
  readonly isFree: InputMaybe<Course_IsFree_Operator>;
  readonly kinescopeVideos: InputMaybe<Course_KinescopeVideos_Operator>;
  readonly previewVideoId: InputMaybe<Course_PreviewVideoId_Operator>;
  readonly price: InputMaybe<Course_Price_Operator>;
  readonly slug: InputMaybe<Course_Slug_Operator>;
  readonly subjects: InputMaybe<Course_Subjects_Operator>;
  readonly title: InputMaybe<Course_Title_Operator>;
  readonly totalDuration: InputMaybe<Course_TotalDuration_Operator>;
  readonly updatedAt: InputMaybe<Course_UpdatedAt_Operator>;
};

export type Course_Where_Or = {
  readonly AND: InputMaybe<ReadonlyArray<InputMaybe<Course_Where_And>>>;
  readonly OR: InputMaybe<ReadonlyArray<InputMaybe<Course_Where_Or>>>;
  readonly banner: InputMaybe<Course_Banner_Operator>;
  readonly createdAt: InputMaybe<Course_CreatedAt_Operator>;
  readonly description: InputMaybe<Course_Description_Operator>;
  readonly discount: InputMaybe<Course_Discount_Operator>;
  readonly exams: InputMaybe<Course_Exams_Operator>;
  readonly id: InputMaybe<Course_Id_Operator>;
  readonly isFree: InputMaybe<Course_IsFree_Operator>;
  readonly kinescopeVideos: InputMaybe<Course_KinescopeVideos_Operator>;
  readonly previewVideoId: InputMaybe<Course_PreviewVideoId_Operator>;
  readonly price: InputMaybe<Course_Price_Operator>;
  readonly slug: InputMaybe<Course_Slug_Operator>;
  readonly subjects: InputMaybe<Course_Subjects_Operator>;
  readonly title: InputMaybe<Course_Title_Operator>;
  readonly totalDuration: InputMaybe<Course_TotalDuration_Operator>;
  readonly updatedAt: InputMaybe<Course_UpdatedAt_Operator>;
};

export type Courses = {
  readonly __typename?: 'Courses';
  readonly docs: ReadonlyArray<Course>;
  readonly hasNextPage: Scalars['Boolean']['output'];
  readonly hasPrevPage: Scalars['Boolean']['output'];
  readonly limit: Scalars['Int']['output'];
  readonly nextPage: Maybe<Scalars['Int']['output']>;
  readonly offset: Maybe<Scalars['Int']['output']>;
  readonly page: Scalars['Int']['output'];
  readonly pagingCounter: Scalars['Int']['output'];
  readonly prevPage: Maybe<Scalars['Int']['output']>;
  readonly totalDocs: Scalars['Int']['output'];
  readonly totalPages: Scalars['Int']['output'];
};

export type CoursesCreateAccess = {
  readonly __typename?: 'CoursesCreateAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where: Maybe<Scalars['JSONObject']['output']>;
};

export type CoursesCreateDocAccess = {
  readonly __typename?: 'CoursesCreateDocAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where: Maybe<Scalars['JSONObject']['output']>;
};

export type CoursesDeleteAccess = {
  readonly __typename?: 'CoursesDeleteAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where: Maybe<Scalars['JSONObject']['output']>;
};

export type CoursesDeleteDocAccess = {
  readonly __typename?: 'CoursesDeleteDocAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where: Maybe<Scalars['JSONObject']['output']>;
};

export type CoursesDocAccessFields = {
  readonly __typename?: 'CoursesDocAccessFields';
  readonly banner: Maybe<CoursesDocAccessFields_Banner>;
  readonly createdAt: Maybe<CoursesDocAccessFields_CreatedAt>;
  readonly description: Maybe<CoursesDocAccessFields_Description>;
  readonly discount: Maybe<CoursesDocAccessFields_Discount>;
  readonly exams: Maybe<CoursesDocAccessFields_Exams>;
  readonly isFree: Maybe<CoursesDocAccessFields_IsFree>;
  readonly kinescopeVideos: Maybe<CoursesDocAccessFields_KinescopeVideos>;
  readonly previewVideoId: Maybe<CoursesDocAccessFields_PreviewVideoId>;
  readonly price: Maybe<CoursesDocAccessFields_Price>;
  readonly slug: Maybe<CoursesDocAccessFields_Slug>;
  readonly subjects: Maybe<CoursesDocAccessFields_Subjects>;
  readonly title: Maybe<CoursesDocAccessFields_Title>;
  readonly totalDuration: Maybe<CoursesDocAccessFields_TotalDuration>;
  readonly updatedAt: Maybe<CoursesDocAccessFields_UpdatedAt>;
};

export type CoursesDocAccessFields_Banner = {
  readonly __typename?: 'CoursesDocAccessFields_banner';
  readonly create: Maybe<CoursesDocAccessFields_Banner_Create>;
  readonly delete: Maybe<CoursesDocAccessFields_Banner_Delete>;
  readonly read: Maybe<CoursesDocAccessFields_Banner_Read>;
  readonly update: Maybe<CoursesDocAccessFields_Banner_Update>;
};

export type CoursesDocAccessFields_Banner_Create = {
  readonly __typename?: 'CoursesDocAccessFields_banner_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type CoursesDocAccessFields_Banner_Delete = {
  readonly __typename?: 'CoursesDocAccessFields_banner_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type CoursesDocAccessFields_Banner_Read = {
  readonly __typename?: 'CoursesDocAccessFields_banner_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type CoursesDocAccessFields_Banner_Update = {
  readonly __typename?: 'CoursesDocAccessFields_banner_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type CoursesDocAccessFields_CreatedAt = {
  readonly __typename?: 'CoursesDocAccessFields_createdAt';
  readonly create: Maybe<CoursesDocAccessFields_CreatedAt_Create>;
  readonly delete: Maybe<CoursesDocAccessFields_CreatedAt_Delete>;
  readonly read: Maybe<CoursesDocAccessFields_CreatedAt_Read>;
  readonly update: Maybe<CoursesDocAccessFields_CreatedAt_Update>;
};

export type CoursesDocAccessFields_CreatedAt_Create = {
  readonly __typename?: 'CoursesDocAccessFields_createdAt_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type CoursesDocAccessFields_CreatedAt_Delete = {
  readonly __typename?: 'CoursesDocAccessFields_createdAt_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type CoursesDocAccessFields_CreatedAt_Read = {
  readonly __typename?: 'CoursesDocAccessFields_createdAt_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type CoursesDocAccessFields_CreatedAt_Update = {
  readonly __typename?: 'CoursesDocAccessFields_createdAt_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type CoursesDocAccessFields_Description = {
  readonly __typename?: 'CoursesDocAccessFields_description';
  readonly create: Maybe<CoursesDocAccessFields_Description_Create>;
  readonly delete: Maybe<CoursesDocAccessFields_Description_Delete>;
  readonly read: Maybe<CoursesDocAccessFields_Description_Read>;
  readonly update: Maybe<CoursesDocAccessFields_Description_Update>;
};

export type CoursesDocAccessFields_Description_Create = {
  readonly __typename?: 'CoursesDocAccessFields_description_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type CoursesDocAccessFields_Description_Delete = {
  readonly __typename?: 'CoursesDocAccessFields_description_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type CoursesDocAccessFields_Description_Read = {
  readonly __typename?: 'CoursesDocAccessFields_description_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type CoursesDocAccessFields_Description_Update = {
  readonly __typename?: 'CoursesDocAccessFields_description_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type CoursesDocAccessFields_Discount = {
  readonly __typename?: 'CoursesDocAccessFields_discount';
  readonly create: Maybe<CoursesDocAccessFields_Discount_Create>;
  readonly delete: Maybe<CoursesDocAccessFields_Discount_Delete>;
  readonly read: Maybe<CoursesDocAccessFields_Discount_Read>;
  readonly update: Maybe<CoursesDocAccessFields_Discount_Update>;
};

export type CoursesDocAccessFields_Discount_Create = {
  readonly __typename?: 'CoursesDocAccessFields_discount_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type CoursesDocAccessFields_Discount_Delete = {
  readonly __typename?: 'CoursesDocAccessFields_discount_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type CoursesDocAccessFields_Discount_Read = {
  readonly __typename?: 'CoursesDocAccessFields_discount_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type CoursesDocAccessFields_Discount_Update = {
  readonly __typename?: 'CoursesDocAccessFields_discount_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type CoursesDocAccessFields_Exams = {
  readonly __typename?: 'CoursesDocAccessFields_exams';
  readonly create: Maybe<CoursesDocAccessFields_Exams_Create>;
  readonly delete: Maybe<CoursesDocAccessFields_Exams_Delete>;
  readonly read: Maybe<CoursesDocAccessFields_Exams_Read>;
  readonly update: Maybe<CoursesDocAccessFields_Exams_Update>;
};

export type CoursesDocAccessFields_Exams_Create = {
  readonly __typename?: 'CoursesDocAccessFields_exams_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type CoursesDocAccessFields_Exams_Delete = {
  readonly __typename?: 'CoursesDocAccessFields_exams_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type CoursesDocAccessFields_Exams_Read = {
  readonly __typename?: 'CoursesDocAccessFields_exams_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type CoursesDocAccessFields_Exams_Update = {
  readonly __typename?: 'CoursesDocAccessFields_exams_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type CoursesDocAccessFields_IsFree = {
  readonly __typename?: 'CoursesDocAccessFields_isFree';
  readonly create: Maybe<CoursesDocAccessFields_IsFree_Create>;
  readonly delete: Maybe<CoursesDocAccessFields_IsFree_Delete>;
  readonly read: Maybe<CoursesDocAccessFields_IsFree_Read>;
  readonly update: Maybe<CoursesDocAccessFields_IsFree_Update>;
};

export type CoursesDocAccessFields_IsFree_Create = {
  readonly __typename?: 'CoursesDocAccessFields_isFree_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type CoursesDocAccessFields_IsFree_Delete = {
  readonly __typename?: 'CoursesDocAccessFields_isFree_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type CoursesDocAccessFields_IsFree_Read = {
  readonly __typename?: 'CoursesDocAccessFields_isFree_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type CoursesDocAccessFields_IsFree_Update = {
  readonly __typename?: 'CoursesDocAccessFields_isFree_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type CoursesDocAccessFields_KinescopeVideos = {
  readonly __typename?: 'CoursesDocAccessFields_kinescopeVideos';
  readonly create: Maybe<CoursesDocAccessFields_KinescopeVideos_Create>;
  readonly delete: Maybe<CoursesDocAccessFields_KinescopeVideos_Delete>;
  readonly read: Maybe<CoursesDocAccessFields_KinescopeVideos_Read>;
  readonly update: Maybe<CoursesDocAccessFields_KinescopeVideos_Update>;
};

export type CoursesDocAccessFields_KinescopeVideos_Create = {
  readonly __typename?: 'CoursesDocAccessFields_kinescopeVideos_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type CoursesDocAccessFields_KinescopeVideos_Delete = {
  readonly __typename?: 'CoursesDocAccessFields_kinescopeVideos_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type CoursesDocAccessFields_KinescopeVideos_Read = {
  readonly __typename?: 'CoursesDocAccessFields_kinescopeVideos_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type CoursesDocAccessFields_KinescopeVideos_Update = {
  readonly __typename?: 'CoursesDocAccessFields_kinescopeVideos_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type CoursesDocAccessFields_PreviewVideoId = {
  readonly __typename?: 'CoursesDocAccessFields_previewVideoId';
  readonly create: Maybe<CoursesDocAccessFields_PreviewVideoId_Create>;
  readonly delete: Maybe<CoursesDocAccessFields_PreviewVideoId_Delete>;
  readonly read: Maybe<CoursesDocAccessFields_PreviewVideoId_Read>;
  readonly update: Maybe<CoursesDocAccessFields_PreviewVideoId_Update>;
};

export type CoursesDocAccessFields_PreviewVideoId_Create = {
  readonly __typename?: 'CoursesDocAccessFields_previewVideoId_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type CoursesDocAccessFields_PreviewVideoId_Delete = {
  readonly __typename?: 'CoursesDocAccessFields_previewVideoId_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type CoursesDocAccessFields_PreviewVideoId_Read = {
  readonly __typename?: 'CoursesDocAccessFields_previewVideoId_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type CoursesDocAccessFields_PreviewVideoId_Update = {
  readonly __typename?: 'CoursesDocAccessFields_previewVideoId_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type CoursesDocAccessFields_Price = {
  readonly __typename?: 'CoursesDocAccessFields_price';
  readonly create: Maybe<CoursesDocAccessFields_Price_Create>;
  readonly delete: Maybe<CoursesDocAccessFields_Price_Delete>;
  readonly read: Maybe<CoursesDocAccessFields_Price_Read>;
  readonly update: Maybe<CoursesDocAccessFields_Price_Update>;
};

export type CoursesDocAccessFields_Price_Create = {
  readonly __typename?: 'CoursesDocAccessFields_price_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type CoursesDocAccessFields_Price_Delete = {
  readonly __typename?: 'CoursesDocAccessFields_price_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type CoursesDocAccessFields_Price_Read = {
  readonly __typename?: 'CoursesDocAccessFields_price_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type CoursesDocAccessFields_Price_Update = {
  readonly __typename?: 'CoursesDocAccessFields_price_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type CoursesDocAccessFields_Slug = {
  readonly __typename?: 'CoursesDocAccessFields_slug';
  readonly create: Maybe<CoursesDocAccessFields_Slug_Create>;
  readonly delete: Maybe<CoursesDocAccessFields_Slug_Delete>;
  readonly read: Maybe<CoursesDocAccessFields_Slug_Read>;
  readonly update: Maybe<CoursesDocAccessFields_Slug_Update>;
};

export type CoursesDocAccessFields_Slug_Create = {
  readonly __typename?: 'CoursesDocAccessFields_slug_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type CoursesDocAccessFields_Slug_Delete = {
  readonly __typename?: 'CoursesDocAccessFields_slug_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type CoursesDocAccessFields_Slug_Read = {
  readonly __typename?: 'CoursesDocAccessFields_slug_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type CoursesDocAccessFields_Slug_Update = {
  readonly __typename?: 'CoursesDocAccessFields_slug_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type CoursesDocAccessFields_Subjects = {
  readonly __typename?: 'CoursesDocAccessFields_subjects';
  readonly create: Maybe<CoursesDocAccessFields_Subjects_Create>;
  readonly delete: Maybe<CoursesDocAccessFields_Subjects_Delete>;
  readonly read: Maybe<CoursesDocAccessFields_Subjects_Read>;
  readonly update: Maybe<CoursesDocAccessFields_Subjects_Update>;
};

export type CoursesDocAccessFields_Subjects_Create = {
  readonly __typename?: 'CoursesDocAccessFields_subjects_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type CoursesDocAccessFields_Subjects_Delete = {
  readonly __typename?: 'CoursesDocAccessFields_subjects_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type CoursesDocAccessFields_Subjects_Read = {
  readonly __typename?: 'CoursesDocAccessFields_subjects_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type CoursesDocAccessFields_Subjects_Update = {
  readonly __typename?: 'CoursesDocAccessFields_subjects_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type CoursesDocAccessFields_Title = {
  readonly __typename?: 'CoursesDocAccessFields_title';
  readonly create: Maybe<CoursesDocAccessFields_Title_Create>;
  readonly delete: Maybe<CoursesDocAccessFields_Title_Delete>;
  readonly read: Maybe<CoursesDocAccessFields_Title_Read>;
  readonly update: Maybe<CoursesDocAccessFields_Title_Update>;
};

export type CoursesDocAccessFields_Title_Create = {
  readonly __typename?: 'CoursesDocAccessFields_title_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type CoursesDocAccessFields_Title_Delete = {
  readonly __typename?: 'CoursesDocAccessFields_title_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type CoursesDocAccessFields_Title_Read = {
  readonly __typename?: 'CoursesDocAccessFields_title_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type CoursesDocAccessFields_Title_Update = {
  readonly __typename?: 'CoursesDocAccessFields_title_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type CoursesDocAccessFields_TotalDuration = {
  readonly __typename?: 'CoursesDocAccessFields_totalDuration';
  readonly create: Maybe<CoursesDocAccessFields_TotalDuration_Create>;
  readonly delete: Maybe<CoursesDocAccessFields_TotalDuration_Delete>;
  readonly read: Maybe<CoursesDocAccessFields_TotalDuration_Read>;
  readonly update: Maybe<CoursesDocAccessFields_TotalDuration_Update>;
};

export type CoursesDocAccessFields_TotalDuration_Create = {
  readonly __typename?: 'CoursesDocAccessFields_totalDuration_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type CoursesDocAccessFields_TotalDuration_Delete = {
  readonly __typename?: 'CoursesDocAccessFields_totalDuration_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type CoursesDocAccessFields_TotalDuration_Read = {
  readonly __typename?: 'CoursesDocAccessFields_totalDuration_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type CoursesDocAccessFields_TotalDuration_Update = {
  readonly __typename?: 'CoursesDocAccessFields_totalDuration_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type CoursesDocAccessFields_UpdatedAt = {
  readonly __typename?: 'CoursesDocAccessFields_updatedAt';
  readonly create: Maybe<CoursesDocAccessFields_UpdatedAt_Create>;
  readonly delete: Maybe<CoursesDocAccessFields_UpdatedAt_Delete>;
  readonly read: Maybe<CoursesDocAccessFields_UpdatedAt_Read>;
  readonly update: Maybe<CoursesDocAccessFields_UpdatedAt_Update>;
};

export type CoursesDocAccessFields_UpdatedAt_Create = {
  readonly __typename?: 'CoursesDocAccessFields_updatedAt_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type CoursesDocAccessFields_UpdatedAt_Delete = {
  readonly __typename?: 'CoursesDocAccessFields_updatedAt_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type CoursesDocAccessFields_UpdatedAt_Read = {
  readonly __typename?: 'CoursesDocAccessFields_updatedAt_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type CoursesDocAccessFields_UpdatedAt_Update = {
  readonly __typename?: 'CoursesDocAccessFields_updatedAt_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type CoursesFields = {
  readonly __typename?: 'CoursesFields';
  readonly banner: Maybe<CoursesFields_Banner>;
  readonly createdAt: Maybe<CoursesFields_CreatedAt>;
  readonly description: Maybe<CoursesFields_Description>;
  readonly discount: Maybe<CoursesFields_Discount>;
  readonly exams: Maybe<CoursesFields_Exams>;
  readonly isFree: Maybe<CoursesFields_IsFree>;
  readonly kinescopeVideos: Maybe<CoursesFields_KinescopeVideos>;
  readonly previewVideoId: Maybe<CoursesFields_PreviewVideoId>;
  readonly price: Maybe<CoursesFields_Price>;
  readonly slug: Maybe<CoursesFields_Slug>;
  readonly subjects: Maybe<CoursesFields_Subjects>;
  readonly title: Maybe<CoursesFields_Title>;
  readonly totalDuration: Maybe<CoursesFields_TotalDuration>;
  readonly updatedAt: Maybe<CoursesFields_UpdatedAt>;
};

export type CoursesFields_Banner = {
  readonly __typename?: 'CoursesFields_banner';
  readonly create: Maybe<CoursesFields_Banner_Create>;
  readonly delete: Maybe<CoursesFields_Banner_Delete>;
  readonly read: Maybe<CoursesFields_Banner_Read>;
  readonly update: Maybe<CoursesFields_Banner_Update>;
};

export type CoursesFields_Banner_Create = {
  readonly __typename?: 'CoursesFields_banner_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type CoursesFields_Banner_Delete = {
  readonly __typename?: 'CoursesFields_banner_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type CoursesFields_Banner_Read = {
  readonly __typename?: 'CoursesFields_banner_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type CoursesFields_Banner_Update = {
  readonly __typename?: 'CoursesFields_banner_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type CoursesFields_CreatedAt = {
  readonly __typename?: 'CoursesFields_createdAt';
  readonly create: Maybe<CoursesFields_CreatedAt_Create>;
  readonly delete: Maybe<CoursesFields_CreatedAt_Delete>;
  readonly read: Maybe<CoursesFields_CreatedAt_Read>;
  readonly update: Maybe<CoursesFields_CreatedAt_Update>;
};

export type CoursesFields_CreatedAt_Create = {
  readonly __typename?: 'CoursesFields_createdAt_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type CoursesFields_CreatedAt_Delete = {
  readonly __typename?: 'CoursesFields_createdAt_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type CoursesFields_CreatedAt_Read = {
  readonly __typename?: 'CoursesFields_createdAt_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type CoursesFields_CreatedAt_Update = {
  readonly __typename?: 'CoursesFields_createdAt_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type CoursesFields_Description = {
  readonly __typename?: 'CoursesFields_description';
  readonly create: Maybe<CoursesFields_Description_Create>;
  readonly delete: Maybe<CoursesFields_Description_Delete>;
  readonly read: Maybe<CoursesFields_Description_Read>;
  readonly update: Maybe<CoursesFields_Description_Update>;
};

export type CoursesFields_Description_Create = {
  readonly __typename?: 'CoursesFields_description_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type CoursesFields_Description_Delete = {
  readonly __typename?: 'CoursesFields_description_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type CoursesFields_Description_Read = {
  readonly __typename?: 'CoursesFields_description_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type CoursesFields_Description_Update = {
  readonly __typename?: 'CoursesFields_description_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type CoursesFields_Discount = {
  readonly __typename?: 'CoursesFields_discount';
  readonly create: Maybe<CoursesFields_Discount_Create>;
  readonly delete: Maybe<CoursesFields_Discount_Delete>;
  readonly read: Maybe<CoursesFields_Discount_Read>;
  readonly update: Maybe<CoursesFields_Discount_Update>;
};

export type CoursesFields_Discount_Create = {
  readonly __typename?: 'CoursesFields_discount_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type CoursesFields_Discount_Delete = {
  readonly __typename?: 'CoursesFields_discount_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type CoursesFields_Discount_Read = {
  readonly __typename?: 'CoursesFields_discount_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type CoursesFields_Discount_Update = {
  readonly __typename?: 'CoursesFields_discount_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type CoursesFields_Exams = {
  readonly __typename?: 'CoursesFields_exams';
  readonly create: Maybe<CoursesFields_Exams_Create>;
  readonly delete: Maybe<CoursesFields_Exams_Delete>;
  readonly read: Maybe<CoursesFields_Exams_Read>;
  readonly update: Maybe<CoursesFields_Exams_Update>;
};

export type CoursesFields_Exams_Create = {
  readonly __typename?: 'CoursesFields_exams_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type CoursesFields_Exams_Delete = {
  readonly __typename?: 'CoursesFields_exams_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type CoursesFields_Exams_Read = {
  readonly __typename?: 'CoursesFields_exams_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type CoursesFields_Exams_Update = {
  readonly __typename?: 'CoursesFields_exams_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type CoursesFields_IsFree = {
  readonly __typename?: 'CoursesFields_isFree';
  readonly create: Maybe<CoursesFields_IsFree_Create>;
  readonly delete: Maybe<CoursesFields_IsFree_Delete>;
  readonly read: Maybe<CoursesFields_IsFree_Read>;
  readonly update: Maybe<CoursesFields_IsFree_Update>;
};

export type CoursesFields_IsFree_Create = {
  readonly __typename?: 'CoursesFields_isFree_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type CoursesFields_IsFree_Delete = {
  readonly __typename?: 'CoursesFields_isFree_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type CoursesFields_IsFree_Read = {
  readonly __typename?: 'CoursesFields_isFree_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type CoursesFields_IsFree_Update = {
  readonly __typename?: 'CoursesFields_isFree_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type CoursesFields_KinescopeVideos = {
  readonly __typename?: 'CoursesFields_kinescopeVideos';
  readonly create: Maybe<CoursesFields_KinescopeVideos_Create>;
  readonly delete: Maybe<CoursesFields_KinescopeVideos_Delete>;
  readonly read: Maybe<CoursesFields_KinescopeVideos_Read>;
  readonly update: Maybe<CoursesFields_KinescopeVideos_Update>;
};

export type CoursesFields_KinescopeVideos_Create = {
  readonly __typename?: 'CoursesFields_kinescopeVideos_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type CoursesFields_KinescopeVideos_Delete = {
  readonly __typename?: 'CoursesFields_kinescopeVideos_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type CoursesFields_KinescopeVideos_Read = {
  readonly __typename?: 'CoursesFields_kinescopeVideos_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type CoursesFields_KinescopeVideos_Update = {
  readonly __typename?: 'CoursesFields_kinescopeVideos_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type CoursesFields_PreviewVideoId = {
  readonly __typename?: 'CoursesFields_previewVideoId';
  readonly create: Maybe<CoursesFields_PreviewVideoId_Create>;
  readonly delete: Maybe<CoursesFields_PreviewVideoId_Delete>;
  readonly read: Maybe<CoursesFields_PreviewVideoId_Read>;
  readonly update: Maybe<CoursesFields_PreviewVideoId_Update>;
};

export type CoursesFields_PreviewVideoId_Create = {
  readonly __typename?: 'CoursesFields_previewVideoId_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type CoursesFields_PreviewVideoId_Delete = {
  readonly __typename?: 'CoursesFields_previewVideoId_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type CoursesFields_PreviewVideoId_Read = {
  readonly __typename?: 'CoursesFields_previewVideoId_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type CoursesFields_PreviewVideoId_Update = {
  readonly __typename?: 'CoursesFields_previewVideoId_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type CoursesFields_Price = {
  readonly __typename?: 'CoursesFields_price';
  readonly create: Maybe<CoursesFields_Price_Create>;
  readonly delete: Maybe<CoursesFields_Price_Delete>;
  readonly read: Maybe<CoursesFields_Price_Read>;
  readonly update: Maybe<CoursesFields_Price_Update>;
};

export type CoursesFields_Price_Create = {
  readonly __typename?: 'CoursesFields_price_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type CoursesFields_Price_Delete = {
  readonly __typename?: 'CoursesFields_price_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type CoursesFields_Price_Read = {
  readonly __typename?: 'CoursesFields_price_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type CoursesFields_Price_Update = {
  readonly __typename?: 'CoursesFields_price_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type CoursesFields_Slug = {
  readonly __typename?: 'CoursesFields_slug';
  readonly create: Maybe<CoursesFields_Slug_Create>;
  readonly delete: Maybe<CoursesFields_Slug_Delete>;
  readonly read: Maybe<CoursesFields_Slug_Read>;
  readonly update: Maybe<CoursesFields_Slug_Update>;
};

export type CoursesFields_Slug_Create = {
  readonly __typename?: 'CoursesFields_slug_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type CoursesFields_Slug_Delete = {
  readonly __typename?: 'CoursesFields_slug_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type CoursesFields_Slug_Read = {
  readonly __typename?: 'CoursesFields_slug_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type CoursesFields_Slug_Update = {
  readonly __typename?: 'CoursesFields_slug_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type CoursesFields_Subjects = {
  readonly __typename?: 'CoursesFields_subjects';
  readonly create: Maybe<CoursesFields_Subjects_Create>;
  readonly delete: Maybe<CoursesFields_Subjects_Delete>;
  readonly read: Maybe<CoursesFields_Subjects_Read>;
  readonly update: Maybe<CoursesFields_Subjects_Update>;
};

export type CoursesFields_Subjects_Create = {
  readonly __typename?: 'CoursesFields_subjects_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type CoursesFields_Subjects_Delete = {
  readonly __typename?: 'CoursesFields_subjects_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type CoursesFields_Subjects_Read = {
  readonly __typename?: 'CoursesFields_subjects_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type CoursesFields_Subjects_Update = {
  readonly __typename?: 'CoursesFields_subjects_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type CoursesFields_Title = {
  readonly __typename?: 'CoursesFields_title';
  readonly create: Maybe<CoursesFields_Title_Create>;
  readonly delete: Maybe<CoursesFields_Title_Delete>;
  readonly read: Maybe<CoursesFields_Title_Read>;
  readonly update: Maybe<CoursesFields_Title_Update>;
};

export type CoursesFields_Title_Create = {
  readonly __typename?: 'CoursesFields_title_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type CoursesFields_Title_Delete = {
  readonly __typename?: 'CoursesFields_title_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type CoursesFields_Title_Read = {
  readonly __typename?: 'CoursesFields_title_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type CoursesFields_Title_Update = {
  readonly __typename?: 'CoursesFields_title_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type CoursesFields_TotalDuration = {
  readonly __typename?: 'CoursesFields_totalDuration';
  readonly create: Maybe<CoursesFields_TotalDuration_Create>;
  readonly delete: Maybe<CoursesFields_TotalDuration_Delete>;
  readonly read: Maybe<CoursesFields_TotalDuration_Read>;
  readonly update: Maybe<CoursesFields_TotalDuration_Update>;
};

export type CoursesFields_TotalDuration_Create = {
  readonly __typename?: 'CoursesFields_totalDuration_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type CoursesFields_TotalDuration_Delete = {
  readonly __typename?: 'CoursesFields_totalDuration_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type CoursesFields_TotalDuration_Read = {
  readonly __typename?: 'CoursesFields_totalDuration_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type CoursesFields_TotalDuration_Update = {
  readonly __typename?: 'CoursesFields_totalDuration_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type CoursesFields_UpdatedAt = {
  readonly __typename?: 'CoursesFields_updatedAt';
  readonly create: Maybe<CoursesFields_UpdatedAt_Create>;
  readonly delete: Maybe<CoursesFields_UpdatedAt_Delete>;
  readonly read: Maybe<CoursesFields_UpdatedAt_Read>;
  readonly update: Maybe<CoursesFields_UpdatedAt_Update>;
};

export type CoursesFields_UpdatedAt_Create = {
  readonly __typename?: 'CoursesFields_updatedAt_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type CoursesFields_UpdatedAt_Delete = {
  readonly __typename?: 'CoursesFields_updatedAt_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type CoursesFields_UpdatedAt_Read = {
  readonly __typename?: 'CoursesFields_updatedAt_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type CoursesFields_UpdatedAt_Update = {
  readonly __typename?: 'CoursesFields_updatedAt_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type CoursesReadAccess = {
  readonly __typename?: 'CoursesReadAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where: Maybe<Scalars['JSONObject']['output']>;
};

export type CoursesReadDocAccess = {
  readonly __typename?: 'CoursesReadDocAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where: Maybe<Scalars['JSONObject']['output']>;
};

export type CoursesUpdateAccess = {
  readonly __typename?: 'CoursesUpdateAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where: Maybe<Scalars['JSONObject']['output']>;
};

export type CoursesUpdateDocAccess = {
  readonly __typename?: 'CoursesUpdateDocAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where: Maybe<Scalars['JSONObject']['output']>;
};

export type Exam = {
  readonly __typename?: 'Exam';
  readonly code: Scalars['String']['output'];
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly id: Scalars['Int']['output'];
  readonly title: Scalars['String']['output'];
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
};

export type Exam_Code_Operator = {
  readonly all: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly contains: InputMaybe<Scalars['String']['input']>;
  readonly equals: InputMaybe<Scalars['String']['input']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly like: InputMaybe<Scalars['String']['input']>;
  readonly not_equals: InputMaybe<Scalars['String']['input']>;
  readonly not_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type Exam_CreatedAt_Operator = {
  readonly equals: InputMaybe<Scalars['DateTime']['input']>;
  readonly exists: InputMaybe<Scalars['Boolean']['input']>;
  readonly greater_than: InputMaybe<Scalars['DateTime']['input']>;
  readonly greater_than_equal: InputMaybe<Scalars['DateTime']['input']>;
  readonly less_than: InputMaybe<Scalars['DateTime']['input']>;
  readonly less_than_equal: InputMaybe<Scalars['DateTime']['input']>;
  readonly like: InputMaybe<Scalars['DateTime']['input']>;
  readonly not_equals: InputMaybe<Scalars['DateTime']['input']>;
};

export type Exam_Id_Operator = {
  readonly equals: InputMaybe<Scalars['Int']['input']>;
  readonly exists: InputMaybe<Scalars['Boolean']['input']>;
  readonly greater_than: InputMaybe<Scalars['Int']['input']>;
  readonly greater_than_equal: InputMaybe<Scalars['Int']['input']>;
  readonly less_than: InputMaybe<Scalars['Int']['input']>;
  readonly less_than_equal: InputMaybe<Scalars['Int']['input']>;
  readonly not_equals: InputMaybe<Scalars['Int']['input']>;
};

export type Exam_Title_Operator = {
  readonly all: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly contains: InputMaybe<Scalars['String']['input']>;
  readonly equals: InputMaybe<Scalars['String']['input']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly like: InputMaybe<Scalars['String']['input']>;
  readonly not_equals: InputMaybe<Scalars['String']['input']>;
  readonly not_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type Exam_UpdatedAt_Operator = {
  readonly equals: InputMaybe<Scalars['DateTime']['input']>;
  readonly exists: InputMaybe<Scalars['Boolean']['input']>;
  readonly greater_than: InputMaybe<Scalars['DateTime']['input']>;
  readonly greater_than_equal: InputMaybe<Scalars['DateTime']['input']>;
  readonly less_than: InputMaybe<Scalars['DateTime']['input']>;
  readonly less_than_equal: InputMaybe<Scalars['DateTime']['input']>;
  readonly like: InputMaybe<Scalars['DateTime']['input']>;
  readonly not_equals: InputMaybe<Scalars['DateTime']['input']>;
};

export type Exam_Where = {
  readonly AND: InputMaybe<ReadonlyArray<InputMaybe<Exam_Where_And>>>;
  readonly OR: InputMaybe<ReadonlyArray<InputMaybe<Exam_Where_Or>>>;
  readonly code: InputMaybe<Exam_Code_Operator>;
  readonly createdAt: InputMaybe<Exam_CreatedAt_Operator>;
  readonly id: InputMaybe<Exam_Id_Operator>;
  readonly title: InputMaybe<Exam_Title_Operator>;
  readonly updatedAt: InputMaybe<Exam_UpdatedAt_Operator>;
};

export type Exam_Where_And = {
  readonly AND: InputMaybe<ReadonlyArray<InputMaybe<Exam_Where_And>>>;
  readonly OR: InputMaybe<ReadonlyArray<InputMaybe<Exam_Where_Or>>>;
  readonly code: InputMaybe<Exam_Code_Operator>;
  readonly createdAt: InputMaybe<Exam_CreatedAt_Operator>;
  readonly id: InputMaybe<Exam_Id_Operator>;
  readonly title: InputMaybe<Exam_Title_Operator>;
  readonly updatedAt: InputMaybe<Exam_UpdatedAt_Operator>;
};

export type Exam_Where_Or = {
  readonly AND: InputMaybe<ReadonlyArray<InputMaybe<Exam_Where_And>>>;
  readonly OR: InputMaybe<ReadonlyArray<InputMaybe<Exam_Where_Or>>>;
  readonly code: InputMaybe<Exam_Code_Operator>;
  readonly createdAt: InputMaybe<Exam_CreatedAt_Operator>;
  readonly id: InputMaybe<Exam_Id_Operator>;
  readonly title: InputMaybe<Exam_Title_Operator>;
  readonly updatedAt: InputMaybe<Exam_UpdatedAt_Operator>;
};

export type Exams = {
  readonly __typename?: 'Exams';
  readonly docs: ReadonlyArray<Exam>;
  readonly hasNextPage: Scalars['Boolean']['output'];
  readonly hasPrevPage: Scalars['Boolean']['output'];
  readonly limit: Scalars['Int']['output'];
  readonly nextPage: Maybe<Scalars['Int']['output']>;
  readonly offset: Maybe<Scalars['Int']['output']>;
  readonly page: Scalars['Int']['output'];
  readonly pagingCounter: Scalars['Int']['output'];
  readonly prevPage: Maybe<Scalars['Int']['output']>;
  readonly totalDocs: Scalars['Int']['output'];
  readonly totalPages: Scalars['Int']['output'];
};

export type ExamsCreateAccess = {
  readonly __typename?: 'ExamsCreateAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where: Maybe<Scalars['JSONObject']['output']>;
};

export type ExamsCreateDocAccess = {
  readonly __typename?: 'ExamsCreateDocAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where: Maybe<Scalars['JSONObject']['output']>;
};

export type ExamsDeleteAccess = {
  readonly __typename?: 'ExamsDeleteAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where: Maybe<Scalars['JSONObject']['output']>;
};

export type ExamsDeleteDocAccess = {
  readonly __typename?: 'ExamsDeleteDocAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where: Maybe<Scalars['JSONObject']['output']>;
};

export type ExamsDocAccessFields = {
  readonly __typename?: 'ExamsDocAccessFields';
  readonly code: Maybe<ExamsDocAccessFields_Code>;
  readonly createdAt: Maybe<ExamsDocAccessFields_CreatedAt>;
  readonly title: Maybe<ExamsDocAccessFields_Title>;
  readonly updatedAt: Maybe<ExamsDocAccessFields_UpdatedAt>;
};

export type ExamsDocAccessFields_Code = {
  readonly __typename?: 'ExamsDocAccessFields_code';
  readonly create: Maybe<ExamsDocAccessFields_Code_Create>;
  readonly delete: Maybe<ExamsDocAccessFields_Code_Delete>;
  readonly read: Maybe<ExamsDocAccessFields_Code_Read>;
  readonly update: Maybe<ExamsDocAccessFields_Code_Update>;
};

export type ExamsDocAccessFields_Code_Create = {
  readonly __typename?: 'ExamsDocAccessFields_code_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type ExamsDocAccessFields_Code_Delete = {
  readonly __typename?: 'ExamsDocAccessFields_code_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type ExamsDocAccessFields_Code_Read = {
  readonly __typename?: 'ExamsDocAccessFields_code_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type ExamsDocAccessFields_Code_Update = {
  readonly __typename?: 'ExamsDocAccessFields_code_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type ExamsDocAccessFields_CreatedAt = {
  readonly __typename?: 'ExamsDocAccessFields_createdAt';
  readonly create: Maybe<ExamsDocAccessFields_CreatedAt_Create>;
  readonly delete: Maybe<ExamsDocAccessFields_CreatedAt_Delete>;
  readonly read: Maybe<ExamsDocAccessFields_CreatedAt_Read>;
  readonly update: Maybe<ExamsDocAccessFields_CreatedAt_Update>;
};

export type ExamsDocAccessFields_CreatedAt_Create = {
  readonly __typename?: 'ExamsDocAccessFields_createdAt_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type ExamsDocAccessFields_CreatedAt_Delete = {
  readonly __typename?: 'ExamsDocAccessFields_createdAt_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type ExamsDocAccessFields_CreatedAt_Read = {
  readonly __typename?: 'ExamsDocAccessFields_createdAt_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type ExamsDocAccessFields_CreatedAt_Update = {
  readonly __typename?: 'ExamsDocAccessFields_createdAt_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type ExamsDocAccessFields_Title = {
  readonly __typename?: 'ExamsDocAccessFields_title';
  readonly create: Maybe<ExamsDocAccessFields_Title_Create>;
  readonly delete: Maybe<ExamsDocAccessFields_Title_Delete>;
  readonly read: Maybe<ExamsDocAccessFields_Title_Read>;
  readonly update: Maybe<ExamsDocAccessFields_Title_Update>;
};

export type ExamsDocAccessFields_Title_Create = {
  readonly __typename?: 'ExamsDocAccessFields_title_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type ExamsDocAccessFields_Title_Delete = {
  readonly __typename?: 'ExamsDocAccessFields_title_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type ExamsDocAccessFields_Title_Read = {
  readonly __typename?: 'ExamsDocAccessFields_title_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type ExamsDocAccessFields_Title_Update = {
  readonly __typename?: 'ExamsDocAccessFields_title_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type ExamsDocAccessFields_UpdatedAt = {
  readonly __typename?: 'ExamsDocAccessFields_updatedAt';
  readonly create: Maybe<ExamsDocAccessFields_UpdatedAt_Create>;
  readonly delete: Maybe<ExamsDocAccessFields_UpdatedAt_Delete>;
  readonly read: Maybe<ExamsDocAccessFields_UpdatedAt_Read>;
  readonly update: Maybe<ExamsDocAccessFields_UpdatedAt_Update>;
};

export type ExamsDocAccessFields_UpdatedAt_Create = {
  readonly __typename?: 'ExamsDocAccessFields_updatedAt_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type ExamsDocAccessFields_UpdatedAt_Delete = {
  readonly __typename?: 'ExamsDocAccessFields_updatedAt_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type ExamsDocAccessFields_UpdatedAt_Read = {
  readonly __typename?: 'ExamsDocAccessFields_updatedAt_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type ExamsDocAccessFields_UpdatedAt_Update = {
  readonly __typename?: 'ExamsDocAccessFields_updatedAt_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type ExamsFields = {
  readonly __typename?: 'ExamsFields';
  readonly code: Maybe<ExamsFields_Code>;
  readonly createdAt: Maybe<ExamsFields_CreatedAt>;
  readonly title: Maybe<ExamsFields_Title>;
  readonly updatedAt: Maybe<ExamsFields_UpdatedAt>;
};

export type ExamsFields_Code = {
  readonly __typename?: 'ExamsFields_code';
  readonly create: Maybe<ExamsFields_Code_Create>;
  readonly delete: Maybe<ExamsFields_Code_Delete>;
  readonly read: Maybe<ExamsFields_Code_Read>;
  readonly update: Maybe<ExamsFields_Code_Update>;
};

export type ExamsFields_Code_Create = {
  readonly __typename?: 'ExamsFields_code_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type ExamsFields_Code_Delete = {
  readonly __typename?: 'ExamsFields_code_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type ExamsFields_Code_Read = {
  readonly __typename?: 'ExamsFields_code_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type ExamsFields_Code_Update = {
  readonly __typename?: 'ExamsFields_code_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type ExamsFields_CreatedAt = {
  readonly __typename?: 'ExamsFields_createdAt';
  readonly create: Maybe<ExamsFields_CreatedAt_Create>;
  readonly delete: Maybe<ExamsFields_CreatedAt_Delete>;
  readonly read: Maybe<ExamsFields_CreatedAt_Read>;
  readonly update: Maybe<ExamsFields_CreatedAt_Update>;
};

export type ExamsFields_CreatedAt_Create = {
  readonly __typename?: 'ExamsFields_createdAt_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type ExamsFields_CreatedAt_Delete = {
  readonly __typename?: 'ExamsFields_createdAt_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type ExamsFields_CreatedAt_Read = {
  readonly __typename?: 'ExamsFields_createdAt_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type ExamsFields_CreatedAt_Update = {
  readonly __typename?: 'ExamsFields_createdAt_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type ExamsFields_Title = {
  readonly __typename?: 'ExamsFields_title';
  readonly create: Maybe<ExamsFields_Title_Create>;
  readonly delete: Maybe<ExamsFields_Title_Delete>;
  readonly read: Maybe<ExamsFields_Title_Read>;
  readonly update: Maybe<ExamsFields_Title_Update>;
};

export type ExamsFields_Title_Create = {
  readonly __typename?: 'ExamsFields_title_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type ExamsFields_Title_Delete = {
  readonly __typename?: 'ExamsFields_title_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type ExamsFields_Title_Read = {
  readonly __typename?: 'ExamsFields_title_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type ExamsFields_Title_Update = {
  readonly __typename?: 'ExamsFields_title_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type ExamsFields_UpdatedAt = {
  readonly __typename?: 'ExamsFields_updatedAt';
  readonly create: Maybe<ExamsFields_UpdatedAt_Create>;
  readonly delete: Maybe<ExamsFields_UpdatedAt_Delete>;
  readonly read: Maybe<ExamsFields_UpdatedAt_Read>;
  readonly update: Maybe<ExamsFields_UpdatedAt_Update>;
};

export type ExamsFields_UpdatedAt_Create = {
  readonly __typename?: 'ExamsFields_updatedAt_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type ExamsFields_UpdatedAt_Delete = {
  readonly __typename?: 'ExamsFields_updatedAt_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type ExamsFields_UpdatedAt_Read = {
  readonly __typename?: 'ExamsFields_updatedAt_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type ExamsFields_UpdatedAt_Update = {
  readonly __typename?: 'ExamsFields_updatedAt_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type ExamsReadAccess = {
  readonly __typename?: 'ExamsReadAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where: Maybe<Scalars['JSONObject']['output']>;
};

export type ExamsReadDocAccess = {
  readonly __typename?: 'ExamsReadDocAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where: Maybe<Scalars['JSONObject']['output']>;
};

export type ExamsUpdateAccess = {
  readonly __typename?: 'ExamsUpdateAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where: Maybe<Scalars['JSONObject']['output']>;
};

export type ExamsUpdateDocAccess = {
  readonly __typename?: 'ExamsUpdateDocAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where: Maybe<Scalars['JSONObject']['output']>;
};

export type FallbackLocaleInputType =
  | 'en'
  | 'none'
  | 'ru';

export type Faq = {
  readonly __typename?: 'Faq';
  readonly answer: Scalars['String']['output'];
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly id: Scalars['Int']['output'];
  readonly question: Scalars['String']['output'];
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
};

export type Faq_Answer_Operator = {
  readonly contains: InputMaybe<Scalars['String']['input']>;
  readonly equals: InputMaybe<Scalars['String']['input']>;
  readonly like: InputMaybe<Scalars['String']['input']>;
  readonly not_equals: InputMaybe<Scalars['String']['input']>;
};

export type Faq_CreatedAt_Operator = {
  readonly equals: InputMaybe<Scalars['DateTime']['input']>;
  readonly exists: InputMaybe<Scalars['Boolean']['input']>;
  readonly greater_than: InputMaybe<Scalars['DateTime']['input']>;
  readonly greater_than_equal: InputMaybe<Scalars['DateTime']['input']>;
  readonly less_than: InputMaybe<Scalars['DateTime']['input']>;
  readonly less_than_equal: InputMaybe<Scalars['DateTime']['input']>;
  readonly like: InputMaybe<Scalars['DateTime']['input']>;
  readonly not_equals: InputMaybe<Scalars['DateTime']['input']>;
};

export type Faq_Id_Operator = {
  readonly equals: InputMaybe<Scalars['Int']['input']>;
  readonly exists: InputMaybe<Scalars['Boolean']['input']>;
  readonly greater_than: InputMaybe<Scalars['Int']['input']>;
  readonly greater_than_equal: InputMaybe<Scalars['Int']['input']>;
  readonly less_than: InputMaybe<Scalars['Int']['input']>;
  readonly less_than_equal: InputMaybe<Scalars['Int']['input']>;
  readonly not_equals: InputMaybe<Scalars['Int']['input']>;
};

export type Faq_Question_Operator = {
  readonly all: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly contains: InputMaybe<Scalars['String']['input']>;
  readonly equals: InputMaybe<Scalars['String']['input']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly like: InputMaybe<Scalars['String']['input']>;
  readonly not_equals: InputMaybe<Scalars['String']['input']>;
  readonly not_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type Faq_UpdatedAt_Operator = {
  readonly equals: InputMaybe<Scalars['DateTime']['input']>;
  readonly exists: InputMaybe<Scalars['Boolean']['input']>;
  readonly greater_than: InputMaybe<Scalars['DateTime']['input']>;
  readonly greater_than_equal: InputMaybe<Scalars['DateTime']['input']>;
  readonly less_than: InputMaybe<Scalars['DateTime']['input']>;
  readonly less_than_equal: InputMaybe<Scalars['DateTime']['input']>;
  readonly like: InputMaybe<Scalars['DateTime']['input']>;
  readonly not_equals: InputMaybe<Scalars['DateTime']['input']>;
};

export type Faq_Where = {
  readonly AND: InputMaybe<ReadonlyArray<InputMaybe<Faq_Where_And>>>;
  readonly OR: InputMaybe<ReadonlyArray<InputMaybe<Faq_Where_Or>>>;
  readonly answer: InputMaybe<Faq_Answer_Operator>;
  readonly createdAt: InputMaybe<Faq_CreatedAt_Operator>;
  readonly id: InputMaybe<Faq_Id_Operator>;
  readonly question: InputMaybe<Faq_Question_Operator>;
  readonly updatedAt: InputMaybe<Faq_UpdatedAt_Operator>;
};

export type Faq_Where_And = {
  readonly AND: InputMaybe<ReadonlyArray<InputMaybe<Faq_Where_And>>>;
  readonly OR: InputMaybe<ReadonlyArray<InputMaybe<Faq_Where_Or>>>;
  readonly answer: InputMaybe<Faq_Answer_Operator>;
  readonly createdAt: InputMaybe<Faq_CreatedAt_Operator>;
  readonly id: InputMaybe<Faq_Id_Operator>;
  readonly question: InputMaybe<Faq_Question_Operator>;
  readonly updatedAt: InputMaybe<Faq_UpdatedAt_Operator>;
};

export type Faq_Where_Or = {
  readonly AND: InputMaybe<ReadonlyArray<InputMaybe<Faq_Where_And>>>;
  readonly OR: InputMaybe<ReadonlyArray<InputMaybe<Faq_Where_Or>>>;
  readonly answer: InputMaybe<Faq_Answer_Operator>;
  readonly createdAt: InputMaybe<Faq_CreatedAt_Operator>;
  readonly id: InputMaybe<Faq_Id_Operator>;
  readonly question: InputMaybe<Faq_Question_Operator>;
  readonly updatedAt: InputMaybe<Faq_UpdatedAt_Operator>;
};

export type Faqs = {
  readonly __typename?: 'Faqs';
  readonly docs: ReadonlyArray<Faq>;
  readonly hasNextPage: Scalars['Boolean']['output'];
  readonly hasPrevPage: Scalars['Boolean']['output'];
  readonly limit: Scalars['Int']['output'];
  readonly nextPage: Maybe<Scalars['Int']['output']>;
  readonly offset: Maybe<Scalars['Int']['output']>;
  readonly page: Scalars['Int']['output'];
  readonly pagingCounter: Scalars['Int']['output'];
  readonly prevPage: Maybe<Scalars['Int']['output']>;
  readonly totalDocs: Scalars['Int']['output'];
  readonly totalPages: Scalars['Int']['output'];
};

export type FaqsCreateAccess = {
  readonly __typename?: 'FaqsCreateAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where: Maybe<Scalars['JSONObject']['output']>;
};

export type FaqsCreateDocAccess = {
  readonly __typename?: 'FaqsCreateDocAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where: Maybe<Scalars['JSONObject']['output']>;
};

export type FaqsDeleteAccess = {
  readonly __typename?: 'FaqsDeleteAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where: Maybe<Scalars['JSONObject']['output']>;
};

export type FaqsDeleteDocAccess = {
  readonly __typename?: 'FaqsDeleteDocAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where: Maybe<Scalars['JSONObject']['output']>;
};

export type FaqsDocAccessFields = {
  readonly __typename?: 'FaqsDocAccessFields';
  readonly answer: Maybe<FaqsDocAccessFields_Answer>;
  readonly createdAt: Maybe<FaqsDocAccessFields_CreatedAt>;
  readonly question: Maybe<FaqsDocAccessFields_Question>;
  readonly updatedAt: Maybe<FaqsDocAccessFields_UpdatedAt>;
};

export type FaqsDocAccessFields_Answer = {
  readonly __typename?: 'FaqsDocAccessFields_answer';
  readonly create: Maybe<FaqsDocAccessFields_Answer_Create>;
  readonly delete: Maybe<FaqsDocAccessFields_Answer_Delete>;
  readonly read: Maybe<FaqsDocAccessFields_Answer_Read>;
  readonly update: Maybe<FaqsDocAccessFields_Answer_Update>;
};

export type FaqsDocAccessFields_Answer_Create = {
  readonly __typename?: 'FaqsDocAccessFields_answer_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type FaqsDocAccessFields_Answer_Delete = {
  readonly __typename?: 'FaqsDocAccessFields_answer_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type FaqsDocAccessFields_Answer_Read = {
  readonly __typename?: 'FaqsDocAccessFields_answer_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type FaqsDocAccessFields_Answer_Update = {
  readonly __typename?: 'FaqsDocAccessFields_answer_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type FaqsDocAccessFields_CreatedAt = {
  readonly __typename?: 'FaqsDocAccessFields_createdAt';
  readonly create: Maybe<FaqsDocAccessFields_CreatedAt_Create>;
  readonly delete: Maybe<FaqsDocAccessFields_CreatedAt_Delete>;
  readonly read: Maybe<FaqsDocAccessFields_CreatedAt_Read>;
  readonly update: Maybe<FaqsDocAccessFields_CreatedAt_Update>;
};

export type FaqsDocAccessFields_CreatedAt_Create = {
  readonly __typename?: 'FaqsDocAccessFields_createdAt_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type FaqsDocAccessFields_CreatedAt_Delete = {
  readonly __typename?: 'FaqsDocAccessFields_createdAt_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type FaqsDocAccessFields_CreatedAt_Read = {
  readonly __typename?: 'FaqsDocAccessFields_createdAt_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type FaqsDocAccessFields_CreatedAt_Update = {
  readonly __typename?: 'FaqsDocAccessFields_createdAt_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type FaqsDocAccessFields_Question = {
  readonly __typename?: 'FaqsDocAccessFields_question';
  readonly create: Maybe<FaqsDocAccessFields_Question_Create>;
  readonly delete: Maybe<FaqsDocAccessFields_Question_Delete>;
  readonly read: Maybe<FaqsDocAccessFields_Question_Read>;
  readonly update: Maybe<FaqsDocAccessFields_Question_Update>;
};

export type FaqsDocAccessFields_Question_Create = {
  readonly __typename?: 'FaqsDocAccessFields_question_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type FaqsDocAccessFields_Question_Delete = {
  readonly __typename?: 'FaqsDocAccessFields_question_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type FaqsDocAccessFields_Question_Read = {
  readonly __typename?: 'FaqsDocAccessFields_question_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type FaqsDocAccessFields_Question_Update = {
  readonly __typename?: 'FaqsDocAccessFields_question_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type FaqsDocAccessFields_UpdatedAt = {
  readonly __typename?: 'FaqsDocAccessFields_updatedAt';
  readonly create: Maybe<FaqsDocAccessFields_UpdatedAt_Create>;
  readonly delete: Maybe<FaqsDocAccessFields_UpdatedAt_Delete>;
  readonly read: Maybe<FaqsDocAccessFields_UpdatedAt_Read>;
  readonly update: Maybe<FaqsDocAccessFields_UpdatedAt_Update>;
};

export type FaqsDocAccessFields_UpdatedAt_Create = {
  readonly __typename?: 'FaqsDocAccessFields_updatedAt_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type FaqsDocAccessFields_UpdatedAt_Delete = {
  readonly __typename?: 'FaqsDocAccessFields_updatedAt_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type FaqsDocAccessFields_UpdatedAt_Read = {
  readonly __typename?: 'FaqsDocAccessFields_updatedAt_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type FaqsDocAccessFields_UpdatedAt_Update = {
  readonly __typename?: 'FaqsDocAccessFields_updatedAt_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type FaqsFields = {
  readonly __typename?: 'FaqsFields';
  readonly answer: Maybe<FaqsFields_Answer>;
  readonly createdAt: Maybe<FaqsFields_CreatedAt>;
  readonly question: Maybe<FaqsFields_Question>;
  readonly updatedAt: Maybe<FaqsFields_UpdatedAt>;
};

export type FaqsFields_Answer = {
  readonly __typename?: 'FaqsFields_answer';
  readonly create: Maybe<FaqsFields_Answer_Create>;
  readonly delete: Maybe<FaqsFields_Answer_Delete>;
  readonly read: Maybe<FaqsFields_Answer_Read>;
  readonly update: Maybe<FaqsFields_Answer_Update>;
};

export type FaqsFields_Answer_Create = {
  readonly __typename?: 'FaqsFields_answer_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type FaqsFields_Answer_Delete = {
  readonly __typename?: 'FaqsFields_answer_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type FaqsFields_Answer_Read = {
  readonly __typename?: 'FaqsFields_answer_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type FaqsFields_Answer_Update = {
  readonly __typename?: 'FaqsFields_answer_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type FaqsFields_CreatedAt = {
  readonly __typename?: 'FaqsFields_createdAt';
  readonly create: Maybe<FaqsFields_CreatedAt_Create>;
  readonly delete: Maybe<FaqsFields_CreatedAt_Delete>;
  readonly read: Maybe<FaqsFields_CreatedAt_Read>;
  readonly update: Maybe<FaqsFields_CreatedAt_Update>;
};

export type FaqsFields_CreatedAt_Create = {
  readonly __typename?: 'FaqsFields_createdAt_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type FaqsFields_CreatedAt_Delete = {
  readonly __typename?: 'FaqsFields_createdAt_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type FaqsFields_CreatedAt_Read = {
  readonly __typename?: 'FaqsFields_createdAt_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type FaqsFields_CreatedAt_Update = {
  readonly __typename?: 'FaqsFields_createdAt_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type FaqsFields_Question = {
  readonly __typename?: 'FaqsFields_question';
  readonly create: Maybe<FaqsFields_Question_Create>;
  readonly delete: Maybe<FaqsFields_Question_Delete>;
  readonly read: Maybe<FaqsFields_Question_Read>;
  readonly update: Maybe<FaqsFields_Question_Update>;
};

export type FaqsFields_Question_Create = {
  readonly __typename?: 'FaqsFields_question_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type FaqsFields_Question_Delete = {
  readonly __typename?: 'FaqsFields_question_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type FaqsFields_Question_Read = {
  readonly __typename?: 'FaqsFields_question_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type FaqsFields_Question_Update = {
  readonly __typename?: 'FaqsFields_question_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type FaqsFields_UpdatedAt = {
  readonly __typename?: 'FaqsFields_updatedAt';
  readonly create: Maybe<FaqsFields_UpdatedAt_Create>;
  readonly delete: Maybe<FaqsFields_UpdatedAt_Delete>;
  readonly read: Maybe<FaqsFields_UpdatedAt_Read>;
  readonly update: Maybe<FaqsFields_UpdatedAt_Update>;
};

export type FaqsFields_UpdatedAt_Create = {
  readonly __typename?: 'FaqsFields_updatedAt_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type FaqsFields_UpdatedAt_Delete = {
  readonly __typename?: 'FaqsFields_updatedAt_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type FaqsFields_UpdatedAt_Read = {
  readonly __typename?: 'FaqsFields_updatedAt_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type FaqsFields_UpdatedAt_Update = {
  readonly __typename?: 'FaqsFields_updatedAt_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type FaqsReadAccess = {
  readonly __typename?: 'FaqsReadAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where: Maybe<Scalars['JSONObject']['output']>;
};

export type FaqsReadDocAccess = {
  readonly __typename?: 'FaqsReadDocAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where: Maybe<Scalars['JSONObject']['output']>;
};

export type FaqsUpdateAccess = {
  readonly __typename?: 'FaqsUpdateAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where: Maybe<Scalars['JSONObject']['output']>;
};

export type FaqsUpdateDocAccess = {
  readonly __typename?: 'FaqsUpdateDocAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where: Maybe<Scalars['JSONObject']['output']>;
};

export type HomePage = {
  readonly __typename?: 'HomePage';
  readonly aboutProjectBanner: Maybe<HomePage_AboutProjectBanner>;
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly diagnosticTestBanner: Maybe<HomePage_DiagnosticTestBanner>;
  readonly featuredTest: Maybe<Test>;
  readonly mainOfferBanner: Maybe<HomePage_MainOfferBanner>;
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
};


export type HomePageFeaturedTestArgs = {
  fallbackLocale: InputMaybe<FallbackLocaleInputType>;
  locale: InputMaybe<LocaleInputType>;
};

export type HomePageDocAccessFields = {
  readonly __typename?: 'HomePageDocAccessFields';
  readonly aboutProjectBanner: Maybe<HomePageDocAccessFields_AboutProjectBanner>;
  readonly createdAt: Maybe<HomePageDocAccessFields_CreatedAt>;
  readonly diagnosticTestBanner: Maybe<HomePageDocAccessFields_DiagnosticTestBanner>;
  readonly featuredTest: Maybe<HomePageDocAccessFields_FeaturedTest>;
  readonly mainOfferBanner: Maybe<HomePageDocAccessFields_MainOfferBanner>;
  readonly updatedAt: Maybe<HomePageDocAccessFields_UpdatedAt>;
};

export type HomePageDocAccessFields_AboutProjectBanner = {
  readonly __typename?: 'HomePageDocAccessFields_aboutProjectBanner';
  readonly create: Maybe<HomePageDocAccessFields_AboutProjectBanner_Create>;
  readonly delete: Maybe<HomePageDocAccessFields_AboutProjectBanner_Delete>;
  readonly fields: Maybe<HomePageDocAccessFields_AboutProjectBanner_Fields>;
  readonly read: Maybe<HomePageDocAccessFields_AboutProjectBanner_Read>;
  readonly update: Maybe<HomePageDocAccessFields_AboutProjectBanner_Update>;
};

export type HomePageDocAccessFields_AboutProjectBanner_Create = {
  readonly __typename?: 'HomePageDocAccessFields_aboutProjectBanner_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type HomePageDocAccessFields_AboutProjectBanner_Delete = {
  readonly __typename?: 'HomePageDocAccessFields_aboutProjectBanner_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type HomePageDocAccessFields_AboutProjectBanner_Fields = {
  readonly __typename?: 'HomePageDocAccessFields_aboutProjectBanner_Fields';
  readonly description: Maybe<HomePageDocAccessFields_AboutProjectBanner_Description>;
  readonly subtitle: Maybe<HomePageDocAccessFields_AboutProjectBanner_Subtitle>;
  readonly title: Maybe<HomePageDocAccessFields_AboutProjectBanner_Title>;
};

export type HomePageDocAccessFields_AboutProjectBanner_Read = {
  readonly __typename?: 'HomePageDocAccessFields_aboutProjectBanner_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type HomePageDocAccessFields_AboutProjectBanner_Update = {
  readonly __typename?: 'HomePageDocAccessFields_aboutProjectBanner_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type HomePageDocAccessFields_AboutProjectBanner_Description = {
  readonly __typename?: 'HomePageDocAccessFields_aboutProjectBanner_description';
  readonly create: Maybe<HomePageDocAccessFields_AboutProjectBanner_Description_Create>;
  readonly delete: Maybe<HomePageDocAccessFields_AboutProjectBanner_Description_Delete>;
  readonly read: Maybe<HomePageDocAccessFields_AboutProjectBanner_Description_Read>;
  readonly update: Maybe<HomePageDocAccessFields_AboutProjectBanner_Description_Update>;
};

export type HomePageDocAccessFields_AboutProjectBanner_Description_Create = {
  readonly __typename?: 'HomePageDocAccessFields_aboutProjectBanner_description_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type HomePageDocAccessFields_AboutProjectBanner_Description_Delete = {
  readonly __typename?: 'HomePageDocAccessFields_aboutProjectBanner_description_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type HomePageDocAccessFields_AboutProjectBanner_Description_Read = {
  readonly __typename?: 'HomePageDocAccessFields_aboutProjectBanner_description_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type HomePageDocAccessFields_AboutProjectBanner_Description_Update = {
  readonly __typename?: 'HomePageDocAccessFields_aboutProjectBanner_description_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type HomePageDocAccessFields_AboutProjectBanner_Subtitle = {
  readonly __typename?: 'HomePageDocAccessFields_aboutProjectBanner_subtitle';
  readonly create: Maybe<HomePageDocAccessFields_AboutProjectBanner_Subtitle_Create>;
  readonly delete: Maybe<HomePageDocAccessFields_AboutProjectBanner_Subtitle_Delete>;
  readonly read: Maybe<HomePageDocAccessFields_AboutProjectBanner_Subtitle_Read>;
  readonly update: Maybe<HomePageDocAccessFields_AboutProjectBanner_Subtitle_Update>;
};

export type HomePageDocAccessFields_AboutProjectBanner_Subtitle_Create = {
  readonly __typename?: 'HomePageDocAccessFields_aboutProjectBanner_subtitle_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type HomePageDocAccessFields_AboutProjectBanner_Subtitle_Delete = {
  readonly __typename?: 'HomePageDocAccessFields_aboutProjectBanner_subtitle_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type HomePageDocAccessFields_AboutProjectBanner_Subtitle_Read = {
  readonly __typename?: 'HomePageDocAccessFields_aboutProjectBanner_subtitle_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type HomePageDocAccessFields_AboutProjectBanner_Subtitle_Update = {
  readonly __typename?: 'HomePageDocAccessFields_aboutProjectBanner_subtitle_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type HomePageDocAccessFields_AboutProjectBanner_Title = {
  readonly __typename?: 'HomePageDocAccessFields_aboutProjectBanner_title';
  readonly create: Maybe<HomePageDocAccessFields_AboutProjectBanner_Title_Create>;
  readonly delete: Maybe<HomePageDocAccessFields_AboutProjectBanner_Title_Delete>;
  readonly read: Maybe<HomePageDocAccessFields_AboutProjectBanner_Title_Read>;
  readonly update: Maybe<HomePageDocAccessFields_AboutProjectBanner_Title_Update>;
};

export type HomePageDocAccessFields_AboutProjectBanner_Title_Create = {
  readonly __typename?: 'HomePageDocAccessFields_aboutProjectBanner_title_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type HomePageDocAccessFields_AboutProjectBanner_Title_Delete = {
  readonly __typename?: 'HomePageDocAccessFields_aboutProjectBanner_title_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type HomePageDocAccessFields_AboutProjectBanner_Title_Read = {
  readonly __typename?: 'HomePageDocAccessFields_aboutProjectBanner_title_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type HomePageDocAccessFields_AboutProjectBanner_Title_Update = {
  readonly __typename?: 'HomePageDocAccessFields_aboutProjectBanner_title_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type HomePageDocAccessFields_CreatedAt = {
  readonly __typename?: 'HomePageDocAccessFields_createdAt';
  readonly create: Maybe<HomePageDocAccessFields_CreatedAt_Create>;
  readonly delete: Maybe<HomePageDocAccessFields_CreatedAt_Delete>;
  readonly read: Maybe<HomePageDocAccessFields_CreatedAt_Read>;
  readonly update: Maybe<HomePageDocAccessFields_CreatedAt_Update>;
};

export type HomePageDocAccessFields_CreatedAt_Create = {
  readonly __typename?: 'HomePageDocAccessFields_createdAt_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type HomePageDocAccessFields_CreatedAt_Delete = {
  readonly __typename?: 'HomePageDocAccessFields_createdAt_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type HomePageDocAccessFields_CreatedAt_Read = {
  readonly __typename?: 'HomePageDocAccessFields_createdAt_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type HomePageDocAccessFields_CreatedAt_Update = {
  readonly __typename?: 'HomePageDocAccessFields_createdAt_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type HomePageDocAccessFields_DiagnosticTestBanner = {
  readonly __typename?: 'HomePageDocAccessFields_diagnosticTestBanner';
  readonly create: Maybe<HomePageDocAccessFields_DiagnosticTestBanner_Create>;
  readonly delete: Maybe<HomePageDocAccessFields_DiagnosticTestBanner_Delete>;
  readonly fields: Maybe<HomePageDocAccessFields_DiagnosticTestBanner_Fields>;
  readonly read: Maybe<HomePageDocAccessFields_DiagnosticTestBanner_Read>;
  readonly update: Maybe<HomePageDocAccessFields_DiagnosticTestBanner_Update>;
};

export type HomePageDocAccessFields_DiagnosticTestBanner_Create = {
  readonly __typename?: 'HomePageDocAccessFields_diagnosticTestBanner_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type HomePageDocAccessFields_DiagnosticTestBanner_Delete = {
  readonly __typename?: 'HomePageDocAccessFields_diagnosticTestBanner_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type HomePageDocAccessFields_DiagnosticTestBanner_Fields = {
  readonly __typename?: 'HomePageDocAccessFields_diagnosticTestBanner_Fields';
  readonly label: Maybe<HomePageDocAccessFields_DiagnosticTestBanner_Label>;
  readonly subtitle: Maybe<HomePageDocAccessFields_DiagnosticTestBanner_Subtitle>;
  readonly title: Maybe<HomePageDocAccessFields_DiagnosticTestBanner_Title>;
};

export type HomePageDocAccessFields_DiagnosticTestBanner_Read = {
  readonly __typename?: 'HomePageDocAccessFields_diagnosticTestBanner_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type HomePageDocAccessFields_DiagnosticTestBanner_Update = {
  readonly __typename?: 'HomePageDocAccessFields_diagnosticTestBanner_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type HomePageDocAccessFields_DiagnosticTestBanner_Label = {
  readonly __typename?: 'HomePageDocAccessFields_diagnosticTestBanner_label';
  readonly create: Maybe<HomePageDocAccessFields_DiagnosticTestBanner_Label_Create>;
  readonly delete: Maybe<HomePageDocAccessFields_DiagnosticTestBanner_Label_Delete>;
  readonly read: Maybe<HomePageDocAccessFields_DiagnosticTestBanner_Label_Read>;
  readonly update: Maybe<HomePageDocAccessFields_DiagnosticTestBanner_Label_Update>;
};

export type HomePageDocAccessFields_DiagnosticTestBanner_Label_Create = {
  readonly __typename?: 'HomePageDocAccessFields_diagnosticTestBanner_label_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type HomePageDocAccessFields_DiagnosticTestBanner_Label_Delete = {
  readonly __typename?: 'HomePageDocAccessFields_diagnosticTestBanner_label_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type HomePageDocAccessFields_DiagnosticTestBanner_Label_Read = {
  readonly __typename?: 'HomePageDocAccessFields_diagnosticTestBanner_label_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type HomePageDocAccessFields_DiagnosticTestBanner_Label_Update = {
  readonly __typename?: 'HomePageDocAccessFields_diagnosticTestBanner_label_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type HomePageDocAccessFields_DiagnosticTestBanner_Subtitle = {
  readonly __typename?: 'HomePageDocAccessFields_diagnosticTestBanner_subtitle';
  readonly create: Maybe<HomePageDocAccessFields_DiagnosticTestBanner_Subtitle_Create>;
  readonly delete: Maybe<HomePageDocAccessFields_DiagnosticTestBanner_Subtitle_Delete>;
  readonly read: Maybe<HomePageDocAccessFields_DiagnosticTestBanner_Subtitle_Read>;
  readonly update: Maybe<HomePageDocAccessFields_DiagnosticTestBanner_Subtitle_Update>;
};

export type HomePageDocAccessFields_DiagnosticTestBanner_Subtitle_Create = {
  readonly __typename?: 'HomePageDocAccessFields_diagnosticTestBanner_subtitle_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type HomePageDocAccessFields_DiagnosticTestBanner_Subtitle_Delete = {
  readonly __typename?: 'HomePageDocAccessFields_diagnosticTestBanner_subtitle_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type HomePageDocAccessFields_DiagnosticTestBanner_Subtitle_Read = {
  readonly __typename?: 'HomePageDocAccessFields_diagnosticTestBanner_subtitle_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type HomePageDocAccessFields_DiagnosticTestBanner_Subtitle_Update = {
  readonly __typename?: 'HomePageDocAccessFields_diagnosticTestBanner_subtitle_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type HomePageDocAccessFields_DiagnosticTestBanner_Title = {
  readonly __typename?: 'HomePageDocAccessFields_diagnosticTestBanner_title';
  readonly create: Maybe<HomePageDocAccessFields_DiagnosticTestBanner_Title_Create>;
  readonly delete: Maybe<HomePageDocAccessFields_DiagnosticTestBanner_Title_Delete>;
  readonly read: Maybe<HomePageDocAccessFields_DiagnosticTestBanner_Title_Read>;
  readonly update: Maybe<HomePageDocAccessFields_DiagnosticTestBanner_Title_Update>;
};

export type HomePageDocAccessFields_DiagnosticTestBanner_Title_Create = {
  readonly __typename?: 'HomePageDocAccessFields_diagnosticTestBanner_title_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type HomePageDocAccessFields_DiagnosticTestBanner_Title_Delete = {
  readonly __typename?: 'HomePageDocAccessFields_diagnosticTestBanner_title_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type HomePageDocAccessFields_DiagnosticTestBanner_Title_Read = {
  readonly __typename?: 'HomePageDocAccessFields_diagnosticTestBanner_title_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type HomePageDocAccessFields_DiagnosticTestBanner_Title_Update = {
  readonly __typename?: 'HomePageDocAccessFields_diagnosticTestBanner_title_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type HomePageDocAccessFields_FeaturedTest = {
  readonly __typename?: 'HomePageDocAccessFields_featuredTest';
  readonly create: Maybe<HomePageDocAccessFields_FeaturedTest_Create>;
  readonly delete: Maybe<HomePageDocAccessFields_FeaturedTest_Delete>;
  readonly read: Maybe<HomePageDocAccessFields_FeaturedTest_Read>;
  readonly update: Maybe<HomePageDocAccessFields_FeaturedTest_Update>;
};

export type HomePageDocAccessFields_FeaturedTest_Create = {
  readonly __typename?: 'HomePageDocAccessFields_featuredTest_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type HomePageDocAccessFields_FeaturedTest_Delete = {
  readonly __typename?: 'HomePageDocAccessFields_featuredTest_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type HomePageDocAccessFields_FeaturedTest_Read = {
  readonly __typename?: 'HomePageDocAccessFields_featuredTest_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type HomePageDocAccessFields_FeaturedTest_Update = {
  readonly __typename?: 'HomePageDocAccessFields_featuredTest_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type HomePageDocAccessFields_MainOfferBanner = {
  readonly __typename?: 'HomePageDocAccessFields_mainOfferBanner';
  readonly create: Maybe<HomePageDocAccessFields_MainOfferBanner_Create>;
  readonly delete: Maybe<HomePageDocAccessFields_MainOfferBanner_Delete>;
  readonly fields: Maybe<HomePageDocAccessFields_MainOfferBanner_Fields>;
  readonly read: Maybe<HomePageDocAccessFields_MainOfferBanner_Read>;
  readonly update: Maybe<HomePageDocAccessFields_MainOfferBanner_Update>;
};

export type HomePageDocAccessFields_MainOfferBanner_Create = {
  readonly __typename?: 'HomePageDocAccessFields_mainOfferBanner_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type HomePageDocAccessFields_MainOfferBanner_Delete = {
  readonly __typename?: 'HomePageDocAccessFields_mainOfferBanner_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type HomePageDocAccessFields_MainOfferBanner_Fields = {
  readonly __typename?: 'HomePageDocAccessFields_mainOfferBanner_Fields';
  readonly description: Maybe<HomePageDocAccessFields_MainOfferBanner_Description>;
  readonly label: Maybe<HomePageDocAccessFields_MainOfferBanner_Label>;
  readonly options: Maybe<HomePageDocAccessFields_MainOfferBanner_Options>;
  readonly title: Maybe<HomePageDocAccessFields_MainOfferBanner_Title>;
};

export type HomePageDocAccessFields_MainOfferBanner_Read = {
  readonly __typename?: 'HomePageDocAccessFields_mainOfferBanner_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type HomePageDocAccessFields_MainOfferBanner_Update = {
  readonly __typename?: 'HomePageDocAccessFields_mainOfferBanner_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type HomePageDocAccessFields_MainOfferBanner_Description = {
  readonly __typename?: 'HomePageDocAccessFields_mainOfferBanner_description';
  readonly create: Maybe<HomePageDocAccessFields_MainOfferBanner_Description_Create>;
  readonly delete: Maybe<HomePageDocAccessFields_MainOfferBanner_Description_Delete>;
  readonly read: Maybe<HomePageDocAccessFields_MainOfferBanner_Description_Read>;
  readonly update: Maybe<HomePageDocAccessFields_MainOfferBanner_Description_Update>;
};

export type HomePageDocAccessFields_MainOfferBanner_Description_Create = {
  readonly __typename?: 'HomePageDocAccessFields_mainOfferBanner_description_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type HomePageDocAccessFields_MainOfferBanner_Description_Delete = {
  readonly __typename?: 'HomePageDocAccessFields_mainOfferBanner_description_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type HomePageDocAccessFields_MainOfferBanner_Description_Read = {
  readonly __typename?: 'HomePageDocAccessFields_mainOfferBanner_description_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type HomePageDocAccessFields_MainOfferBanner_Description_Update = {
  readonly __typename?: 'HomePageDocAccessFields_mainOfferBanner_description_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type HomePageDocAccessFields_MainOfferBanner_Label = {
  readonly __typename?: 'HomePageDocAccessFields_mainOfferBanner_label';
  readonly create: Maybe<HomePageDocAccessFields_MainOfferBanner_Label_Create>;
  readonly delete: Maybe<HomePageDocAccessFields_MainOfferBanner_Label_Delete>;
  readonly read: Maybe<HomePageDocAccessFields_MainOfferBanner_Label_Read>;
  readonly update: Maybe<HomePageDocAccessFields_MainOfferBanner_Label_Update>;
};

export type HomePageDocAccessFields_MainOfferBanner_Label_Create = {
  readonly __typename?: 'HomePageDocAccessFields_mainOfferBanner_label_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type HomePageDocAccessFields_MainOfferBanner_Label_Delete = {
  readonly __typename?: 'HomePageDocAccessFields_mainOfferBanner_label_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type HomePageDocAccessFields_MainOfferBanner_Label_Read = {
  readonly __typename?: 'HomePageDocAccessFields_mainOfferBanner_label_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type HomePageDocAccessFields_MainOfferBanner_Label_Update = {
  readonly __typename?: 'HomePageDocAccessFields_mainOfferBanner_label_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type HomePageDocAccessFields_MainOfferBanner_Options = {
  readonly __typename?: 'HomePageDocAccessFields_mainOfferBanner_options';
  readonly create: Maybe<HomePageDocAccessFields_MainOfferBanner_Options_Create>;
  readonly delete: Maybe<HomePageDocAccessFields_MainOfferBanner_Options_Delete>;
  readonly fields: Maybe<HomePageDocAccessFields_MainOfferBanner_Options_Fields>;
  readonly read: Maybe<HomePageDocAccessFields_MainOfferBanner_Options_Read>;
  readonly update: Maybe<HomePageDocAccessFields_MainOfferBanner_Options_Update>;
};

export type HomePageDocAccessFields_MainOfferBanner_Options_Create = {
  readonly __typename?: 'HomePageDocAccessFields_mainOfferBanner_options_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type HomePageDocAccessFields_MainOfferBanner_Options_Delete = {
  readonly __typename?: 'HomePageDocAccessFields_mainOfferBanner_options_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type HomePageDocAccessFields_MainOfferBanner_Options_Fields = {
  readonly __typename?: 'HomePageDocAccessFields_mainOfferBanner_options_Fields';
  readonly id: Maybe<HomePageDocAccessFields_MainOfferBanner_Options_Id>;
  readonly text: Maybe<HomePageDocAccessFields_MainOfferBanner_Options_Text>;
};

export type HomePageDocAccessFields_MainOfferBanner_Options_Read = {
  readonly __typename?: 'HomePageDocAccessFields_mainOfferBanner_options_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type HomePageDocAccessFields_MainOfferBanner_Options_Update = {
  readonly __typename?: 'HomePageDocAccessFields_mainOfferBanner_options_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type HomePageDocAccessFields_MainOfferBanner_Options_Id = {
  readonly __typename?: 'HomePageDocAccessFields_mainOfferBanner_options_id';
  readonly create: Maybe<HomePageDocAccessFields_MainOfferBanner_Options_Id_Create>;
  readonly delete: Maybe<HomePageDocAccessFields_MainOfferBanner_Options_Id_Delete>;
  readonly read: Maybe<HomePageDocAccessFields_MainOfferBanner_Options_Id_Read>;
  readonly update: Maybe<HomePageDocAccessFields_MainOfferBanner_Options_Id_Update>;
};

export type HomePageDocAccessFields_MainOfferBanner_Options_Id_Create = {
  readonly __typename?: 'HomePageDocAccessFields_mainOfferBanner_options_id_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type HomePageDocAccessFields_MainOfferBanner_Options_Id_Delete = {
  readonly __typename?: 'HomePageDocAccessFields_mainOfferBanner_options_id_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type HomePageDocAccessFields_MainOfferBanner_Options_Id_Read = {
  readonly __typename?: 'HomePageDocAccessFields_mainOfferBanner_options_id_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type HomePageDocAccessFields_MainOfferBanner_Options_Id_Update = {
  readonly __typename?: 'HomePageDocAccessFields_mainOfferBanner_options_id_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type HomePageDocAccessFields_MainOfferBanner_Options_Text = {
  readonly __typename?: 'HomePageDocAccessFields_mainOfferBanner_options_text';
  readonly create: Maybe<HomePageDocAccessFields_MainOfferBanner_Options_Text_Create>;
  readonly delete: Maybe<HomePageDocAccessFields_MainOfferBanner_Options_Text_Delete>;
  readonly read: Maybe<HomePageDocAccessFields_MainOfferBanner_Options_Text_Read>;
  readonly update: Maybe<HomePageDocAccessFields_MainOfferBanner_Options_Text_Update>;
};

export type HomePageDocAccessFields_MainOfferBanner_Options_Text_Create = {
  readonly __typename?: 'HomePageDocAccessFields_mainOfferBanner_options_text_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type HomePageDocAccessFields_MainOfferBanner_Options_Text_Delete = {
  readonly __typename?: 'HomePageDocAccessFields_mainOfferBanner_options_text_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type HomePageDocAccessFields_MainOfferBanner_Options_Text_Read = {
  readonly __typename?: 'HomePageDocAccessFields_mainOfferBanner_options_text_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type HomePageDocAccessFields_MainOfferBanner_Options_Text_Update = {
  readonly __typename?: 'HomePageDocAccessFields_mainOfferBanner_options_text_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type HomePageDocAccessFields_MainOfferBanner_Title = {
  readonly __typename?: 'HomePageDocAccessFields_mainOfferBanner_title';
  readonly create: Maybe<HomePageDocAccessFields_MainOfferBanner_Title_Create>;
  readonly delete: Maybe<HomePageDocAccessFields_MainOfferBanner_Title_Delete>;
  readonly read: Maybe<HomePageDocAccessFields_MainOfferBanner_Title_Read>;
  readonly update: Maybe<HomePageDocAccessFields_MainOfferBanner_Title_Update>;
};

export type HomePageDocAccessFields_MainOfferBanner_Title_Create = {
  readonly __typename?: 'HomePageDocAccessFields_mainOfferBanner_title_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type HomePageDocAccessFields_MainOfferBanner_Title_Delete = {
  readonly __typename?: 'HomePageDocAccessFields_mainOfferBanner_title_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type HomePageDocAccessFields_MainOfferBanner_Title_Read = {
  readonly __typename?: 'HomePageDocAccessFields_mainOfferBanner_title_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type HomePageDocAccessFields_MainOfferBanner_Title_Update = {
  readonly __typename?: 'HomePageDocAccessFields_mainOfferBanner_title_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type HomePageDocAccessFields_UpdatedAt = {
  readonly __typename?: 'HomePageDocAccessFields_updatedAt';
  readonly create: Maybe<HomePageDocAccessFields_UpdatedAt_Create>;
  readonly delete: Maybe<HomePageDocAccessFields_UpdatedAt_Delete>;
  readonly read: Maybe<HomePageDocAccessFields_UpdatedAt_Read>;
  readonly update: Maybe<HomePageDocAccessFields_UpdatedAt_Update>;
};

export type HomePageDocAccessFields_UpdatedAt_Create = {
  readonly __typename?: 'HomePageDocAccessFields_updatedAt_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type HomePageDocAccessFields_UpdatedAt_Delete = {
  readonly __typename?: 'HomePageDocAccessFields_updatedAt_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type HomePageDocAccessFields_UpdatedAt_Read = {
  readonly __typename?: 'HomePageDocAccessFields_updatedAt_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type HomePageDocAccessFields_UpdatedAt_Update = {
  readonly __typename?: 'HomePageDocAccessFields_updatedAt_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type HomePageFields = {
  readonly __typename?: 'HomePageFields';
  readonly aboutProjectBanner: Maybe<HomePageFields_AboutProjectBanner>;
  readonly createdAt: Maybe<HomePageFields_CreatedAt>;
  readonly diagnosticTestBanner: Maybe<HomePageFields_DiagnosticTestBanner>;
  readonly featuredTest: Maybe<HomePageFields_FeaturedTest>;
  readonly mainOfferBanner: Maybe<HomePageFields_MainOfferBanner>;
  readonly updatedAt: Maybe<HomePageFields_UpdatedAt>;
};

export type HomePageFields_AboutProjectBanner = {
  readonly __typename?: 'HomePageFields_aboutProjectBanner';
  readonly create: Maybe<HomePageFields_AboutProjectBanner_Create>;
  readonly delete: Maybe<HomePageFields_AboutProjectBanner_Delete>;
  readonly fields: Maybe<HomePageFields_AboutProjectBanner_Fields>;
  readonly read: Maybe<HomePageFields_AboutProjectBanner_Read>;
  readonly update: Maybe<HomePageFields_AboutProjectBanner_Update>;
};

export type HomePageFields_AboutProjectBanner_Create = {
  readonly __typename?: 'HomePageFields_aboutProjectBanner_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type HomePageFields_AboutProjectBanner_Delete = {
  readonly __typename?: 'HomePageFields_aboutProjectBanner_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type HomePageFields_AboutProjectBanner_Fields = {
  readonly __typename?: 'HomePageFields_aboutProjectBanner_Fields';
  readonly description: Maybe<HomePageFields_AboutProjectBanner_Description>;
  readonly subtitle: Maybe<HomePageFields_AboutProjectBanner_Subtitle>;
  readonly title: Maybe<HomePageFields_AboutProjectBanner_Title>;
};

export type HomePageFields_AboutProjectBanner_Read = {
  readonly __typename?: 'HomePageFields_aboutProjectBanner_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type HomePageFields_AboutProjectBanner_Update = {
  readonly __typename?: 'HomePageFields_aboutProjectBanner_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type HomePageFields_AboutProjectBanner_Description = {
  readonly __typename?: 'HomePageFields_aboutProjectBanner_description';
  readonly create: Maybe<HomePageFields_AboutProjectBanner_Description_Create>;
  readonly delete: Maybe<HomePageFields_AboutProjectBanner_Description_Delete>;
  readonly read: Maybe<HomePageFields_AboutProjectBanner_Description_Read>;
  readonly update: Maybe<HomePageFields_AboutProjectBanner_Description_Update>;
};

export type HomePageFields_AboutProjectBanner_Description_Create = {
  readonly __typename?: 'HomePageFields_aboutProjectBanner_description_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type HomePageFields_AboutProjectBanner_Description_Delete = {
  readonly __typename?: 'HomePageFields_aboutProjectBanner_description_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type HomePageFields_AboutProjectBanner_Description_Read = {
  readonly __typename?: 'HomePageFields_aboutProjectBanner_description_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type HomePageFields_AboutProjectBanner_Description_Update = {
  readonly __typename?: 'HomePageFields_aboutProjectBanner_description_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type HomePageFields_AboutProjectBanner_Subtitle = {
  readonly __typename?: 'HomePageFields_aboutProjectBanner_subtitle';
  readonly create: Maybe<HomePageFields_AboutProjectBanner_Subtitle_Create>;
  readonly delete: Maybe<HomePageFields_AboutProjectBanner_Subtitle_Delete>;
  readonly read: Maybe<HomePageFields_AboutProjectBanner_Subtitle_Read>;
  readonly update: Maybe<HomePageFields_AboutProjectBanner_Subtitle_Update>;
};

export type HomePageFields_AboutProjectBanner_Subtitle_Create = {
  readonly __typename?: 'HomePageFields_aboutProjectBanner_subtitle_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type HomePageFields_AboutProjectBanner_Subtitle_Delete = {
  readonly __typename?: 'HomePageFields_aboutProjectBanner_subtitle_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type HomePageFields_AboutProjectBanner_Subtitle_Read = {
  readonly __typename?: 'HomePageFields_aboutProjectBanner_subtitle_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type HomePageFields_AboutProjectBanner_Subtitle_Update = {
  readonly __typename?: 'HomePageFields_aboutProjectBanner_subtitle_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type HomePageFields_AboutProjectBanner_Title = {
  readonly __typename?: 'HomePageFields_aboutProjectBanner_title';
  readonly create: Maybe<HomePageFields_AboutProjectBanner_Title_Create>;
  readonly delete: Maybe<HomePageFields_AboutProjectBanner_Title_Delete>;
  readonly read: Maybe<HomePageFields_AboutProjectBanner_Title_Read>;
  readonly update: Maybe<HomePageFields_AboutProjectBanner_Title_Update>;
};

export type HomePageFields_AboutProjectBanner_Title_Create = {
  readonly __typename?: 'HomePageFields_aboutProjectBanner_title_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type HomePageFields_AboutProjectBanner_Title_Delete = {
  readonly __typename?: 'HomePageFields_aboutProjectBanner_title_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type HomePageFields_AboutProjectBanner_Title_Read = {
  readonly __typename?: 'HomePageFields_aboutProjectBanner_title_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type HomePageFields_AboutProjectBanner_Title_Update = {
  readonly __typename?: 'HomePageFields_aboutProjectBanner_title_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type HomePageFields_CreatedAt = {
  readonly __typename?: 'HomePageFields_createdAt';
  readonly create: Maybe<HomePageFields_CreatedAt_Create>;
  readonly delete: Maybe<HomePageFields_CreatedAt_Delete>;
  readonly read: Maybe<HomePageFields_CreatedAt_Read>;
  readonly update: Maybe<HomePageFields_CreatedAt_Update>;
};

export type HomePageFields_CreatedAt_Create = {
  readonly __typename?: 'HomePageFields_createdAt_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type HomePageFields_CreatedAt_Delete = {
  readonly __typename?: 'HomePageFields_createdAt_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type HomePageFields_CreatedAt_Read = {
  readonly __typename?: 'HomePageFields_createdAt_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type HomePageFields_CreatedAt_Update = {
  readonly __typename?: 'HomePageFields_createdAt_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type HomePageFields_DiagnosticTestBanner = {
  readonly __typename?: 'HomePageFields_diagnosticTestBanner';
  readonly create: Maybe<HomePageFields_DiagnosticTestBanner_Create>;
  readonly delete: Maybe<HomePageFields_DiagnosticTestBanner_Delete>;
  readonly fields: Maybe<HomePageFields_DiagnosticTestBanner_Fields>;
  readonly read: Maybe<HomePageFields_DiagnosticTestBanner_Read>;
  readonly update: Maybe<HomePageFields_DiagnosticTestBanner_Update>;
};

export type HomePageFields_DiagnosticTestBanner_Create = {
  readonly __typename?: 'HomePageFields_diagnosticTestBanner_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type HomePageFields_DiagnosticTestBanner_Delete = {
  readonly __typename?: 'HomePageFields_diagnosticTestBanner_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type HomePageFields_DiagnosticTestBanner_Fields = {
  readonly __typename?: 'HomePageFields_diagnosticTestBanner_Fields';
  readonly label: Maybe<HomePageFields_DiagnosticTestBanner_Label>;
  readonly subtitle: Maybe<HomePageFields_DiagnosticTestBanner_Subtitle>;
  readonly title: Maybe<HomePageFields_DiagnosticTestBanner_Title>;
};

export type HomePageFields_DiagnosticTestBanner_Read = {
  readonly __typename?: 'HomePageFields_diagnosticTestBanner_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type HomePageFields_DiagnosticTestBanner_Update = {
  readonly __typename?: 'HomePageFields_diagnosticTestBanner_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type HomePageFields_DiagnosticTestBanner_Label = {
  readonly __typename?: 'HomePageFields_diagnosticTestBanner_label';
  readonly create: Maybe<HomePageFields_DiagnosticTestBanner_Label_Create>;
  readonly delete: Maybe<HomePageFields_DiagnosticTestBanner_Label_Delete>;
  readonly read: Maybe<HomePageFields_DiagnosticTestBanner_Label_Read>;
  readonly update: Maybe<HomePageFields_DiagnosticTestBanner_Label_Update>;
};

export type HomePageFields_DiagnosticTestBanner_Label_Create = {
  readonly __typename?: 'HomePageFields_diagnosticTestBanner_label_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type HomePageFields_DiagnosticTestBanner_Label_Delete = {
  readonly __typename?: 'HomePageFields_diagnosticTestBanner_label_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type HomePageFields_DiagnosticTestBanner_Label_Read = {
  readonly __typename?: 'HomePageFields_diagnosticTestBanner_label_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type HomePageFields_DiagnosticTestBanner_Label_Update = {
  readonly __typename?: 'HomePageFields_diagnosticTestBanner_label_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type HomePageFields_DiagnosticTestBanner_Subtitle = {
  readonly __typename?: 'HomePageFields_diagnosticTestBanner_subtitle';
  readonly create: Maybe<HomePageFields_DiagnosticTestBanner_Subtitle_Create>;
  readonly delete: Maybe<HomePageFields_DiagnosticTestBanner_Subtitle_Delete>;
  readonly read: Maybe<HomePageFields_DiagnosticTestBanner_Subtitle_Read>;
  readonly update: Maybe<HomePageFields_DiagnosticTestBanner_Subtitle_Update>;
};

export type HomePageFields_DiagnosticTestBanner_Subtitle_Create = {
  readonly __typename?: 'HomePageFields_diagnosticTestBanner_subtitle_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type HomePageFields_DiagnosticTestBanner_Subtitle_Delete = {
  readonly __typename?: 'HomePageFields_diagnosticTestBanner_subtitle_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type HomePageFields_DiagnosticTestBanner_Subtitle_Read = {
  readonly __typename?: 'HomePageFields_diagnosticTestBanner_subtitle_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type HomePageFields_DiagnosticTestBanner_Subtitle_Update = {
  readonly __typename?: 'HomePageFields_diagnosticTestBanner_subtitle_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type HomePageFields_DiagnosticTestBanner_Title = {
  readonly __typename?: 'HomePageFields_diagnosticTestBanner_title';
  readonly create: Maybe<HomePageFields_DiagnosticTestBanner_Title_Create>;
  readonly delete: Maybe<HomePageFields_DiagnosticTestBanner_Title_Delete>;
  readonly read: Maybe<HomePageFields_DiagnosticTestBanner_Title_Read>;
  readonly update: Maybe<HomePageFields_DiagnosticTestBanner_Title_Update>;
};

export type HomePageFields_DiagnosticTestBanner_Title_Create = {
  readonly __typename?: 'HomePageFields_diagnosticTestBanner_title_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type HomePageFields_DiagnosticTestBanner_Title_Delete = {
  readonly __typename?: 'HomePageFields_diagnosticTestBanner_title_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type HomePageFields_DiagnosticTestBanner_Title_Read = {
  readonly __typename?: 'HomePageFields_diagnosticTestBanner_title_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type HomePageFields_DiagnosticTestBanner_Title_Update = {
  readonly __typename?: 'HomePageFields_diagnosticTestBanner_title_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type HomePageFields_FeaturedTest = {
  readonly __typename?: 'HomePageFields_featuredTest';
  readonly create: Maybe<HomePageFields_FeaturedTest_Create>;
  readonly delete: Maybe<HomePageFields_FeaturedTest_Delete>;
  readonly read: Maybe<HomePageFields_FeaturedTest_Read>;
  readonly update: Maybe<HomePageFields_FeaturedTest_Update>;
};

export type HomePageFields_FeaturedTest_Create = {
  readonly __typename?: 'HomePageFields_featuredTest_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type HomePageFields_FeaturedTest_Delete = {
  readonly __typename?: 'HomePageFields_featuredTest_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type HomePageFields_FeaturedTest_Read = {
  readonly __typename?: 'HomePageFields_featuredTest_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type HomePageFields_FeaturedTest_Update = {
  readonly __typename?: 'HomePageFields_featuredTest_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type HomePageFields_MainOfferBanner = {
  readonly __typename?: 'HomePageFields_mainOfferBanner';
  readonly create: Maybe<HomePageFields_MainOfferBanner_Create>;
  readonly delete: Maybe<HomePageFields_MainOfferBanner_Delete>;
  readonly fields: Maybe<HomePageFields_MainOfferBanner_Fields>;
  readonly read: Maybe<HomePageFields_MainOfferBanner_Read>;
  readonly update: Maybe<HomePageFields_MainOfferBanner_Update>;
};

export type HomePageFields_MainOfferBanner_Create = {
  readonly __typename?: 'HomePageFields_mainOfferBanner_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type HomePageFields_MainOfferBanner_Delete = {
  readonly __typename?: 'HomePageFields_mainOfferBanner_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type HomePageFields_MainOfferBanner_Fields = {
  readonly __typename?: 'HomePageFields_mainOfferBanner_Fields';
  readonly description: Maybe<HomePageFields_MainOfferBanner_Description>;
  readonly label: Maybe<HomePageFields_MainOfferBanner_Label>;
  readonly options: Maybe<HomePageFields_MainOfferBanner_Options>;
  readonly title: Maybe<HomePageFields_MainOfferBanner_Title>;
};

export type HomePageFields_MainOfferBanner_Read = {
  readonly __typename?: 'HomePageFields_mainOfferBanner_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type HomePageFields_MainOfferBanner_Update = {
  readonly __typename?: 'HomePageFields_mainOfferBanner_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type HomePageFields_MainOfferBanner_Description = {
  readonly __typename?: 'HomePageFields_mainOfferBanner_description';
  readonly create: Maybe<HomePageFields_MainOfferBanner_Description_Create>;
  readonly delete: Maybe<HomePageFields_MainOfferBanner_Description_Delete>;
  readonly read: Maybe<HomePageFields_MainOfferBanner_Description_Read>;
  readonly update: Maybe<HomePageFields_MainOfferBanner_Description_Update>;
};

export type HomePageFields_MainOfferBanner_Description_Create = {
  readonly __typename?: 'HomePageFields_mainOfferBanner_description_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type HomePageFields_MainOfferBanner_Description_Delete = {
  readonly __typename?: 'HomePageFields_mainOfferBanner_description_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type HomePageFields_MainOfferBanner_Description_Read = {
  readonly __typename?: 'HomePageFields_mainOfferBanner_description_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type HomePageFields_MainOfferBanner_Description_Update = {
  readonly __typename?: 'HomePageFields_mainOfferBanner_description_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type HomePageFields_MainOfferBanner_Label = {
  readonly __typename?: 'HomePageFields_mainOfferBanner_label';
  readonly create: Maybe<HomePageFields_MainOfferBanner_Label_Create>;
  readonly delete: Maybe<HomePageFields_MainOfferBanner_Label_Delete>;
  readonly read: Maybe<HomePageFields_MainOfferBanner_Label_Read>;
  readonly update: Maybe<HomePageFields_MainOfferBanner_Label_Update>;
};

export type HomePageFields_MainOfferBanner_Label_Create = {
  readonly __typename?: 'HomePageFields_mainOfferBanner_label_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type HomePageFields_MainOfferBanner_Label_Delete = {
  readonly __typename?: 'HomePageFields_mainOfferBanner_label_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type HomePageFields_MainOfferBanner_Label_Read = {
  readonly __typename?: 'HomePageFields_mainOfferBanner_label_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type HomePageFields_MainOfferBanner_Label_Update = {
  readonly __typename?: 'HomePageFields_mainOfferBanner_label_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type HomePageFields_MainOfferBanner_Options = {
  readonly __typename?: 'HomePageFields_mainOfferBanner_options';
  readonly create: Maybe<HomePageFields_MainOfferBanner_Options_Create>;
  readonly delete: Maybe<HomePageFields_MainOfferBanner_Options_Delete>;
  readonly fields: Maybe<HomePageFields_MainOfferBanner_Options_Fields>;
  readonly read: Maybe<HomePageFields_MainOfferBanner_Options_Read>;
  readonly update: Maybe<HomePageFields_MainOfferBanner_Options_Update>;
};

export type HomePageFields_MainOfferBanner_Options_Create = {
  readonly __typename?: 'HomePageFields_mainOfferBanner_options_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type HomePageFields_MainOfferBanner_Options_Delete = {
  readonly __typename?: 'HomePageFields_mainOfferBanner_options_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type HomePageFields_MainOfferBanner_Options_Fields = {
  readonly __typename?: 'HomePageFields_mainOfferBanner_options_Fields';
  readonly id: Maybe<HomePageFields_MainOfferBanner_Options_Id>;
  readonly text: Maybe<HomePageFields_MainOfferBanner_Options_Text>;
};

export type HomePageFields_MainOfferBanner_Options_Read = {
  readonly __typename?: 'HomePageFields_mainOfferBanner_options_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type HomePageFields_MainOfferBanner_Options_Update = {
  readonly __typename?: 'HomePageFields_mainOfferBanner_options_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type HomePageFields_MainOfferBanner_Options_Id = {
  readonly __typename?: 'HomePageFields_mainOfferBanner_options_id';
  readonly create: Maybe<HomePageFields_MainOfferBanner_Options_Id_Create>;
  readonly delete: Maybe<HomePageFields_MainOfferBanner_Options_Id_Delete>;
  readonly read: Maybe<HomePageFields_MainOfferBanner_Options_Id_Read>;
  readonly update: Maybe<HomePageFields_MainOfferBanner_Options_Id_Update>;
};

export type HomePageFields_MainOfferBanner_Options_Id_Create = {
  readonly __typename?: 'HomePageFields_mainOfferBanner_options_id_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type HomePageFields_MainOfferBanner_Options_Id_Delete = {
  readonly __typename?: 'HomePageFields_mainOfferBanner_options_id_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type HomePageFields_MainOfferBanner_Options_Id_Read = {
  readonly __typename?: 'HomePageFields_mainOfferBanner_options_id_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type HomePageFields_MainOfferBanner_Options_Id_Update = {
  readonly __typename?: 'HomePageFields_mainOfferBanner_options_id_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type HomePageFields_MainOfferBanner_Options_Text = {
  readonly __typename?: 'HomePageFields_mainOfferBanner_options_text';
  readonly create: Maybe<HomePageFields_MainOfferBanner_Options_Text_Create>;
  readonly delete: Maybe<HomePageFields_MainOfferBanner_Options_Text_Delete>;
  readonly read: Maybe<HomePageFields_MainOfferBanner_Options_Text_Read>;
  readonly update: Maybe<HomePageFields_MainOfferBanner_Options_Text_Update>;
};

export type HomePageFields_MainOfferBanner_Options_Text_Create = {
  readonly __typename?: 'HomePageFields_mainOfferBanner_options_text_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type HomePageFields_MainOfferBanner_Options_Text_Delete = {
  readonly __typename?: 'HomePageFields_mainOfferBanner_options_text_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type HomePageFields_MainOfferBanner_Options_Text_Read = {
  readonly __typename?: 'HomePageFields_mainOfferBanner_options_text_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type HomePageFields_MainOfferBanner_Options_Text_Update = {
  readonly __typename?: 'HomePageFields_mainOfferBanner_options_text_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type HomePageFields_MainOfferBanner_Title = {
  readonly __typename?: 'HomePageFields_mainOfferBanner_title';
  readonly create: Maybe<HomePageFields_MainOfferBanner_Title_Create>;
  readonly delete: Maybe<HomePageFields_MainOfferBanner_Title_Delete>;
  readonly read: Maybe<HomePageFields_MainOfferBanner_Title_Read>;
  readonly update: Maybe<HomePageFields_MainOfferBanner_Title_Update>;
};

export type HomePageFields_MainOfferBanner_Title_Create = {
  readonly __typename?: 'HomePageFields_mainOfferBanner_title_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type HomePageFields_MainOfferBanner_Title_Delete = {
  readonly __typename?: 'HomePageFields_mainOfferBanner_title_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type HomePageFields_MainOfferBanner_Title_Read = {
  readonly __typename?: 'HomePageFields_mainOfferBanner_title_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type HomePageFields_MainOfferBanner_Title_Update = {
  readonly __typename?: 'HomePageFields_mainOfferBanner_title_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type HomePageFields_UpdatedAt = {
  readonly __typename?: 'HomePageFields_updatedAt';
  readonly create: Maybe<HomePageFields_UpdatedAt_Create>;
  readonly delete: Maybe<HomePageFields_UpdatedAt_Delete>;
  readonly read: Maybe<HomePageFields_UpdatedAt_Read>;
  readonly update: Maybe<HomePageFields_UpdatedAt_Update>;
};

export type HomePageFields_UpdatedAt_Create = {
  readonly __typename?: 'HomePageFields_updatedAt_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type HomePageFields_UpdatedAt_Delete = {
  readonly __typename?: 'HomePageFields_updatedAt_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type HomePageFields_UpdatedAt_Read = {
  readonly __typename?: 'HomePageFields_updatedAt_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type HomePageFields_UpdatedAt_Update = {
  readonly __typename?: 'HomePageFields_updatedAt_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type HomePageReadAccess = {
  readonly __typename?: 'HomePageReadAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where: Maybe<Scalars['JSONObject']['output']>;
};

export type HomePageReadDocAccess = {
  readonly __typename?: 'HomePageReadDocAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where: Maybe<Scalars['JSONObject']['output']>;
};

export type HomePageUpdateAccess = {
  readonly __typename?: 'HomePageUpdateAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where: Maybe<Scalars['JSONObject']['output']>;
};

export type HomePageUpdateDocAccess = {
  readonly __typename?: 'HomePageUpdateDocAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where: Maybe<Scalars['JSONObject']['output']>;
};

export type HomePage_AboutProjectBanner = {
  readonly __typename?: 'HomePage_AboutProjectBanner';
  readonly description: Maybe<Scalars['String']['output']>;
  readonly subtitle: Maybe<Scalars['String']['output']>;
  readonly title: Maybe<Scalars['String']['output']>;
};

export type HomePage_DiagnosticTestBanner = {
  readonly __typename?: 'HomePage_DiagnosticTestBanner';
  readonly label: Maybe<Scalars['String']['output']>;
  readonly subtitle: Maybe<Scalars['String']['output']>;
  readonly title: Maybe<Scalars['String']['output']>;
};

export type HomePage_MainOfferBanner = {
  readonly __typename?: 'HomePage_MainOfferBanner';
  readonly description: Maybe<Scalars['String']['output']>;
  readonly label: Maybe<Scalars['String']['output']>;
  readonly options: ReadonlyArray<HomePage_MainOfferBanner_Options>;
  readonly title: Maybe<Scalars['String']['output']>;
};

export type HomePage_MainOfferBanner_Options = {
  readonly __typename?: 'HomePage_MainOfferBanner_Options';
  readonly id: Maybe<Scalars['String']['output']>;
  readonly text: Maybe<Scalars['String']['output']>;
};

export type LocaleInputType =
  | 'en'
  | 'ru';

export type Media = {
  readonly __typename?: 'Media';
  readonly alt: Scalars['String']['output'];
  readonly caption: Maybe<Scalars['JSON']['output']>;
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly filename: Maybe<Scalars['String']['output']>;
  readonly filesize: Maybe<Scalars['Float']['output']>;
  readonly focalX: Maybe<Scalars['Float']['output']>;
  readonly focalY: Maybe<Scalars['Float']['output']>;
  readonly height: Maybe<Scalars['Float']['output']>;
  readonly id: Scalars['Int']['output'];
  readonly mimeType: Maybe<Scalars['String']['output']>;
  readonly sizes: Maybe<Media_Sizes>;
  readonly thumbnailURL: Maybe<Scalars['String']['output']>;
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
  readonly url: Maybe<Scalars['String']['output']>;
  readonly width: Maybe<Scalars['Float']['output']>;
};


export type MediaCaptionArgs = {
  depth: InputMaybe<Scalars['Int']['input']>;
};

export type MediaCreateAccess = {
  readonly __typename?: 'MediaCreateAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where: Maybe<Scalars['JSONObject']['output']>;
};

export type MediaCreateDocAccess = {
  readonly __typename?: 'MediaCreateDocAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where: Maybe<Scalars['JSONObject']['output']>;
};

export type MediaDeleteAccess = {
  readonly __typename?: 'MediaDeleteAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where: Maybe<Scalars['JSONObject']['output']>;
};

export type MediaDeleteDocAccess = {
  readonly __typename?: 'MediaDeleteDocAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where: Maybe<Scalars['JSONObject']['output']>;
};

export type MediaDocAccessFields = {
  readonly __typename?: 'MediaDocAccessFields';
  readonly alt: Maybe<MediaDocAccessFields_Alt>;
  readonly caption: Maybe<MediaDocAccessFields_Caption>;
  readonly createdAt: Maybe<MediaDocAccessFields_CreatedAt>;
  readonly filename: Maybe<MediaDocAccessFields_Filename>;
  readonly filesize: Maybe<MediaDocAccessFields_Filesize>;
  readonly focalX: Maybe<MediaDocAccessFields_FocalX>;
  readonly focalY: Maybe<MediaDocAccessFields_FocalY>;
  readonly height: Maybe<MediaDocAccessFields_Height>;
  readonly mimeType: Maybe<MediaDocAccessFields_MimeType>;
  readonly sizes: Maybe<MediaDocAccessFields_Sizes>;
  readonly thumbnailURL: Maybe<MediaDocAccessFields_ThumbnailUrl>;
  readonly updatedAt: Maybe<MediaDocAccessFields_UpdatedAt>;
  readonly url: Maybe<MediaDocAccessFields_Url>;
  readonly width: Maybe<MediaDocAccessFields_Width>;
};

export type MediaDocAccessFields_Alt = {
  readonly __typename?: 'MediaDocAccessFields_alt';
  readonly create: Maybe<MediaDocAccessFields_Alt_Create>;
  readonly delete: Maybe<MediaDocAccessFields_Alt_Delete>;
  readonly read: Maybe<MediaDocAccessFields_Alt_Read>;
  readonly update: Maybe<MediaDocAccessFields_Alt_Update>;
};

export type MediaDocAccessFields_Alt_Create = {
  readonly __typename?: 'MediaDocAccessFields_alt_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Alt_Delete = {
  readonly __typename?: 'MediaDocAccessFields_alt_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Alt_Read = {
  readonly __typename?: 'MediaDocAccessFields_alt_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Alt_Update = {
  readonly __typename?: 'MediaDocAccessFields_alt_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Caption = {
  readonly __typename?: 'MediaDocAccessFields_caption';
  readonly create: Maybe<MediaDocAccessFields_Caption_Create>;
  readonly delete: Maybe<MediaDocAccessFields_Caption_Delete>;
  readonly read: Maybe<MediaDocAccessFields_Caption_Read>;
  readonly update: Maybe<MediaDocAccessFields_Caption_Update>;
};

export type MediaDocAccessFields_Caption_Create = {
  readonly __typename?: 'MediaDocAccessFields_caption_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Caption_Delete = {
  readonly __typename?: 'MediaDocAccessFields_caption_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Caption_Read = {
  readonly __typename?: 'MediaDocAccessFields_caption_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Caption_Update = {
  readonly __typename?: 'MediaDocAccessFields_caption_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_CreatedAt = {
  readonly __typename?: 'MediaDocAccessFields_createdAt';
  readonly create: Maybe<MediaDocAccessFields_CreatedAt_Create>;
  readonly delete: Maybe<MediaDocAccessFields_CreatedAt_Delete>;
  readonly read: Maybe<MediaDocAccessFields_CreatedAt_Read>;
  readonly update: Maybe<MediaDocAccessFields_CreatedAt_Update>;
};

export type MediaDocAccessFields_CreatedAt_Create = {
  readonly __typename?: 'MediaDocAccessFields_createdAt_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_CreatedAt_Delete = {
  readonly __typename?: 'MediaDocAccessFields_createdAt_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_CreatedAt_Read = {
  readonly __typename?: 'MediaDocAccessFields_createdAt_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_CreatedAt_Update = {
  readonly __typename?: 'MediaDocAccessFields_createdAt_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Filename = {
  readonly __typename?: 'MediaDocAccessFields_filename';
  readonly create: Maybe<MediaDocAccessFields_Filename_Create>;
  readonly delete: Maybe<MediaDocAccessFields_Filename_Delete>;
  readonly read: Maybe<MediaDocAccessFields_Filename_Read>;
  readonly update: Maybe<MediaDocAccessFields_Filename_Update>;
};

export type MediaDocAccessFields_Filename_Create = {
  readonly __typename?: 'MediaDocAccessFields_filename_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Filename_Delete = {
  readonly __typename?: 'MediaDocAccessFields_filename_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Filename_Read = {
  readonly __typename?: 'MediaDocAccessFields_filename_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Filename_Update = {
  readonly __typename?: 'MediaDocAccessFields_filename_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Filesize = {
  readonly __typename?: 'MediaDocAccessFields_filesize';
  readonly create: Maybe<MediaDocAccessFields_Filesize_Create>;
  readonly delete: Maybe<MediaDocAccessFields_Filesize_Delete>;
  readonly read: Maybe<MediaDocAccessFields_Filesize_Read>;
  readonly update: Maybe<MediaDocAccessFields_Filesize_Update>;
};

export type MediaDocAccessFields_Filesize_Create = {
  readonly __typename?: 'MediaDocAccessFields_filesize_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Filesize_Delete = {
  readonly __typename?: 'MediaDocAccessFields_filesize_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Filesize_Read = {
  readonly __typename?: 'MediaDocAccessFields_filesize_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Filesize_Update = {
  readonly __typename?: 'MediaDocAccessFields_filesize_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_FocalX = {
  readonly __typename?: 'MediaDocAccessFields_focalX';
  readonly create: Maybe<MediaDocAccessFields_FocalX_Create>;
  readonly delete: Maybe<MediaDocAccessFields_FocalX_Delete>;
  readonly read: Maybe<MediaDocAccessFields_FocalX_Read>;
  readonly update: Maybe<MediaDocAccessFields_FocalX_Update>;
};

export type MediaDocAccessFields_FocalX_Create = {
  readonly __typename?: 'MediaDocAccessFields_focalX_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_FocalX_Delete = {
  readonly __typename?: 'MediaDocAccessFields_focalX_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_FocalX_Read = {
  readonly __typename?: 'MediaDocAccessFields_focalX_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_FocalX_Update = {
  readonly __typename?: 'MediaDocAccessFields_focalX_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_FocalY = {
  readonly __typename?: 'MediaDocAccessFields_focalY';
  readonly create: Maybe<MediaDocAccessFields_FocalY_Create>;
  readonly delete: Maybe<MediaDocAccessFields_FocalY_Delete>;
  readonly read: Maybe<MediaDocAccessFields_FocalY_Read>;
  readonly update: Maybe<MediaDocAccessFields_FocalY_Update>;
};

export type MediaDocAccessFields_FocalY_Create = {
  readonly __typename?: 'MediaDocAccessFields_focalY_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_FocalY_Delete = {
  readonly __typename?: 'MediaDocAccessFields_focalY_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_FocalY_Read = {
  readonly __typename?: 'MediaDocAccessFields_focalY_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_FocalY_Update = {
  readonly __typename?: 'MediaDocAccessFields_focalY_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Height = {
  readonly __typename?: 'MediaDocAccessFields_height';
  readonly create: Maybe<MediaDocAccessFields_Height_Create>;
  readonly delete: Maybe<MediaDocAccessFields_Height_Delete>;
  readonly read: Maybe<MediaDocAccessFields_Height_Read>;
  readonly update: Maybe<MediaDocAccessFields_Height_Update>;
};

export type MediaDocAccessFields_Height_Create = {
  readonly __typename?: 'MediaDocAccessFields_height_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Height_Delete = {
  readonly __typename?: 'MediaDocAccessFields_height_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Height_Read = {
  readonly __typename?: 'MediaDocAccessFields_height_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Height_Update = {
  readonly __typename?: 'MediaDocAccessFields_height_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_MimeType = {
  readonly __typename?: 'MediaDocAccessFields_mimeType';
  readonly create: Maybe<MediaDocAccessFields_MimeType_Create>;
  readonly delete: Maybe<MediaDocAccessFields_MimeType_Delete>;
  readonly read: Maybe<MediaDocAccessFields_MimeType_Read>;
  readonly update: Maybe<MediaDocAccessFields_MimeType_Update>;
};

export type MediaDocAccessFields_MimeType_Create = {
  readonly __typename?: 'MediaDocAccessFields_mimeType_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_MimeType_Delete = {
  readonly __typename?: 'MediaDocAccessFields_mimeType_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_MimeType_Read = {
  readonly __typename?: 'MediaDocAccessFields_mimeType_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_MimeType_Update = {
  readonly __typename?: 'MediaDocAccessFields_mimeType_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes = {
  readonly __typename?: 'MediaDocAccessFields_sizes';
  readonly create: Maybe<MediaDocAccessFields_Sizes_Create>;
  readonly delete: Maybe<MediaDocAccessFields_Sizes_Delete>;
  readonly fields: Maybe<MediaDocAccessFields_Sizes_Fields>;
  readonly read: Maybe<MediaDocAccessFields_Sizes_Read>;
  readonly update: Maybe<MediaDocAccessFields_Sizes_Update>;
};

export type MediaDocAccessFields_Sizes_Create = {
  readonly __typename?: 'MediaDocAccessFields_sizes_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Delete = {
  readonly __typename?: 'MediaDocAccessFields_sizes_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Fields = {
  readonly __typename?: 'MediaDocAccessFields_sizes_Fields';
  readonly large: Maybe<MediaDocAccessFields_Sizes_Large>;
  readonly medium: Maybe<MediaDocAccessFields_Sizes_Medium>;
  readonly og: Maybe<MediaDocAccessFields_Sizes_Og>;
  readonly small: Maybe<MediaDocAccessFields_Sizes_Small>;
  readonly square: Maybe<MediaDocAccessFields_Sizes_Square>;
  readonly thumbnail: Maybe<MediaDocAccessFields_Sizes_Thumbnail>;
  readonly xlarge: Maybe<MediaDocAccessFields_Sizes_Xlarge>;
};

export type MediaDocAccessFields_Sizes_Read = {
  readonly __typename?: 'MediaDocAccessFields_sizes_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Update = {
  readonly __typename?: 'MediaDocAccessFields_sizes_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Large = {
  readonly __typename?: 'MediaDocAccessFields_sizes_large';
  readonly create: Maybe<MediaDocAccessFields_Sizes_Large_Create>;
  readonly delete: Maybe<MediaDocAccessFields_Sizes_Large_Delete>;
  readonly fields: Maybe<MediaDocAccessFields_Sizes_Large_Fields>;
  readonly read: Maybe<MediaDocAccessFields_Sizes_Large_Read>;
  readonly update: Maybe<MediaDocAccessFields_Sizes_Large_Update>;
};

export type MediaDocAccessFields_Sizes_Large_Create = {
  readonly __typename?: 'MediaDocAccessFields_sizes_large_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Large_Delete = {
  readonly __typename?: 'MediaDocAccessFields_sizes_large_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Large_Fields = {
  readonly __typename?: 'MediaDocAccessFields_sizes_large_Fields';
  readonly filename: Maybe<MediaDocAccessFields_Sizes_Large_Filename>;
  readonly filesize: Maybe<MediaDocAccessFields_Sizes_Large_Filesize>;
  readonly height: Maybe<MediaDocAccessFields_Sizes_Large_Height>;
  readonly mimeType: Maybe<MediaDocAccessFields_Sizes_Large_MimeType>;
  readonly url: Maybe<MediaDocAccessFields_Sizes_Large_Url>;
  readonly width: Maybe<MediaDocAccessFields_Sizes_Large_Width>;
};

export type MediaDocAccessFields_Sizes_Large_Read = {
  readonly __typename?: 'MediaDocAccessFields_sizes_large_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Large_Update = {
  readonly __typename?: 'MediaDocAccessFields_sizes_large_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Large_Filename = {
  readonly __typename?: 'MediaDocAccessFields_sizes_large_filename';
  readonly create: Maybe<MediaDocAccessFields_Sizes_Large_Filename_Create>;
  readonly delete: Maybe<MediaDocAccessFields_Sizes_Large_Filename_Delete>;
  readonly read: Maybe<MediaDocAccessFields_Sizes_Large_Filename_Read>;
  readonly update: Maybe<MediaDocAccessFields_Sizes_Large_Filename_Update>;
};

export type MediaDocAccessFields_Sizes_Large_Filename_Create = {
  readonly __typename?: 'MediaDocAccessFields_sizes_large_filename_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Large_Filename_Delete = {
  readonly __typename?: 'MediaDocAccessFields_sizes_large_filename_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Large_Filename_Read = {
  readonly __typename?: 'MediaDocAccessFields_sizes_large_filename_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Large_Filename_Update = {
  readonly __typename?: 'MediaDocAccessFields_sizes_large_filename_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Large_Filesize = {
  readonly __typename?: 'MediaDocAccessFields_sizes_large_filesize';
  readonly create: Maybe<MediaDocAccessFields_Sizes_Large_Filesize_Create>;
  readonly delete: Maybe<MediaDocAccessFields_Sizes_Large_Filesize_Delete>;
  readonly read: Maybe<MediaDocAccessFields_Sizes_Large_Filesize_Read>;
  readonly update: Maybe<MediaDocAccessFields_Sizes_Large_Filesize_Update>;
};

export type MediaDocAccessFields_Sizes_Large_Filesize_Create = {
  readonly __typename?: 'MediaDocAccessFields_sizes_large_filesize_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Large_Filesize_Delete = {
  readonly __typename?: 'MediaDocAccessFields_sizes_large_filesize_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Large_Filesize_Read = {
  readonly __typename?: 'MediaDocAccessFields_sizes_large_filesize_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Large_Filesize_Update = {
  readonly __typename?: 'MediaDocAccessFields_sizes_large_filesize_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Large_Height = {
  readonly __typename?: 'MediaDocAccessFields_sizes_large_height';
  readonly create: Maybe<MediaDocAccessFields_Sizes_Large_Height_Create>;
  readonly delete: Maybe<MediaDocAccessFields_Sizes_Large_Height_Delete>;
  readonly read: Maybe<MediaDocAccessFields_Sizes_Large_Height_Read>;
  readonly update: Maybe<MediaDocAccessFields_Sizes_Large_Height_Update>;
};

export type MediaDocAccessFields_Sizes_Large_Height_Create = {
  readonly __typename?: 'MediaDocAccessFields_sizes_large_height_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Large_Height_Delete = {
  readonly __typename?: 'MediaDocAccessFields_sizes_large_height_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Large_Height_Read = {
  readonly __typename?: 'MediaDocAccessFields_sizes_large_height_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Large_Height_Update = {
  readonly __typename?: 'MediaDocAccessFields_sizes_large_height_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Large_MimeType = {
  readonly __typename?: 'MediaDocAccessFields_sizes_large_mimeType';
  readonly create: Maybe<MediaDocAccessFields_Sizes_Large_MimeType_Create>;
  readonly delete: Maybe<MediaDocAccessFields_Sizes_Large_MimeType_Delete>;
  readonly read: Maybe<MediaDocAccessFields_Sizes_Large_MimeType_Read>;
  readonly update: Maybe<MediaDocAccessFields_Sizes_Large_MimeType_Update>;
};

export type MediaDocAccessFields_Sizes_Large_MimeType_Create = {
  readonly __typename?: 'MediaDocAccessFields_sizes_large_mimeType_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Large_MimeType_Delete = {
  readonly __typename?: 'MediaDocAccessFields_sizes_large_mimeType_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Large_MimeType_Read = {
  readonly __typename?: 'MediaDocAccessFields_sizes_large_mimeType_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Large_MimeType_Update = {
  readonly __typename?: 'MediaDocAccessFields_sizes_large_mimeType_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Large_Url = {
  readonly __typename?: 'MediaDocAccessFields_sizes_large_url';
  readonly create: Maybe<MediaDocAccessFields_Sizes_Large_Url_Create>;
  readonly delete: Maybe<MediaDocAccessFields_Sizes_Large_Url_Delete>;
  readonly read: Maybe<MediaDocAccessFields_Sizes_Large_Url_Read>;
  readonly update: Maybe<MediaDocAccessFields_Sizes_Large_Url_Update>;
};

export type MediaDocAccessFields_Sizes_Large_Url_Create = {
  readonly __typename?: 'MediaDocAccessFields_sizes_large_url_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Large_Url_Delete = {
  readonly __typename?: 'MediaDocAccessFields_sizes_large_url_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Large_Url_Read = {
  readonly __typename?: 'MediaDocAccessFields_sizes_large_url_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Large_Url_Update = {
  readonly __typename?: 'MediaDocAccessFields_sizes_large_url_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Large_Width = {
  readonly __typename?: 'MediaDocAccessFields_sizes_large_width';
  readonly create: Maybe<MediaDocAccessFields_Sizes_Large_Width_Create>;
  readonly delete: Maybe<MediaDocAccessFields_Sizes_Large_Width_Delete>;
  readonly read: Maybe<MediaDocAccessFields_Sizes_Large_Width_Read>;
  readonly update: Maybe<MediaDocAccessFields_Sizes_Large_Width_Update>;
};

export type MediaDocAccessFields_Sizes_Large_Width_Create = {
  readonly __typename?: 'MediaDocAccessFields_sizes_large_width_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Large_Width_Delete = {
  readonly __typename?: 'MediaDocAccessFields_sizes_large_width_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Large_Width_Read = {
  readonly __typename?: 'MediaDocAccessFields_sizes_large_width_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Large_Width_Update = {
  readonly __typename?: 'MediaDocAccessFields_sizes_large_width_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Medium = {
  readonly __typename?: 'MediaDocAccessFields_sizes_medium';
  readonly create: Maybe<MediaDocAccessFields_Sizes_Medium_Create>;
  readonly delete: Maybe<MediaDocAccessFields_Sizes_Medium_Delete>;
  readonly fields: Maybe<MediaDocAccessFields_Sizes_Medium_Fields>;
  readonly read: Maybe<MediaDocAccessFields_Sizes_Medium_Read>;
  readonly update: Maybe<MediaDocAccessFields_Sizes_Medium_Update>;
};

export type MediaDocAccessFields_Sizes_Medium_Create = {
  readonly __typename?: 'MediaDocAccessFields_sizes_medium_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Medium_Delete = {
  readonly __typename?: 'MediaDocAccessFields_sizes_medium_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Medium_Fields = {
  readonly __typename?: 'MediaDocAccessFields_sizes_medium_Fields';
  readonly filename: Maybe<MediaDocAccessFields_Sizes_Medium_Filename>;
  readonly filesize: Maybe<MediaDocAccessFields_Sizes_Medium_Filesize>;
  readonly height: Maybe<MediaDocAccessFields_Sizes_Medium_Height>;
  readonly mimeType: Maybe<MediaDocAccessFields_Sizes_Medium_MimeType>;
  readonly url: Maybe<MediaDocAccessFields_Sizes_Medium_Url>;
  readonly width: Maybe<MediaDocAccessFields_Sizes_Medium_Width>;
};

export type MediaDocAccessFields_Sizes_Medium_Read = {
  readonly __typename?: 'MediaDocAccessFields_sizes_medium_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Medium_Update = {
  readonly __typename?: 'MediaDocAccessFields_sizes_medium_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Medium_Filename = {
  readonly __typename?: 'MediaDocAccessFields_sizes_medium_filename';
  readonly create: Maybe<MediaDocAccessFields_Sizes_Medium_Filename_Create>;
  readonly delete: Maybe<MediaDocAccessFields_Sizes_Medium_Filename_Delete>;
  readonly read: Maybe<MediaDocAccessFields_Sizes_Medium_Filename_Read>;
  readonly update: Maybe<MediaDocAccessFields_Sizes_Medium_Filename_Update>;
};

export type MediaDocAccessFields_Sizes_Medium_Filename_Create = {
  readonly __typename?: 'MediaDocAccessFields_sizes_medium_filename_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Medium_Filename_Delete = {
  readonly __typename?: 'MediaDocAccessFields_sizes_medium_filename_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Medium_Filename_Read = {
  readonly __typename?: 'MediaDocAccessFields_sizes_medium_filename_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Medium_Filename_Update = {
  readonly __typename?: 'MediaDocAccessFields_sizes_medium_filename_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Medium_Filesize = {
  readonly __typename?: 'MediaDocAccessFields_sizes_medium_filesize';
  readonly create: Maybe<MediaDocAccessFields_Sizes_Medium_Filesize_Create>;
  readonly delete: Maybe<MediaDocAccessFields_Sizes_Medium_Filesize_Delete>;
  readonly read: Maybe<MediaDocAccessFields_Sizes_Medium_Filesize_Read>;
  readonly update: Maybe<MediaDocAccessFields_Sizes_Medium_Filesize_Update>;
};

export type MediaDocAccessFields_Sizes_Medium_Filesize_Create = {
  readonly __typename?: 'MediaDocAccessFields_sizes_medium_filesize_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Medium_Filesize_Delete = {
  readonly __typename?: 'MediaDocAccessFields_sizes_medium_filesize_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Medium_Filesize_Read = {
  readonly __typename?: 'MediaDocAccessFields_sizes_medium_filesize_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Medium_Filesize_Update = {
  readonly __typename?: 'MediaDocAccessFields_sizes_medium_filesize_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Medium_Height = {
  readonly __typename?: 'MediaDocAccessFields_sizes_medium_height';
  readonly create: Maybe<MediaDocAccessFields_Sizes_Medium_Height_Create>;
  readonly delete: Maybe<MediaDocAccessFields_Sizes_Medium_Height_Delete>;
  readonly read: Maybe<MediaDocAccessFields_Sizes_Medium_Height_Read>;
  readonly update: Maybe<MediaDocAccessFields_Sizes_Medium_Height_Update>;
};

export type MediaDocAccessFields_Sizes_Medium_Height_Create = {
  readonly __typename?: 'MediaDocAccessFields_sizes_medium_height_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Medium_Height_Delete = {
  readonly __typename?: 'MediaDocAccessFields_sizes_medium_height_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Medium_Height_Read = {
  readonly __typename?: 'MediaDocAccessFields_sizes_medium_height_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Medium_Height_Update = {
  readonly __typename?: 'MediaDocAccessFields_sizes_medium_height_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Medium_MimeType = {
  readonly __typename?: 'MediaDocAccessFields_sizes_medium_mimeType';
  readonly create: Maybe<MediaDocAccessFields_Sizes_Medium_MimeType_Create>;
  readonly delete: Maybe<MediaDocAccessFields_Sizes_Medium_MimeType_Delete>;
  readonly read: Maybe<MediaDocAccessFields_Sizes_Medium_MimeType_Read>;
  readonly update: Maybe<MediaDocAccessFields_Sizes_Medium_MimeType_Update>;
};

export type MediaDocAccessFields_Sizes_Medium_MimeType_Create = {
  readonly __typename?: 'MediaDocAccessFields_sizes_medium_mimeType_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Medium_MimeType_Delete = {
  readonly __typename?: 'MediaDocAccessFields_sizes_medium_mimeType_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Medium_MimeType_Read = {
  readonly __typename?: 'MediaDocAccessFields_sizes_medium_mimeType_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Medium_MimeType_Update = {
  readonly __typename?: 'MediaDocAccessFields_sizes_medium_mimeType_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Medium_Url = {
  readonly __typename?: 'MediaDocAccessFields_sizes_medium_url';
  readonly create: Maybe<MediaDocAccessFields_Sizes_Medium_Url_Create>;
  readonly delete: Maybe<MediaDocAccessFields_Sizes_Medium_Url_Delete>;
  readonly read: Maybe<MediaDocAccessFields_Sizes_Medium_Url_Read>;
  readonly update: Maybe<MediaDocAccessFields_Sizes_Medium_Url_Update>;
};

export type MediaDocAccessFields_Sizes_Medium_Url_Create = {
  readonly __typename?: 'MediaDocAccessFields_sizes_medium_url_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Medium_Url_Delete = {
  readonly __typename?: 'MediaDocAccessFields_sizes_medium_url_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Medium_Url_Read = {
  readonly __typename?: 'MediaDocAccessFields_sizes_medium_url_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Medium_Url_Update = {
  readonly __typename?: 'MediaDocAccessFields_sizes_medium_url_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Medium_Width = {
  readonly __typename?: 'MediaDocAccessFields_sizes_medium_width';
  readonly create: Maybe<MediaDocAccessFields_Sizes_Medium_Width_Create>;
  readonly delete: Maybe<MediaDocAccessFields_Sizes_Medium_Width_Delete>;
  readonly read: Maybe<MediaDocAccessFields_Sizes_Medium_Width_Read>;
  readonly update: Maybe<MediaDocAccessFields_Sizes_Medium_Width_Update>;
};

export type MediaDocAccessFields_Sizes_Medium_Width_Create = {
  readonly __typename?: 'MediaDocAccessFields_sizes_medium_width_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Medium_Width_Delete = {
  readonly __typename?: 'MediaDocAccessFields_sizes_medium_width_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Medium_Width_Read = {
  readonly __typename?: 'MediaDocAccessFields_sizes_medium_width_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Medium_Width_Update = {
  readonly __typename?: 'MediaDocAccessFields_sizes_medium_width_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Og = {
  readonly __typename?: 'MediaDocAccessFields_sizes_og';
  readonly create: Maybe<MediaDocAccessFields_Sizes_Og_Create>;
  readonly delete: Maybe<MediaDocAccessFields_Sizes_Og_Delete>;
  readonly fields: Maybe<MediaDocAccessFields_Sizes_Og_Fields>;
  readonly read: Maybe<MediaDocAccessFields_Sizes_Og_Read>;
  readonly update: Maybe<MediaDocAccessFields_Sizes_Og_Update>;
};

export type MediaDocAccessFields_Sizes_Og_Create = {
  readonly __typename?: 'MediaDocAccessFields_sizes_og_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Og_Delete = {
  readonly __typename?: 'MediaDocAccessFields_sizes_og_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Og_Fields = {
  readonly __typename?: 'MediaDocAccessFields_sizes_og_Fields';
  readonly filename: Maybe<MediaDocAccessFields_Sizes_Og_Filename>;
  readonly filesize: Maybe<MediaDocAccessFields_Sizes_Og_Filesize>;
  readonly height: Maybe<MediaDocAccessFields_Sizes_Og_Height>;
  readonly mimeType: Maybe<MediaDocAccessFields_Sizes_Og_MimeType>;
  readonly url: Maybe<MediaDocAccessFields_Sizes_Og_Url>;
  readonly width: Maybe<MediaDocAccessFields_Sizes_Og_Width>;
};

export type MediaDocAccessFields_Sizes_Og_Read = {
  readonly __typename?: 'MediaDocAccessFields_sizes_og_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Og_Update = {
  readonly __typename?: 'MediaDocAccessFields_sizes_og_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Og_Filename = {
  readonly __typename?: 'MediaDocAccessFields_sizes_og_filename';
  readonly create: Maybe<MediaDocAccessFields_Sizes_Og_Filename_Create>;
  readonly delete: Maybe<MediaDocAccessFields_Sizes_Og_Filename_Delete>;
  readonly read: Maybe<MediaDocAccessFields_Sizes_Og_Filename_Read>;
  readonly update: Maybe<MediaDocAccessFields_Sizes_Og_Filename_Update>;
};

export type MediaDocAccessFields_Sizes_Og_Filename_Create = {
  readonly __typename?: 'MediaDocAccessFields_sizes_og_filename_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Og_Filename_Delete = {
  readonly __typename?: 'MediaDocAccessFields_sizes_og_filename_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Og_Filename_Read = {
  readonly __typename?: 'MediaDocAccessFields_sizes_og_filename_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Og_Filename_Update = {
  readonly __typename?: 'MediaDocAccessFields_sizes_og_filename_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Og_Filesize = {
  readonly __typename?: 'MediaDocAccessFields_sizes_og_filesize';
  readonly create: Maybe<MediaDocAccessFields_Sizes_Og_Filesize_Create>;
  readonly delete: Maybe<MediaDocAccessFields_Sizes_Og_Filesize_Delete>;
  readonly read: Maybe<MediaDocAccessFields_Sizes_Og_Filesize_Read>;
  readonly update: Maybe<MediaDocAccessFields_Sizes_Og_Filesize_Update>;
};

export type MediaDocAccessFields_Sizes_Og_Filesize_Create = {
  readonly __typename?: 'MediaDocAccessFields_sizes_og_filesize_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Og_Filesize_Delete = {
  readonly __typename?: 'MediaDocAccessFields_sizes_og_filesize_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Og_Filesize_Read = {
  readonly __typename?: 'MediaDocAccessFields_sizes_og_filesize_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Og_Filesize_Update = {
  readonly __typename?: 'MediaDocAccessFields_sizes_og_filesize_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Og_Height = {
  readonly __typename?: 'MediaDocAccessFields_sizes_og_height';
  readonly create: Maybe<MediaDocAccessFields_Sizes_Og_Height_Create>;
  readonly delete: Maybe<MediaDocAccessFields_Sizes_Og_Height_Delete>;
  readonly read: Maybe<MediaDocAccessFields_Sizes_Og_Height_Read>;
  readonly update: Maybe<MediaDocAccessFields_Sizes_Og_Height_Update>;
};

export type MediaDocAccessFields_Sizes_Og_Height_Create = {
  readonly __typename?: 'MediaDocAccessFields_sizes_og_height_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Og_Height_Delete = {
  readonly __typename?: 'MediaDocAccessFields_sizes_og_height_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Og_Height_Read = {
  readonly __typename?: 'MediaDocAccessFields_sizes_og_height_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Og_Height_Update = {
  readonly __typename?: 'MediaDocAccessFields_sizes_og_height_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Og_MimeType = {
  readonly __typename?: 'MediaDocAccessFields_sizes_og_mimeType';
  readonly create: Maybe<MediaDocAccessFields_Sizes_Og_MimeType_Create>;
  readonly delete: Maybe<MediaDocAccessFields_Sizes_Og_MimeType_Delete>;
  readonly read: Maybe<MediaDocAccessFields_Sizes_Og_MimeType_Read>;
  readonly update: Maybe<MediaDocAccessFields_Sizes_Og_MimeType_Update>;
};

export type MediaDocAccessFields_Sizes_Og_MimeType_Create = {
  readonly __typename?: 'MediaDocAccessFields_sizes_og_mimeType_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Og_MimeType_Delete = {
  readonly __typename?: 'MediaDocAccessFields_sizes_og_mimeType_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Og_MimeType_Read = {
  readonly __typename?: 'MediaDocAccessFields_sizes_og_mimeType_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Og_MimeType_Update = {
  readonly __typename?: 'MediaDocAccessFields_sizes_og_mimeType_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Og_Url = {
  readonly __typename?: 'MediaDocAccessFields_sizes_og_url';
  readonly create: Maybe<MediaDocAccessFields_Sizes_Og_Url_Create>;
  readonly delete: Maybe<MediaDocAccessFields_Sizes_Og_Url_Delete>;
  readonly read: Maybe<MediaDocAccessFields_Sizes_Og_Url_Read>;
  readonly update: Maybe<MediaDocAccessFields_Sizes_Og_Url_Update>;
};

export type MediaDocAccessFields_Sizes_Og_Url_Create = {
  readonly __typename?: 'MediaDocAccessFields_sizes_og_url_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Og_Url_Delete = {
  readonly __typename?: 'MediaDocAccessFields_sizes_og_url_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Og_Url_Read = {
  readonly __typename?: 'MediaDocAccessFields_sizes_og_url_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Og_Url_Update = {
  readonly __typename?: 'MediaDocAccessFields_sizes_og_url_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Og_Width = {
  readonly __typename?: 'MediaDocAccessFields_sizes_og_width';
  readonly create: Maybe<MediaDocAccessFields_Sizes_Og_Width_Create>;
  readonly delete: Maybe<MediaDocAccessFields_Sizes_Og_Width_Delete>;
  readonly read: Maybe<MediaDocAccessFields_Sizes_Og_Width_Read>;
  readonly update: Maybe<MediaDocAccessFields_Sizes_Og_Width_Update>;
};

export type MediaDocAccessFields_Sizes_Og_Width_Create = {
  readonly __typename?: 'MediaDocAccessFields_sizes_og_width_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Og_Width_Delete = {
  readonly __typename?: 'MediaDocAccessFields_sizes_og_width_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Og_Width_Read = {
  readonly __typename?: 'MediaDocAccessFields_sizes_og_width_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Og_Width_Update = {
  readonly __typename?: 'MediaDocAccessFields_sizes_og_width_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Small = {
  readonly __typename?: 'MediaDocAccessFields_sizes_small';
  readonly create: Maybe<MediaDocAccessFields_Sizes_Small_Create>;
  readonly delete: Maybe<MediaDocAccessFields_Sizes_Small_Delete>;
  readonly fields: Maybe<MediaDocAccessFields_Sizes_Small_Fields>;
  readonly read: Maybe<MediaDocAccessFields_Sizes_Small_Read>;
  readonly update: Maybe<MediaDocAccessFields_Sizes_Small_Update>;
};

export type MediaDocAccessFields_Sizes_Small_Create = {
  readonly __typename?: 'MediaDocAccessFields_sizes_small_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Small_Delete = {
  readonly __typename?: 'MediaDocAccessFields_sizes_small_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Small_Fields = {
  readonly __typename?: 'MediaDocAccessFields_sizes_small_Fields';
  readonly filename: Maybe<MediaDocAccessFields_Sizes_Small_Filename>;
  readonly filesize: Maybe<MediaDocAccessFields_Sizes_Small_Filesize>;
  readonly height: Maybe<MediaDocAccessFields_Sizes_Small_Height>;
  readonly mimeType: Maybe<MediaDocAccessFields_Sizes_Small_MimeType>;
  readonly url: Maybe<MediaDocAccessFields_Sizes_Small_Url>;
  readonly width: Maybe<MediaDocAccessFields_Sizes_Small_Width>;
};

export type MediaDocAccessFields_Sizes_Small_Read = {
  readonly __typename?: 'MediaDocAccessFields_sizes_small_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Small_Update = {
  readonly __typename?: 'MediaDocAccessFields_sizes_small_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Small_Filename = {
  readonly __typename?: 'MediaDocAccessFields_sizes_small_filename';
  readonly create: Maybe<MediaDocAccessFields_Sizes_Small_Filename_Create>;
  readonly delete: Maybe<MediaDocAccessFields_Sizes_Small_Filename_Delete>;
  readonly read: Maybe<MediaDocAccessFields_Sizes_Small_Filename_Read>;
  readonly update: Maybe<MediaDocAccessFields_Sizes_Small_Filename_Update>;
};

export type MediaDocAccessFields_Sizes_Small_Filename_Create = {
  readonly __typename?: 'MediaDocAccessFields_sizes_small_filename_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Small_Filename_Delete = {
  readonly __typename?: 'MediaDocAccessFields_sizes_small_filename_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Small_Filename_Read = {
  readonly __typename?: 'MediaDocAccessFields_sizes_small_filename_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Small_Filename_Update = {
  readonly __typename?: 'MediaDocAccessFields_sizes_small_filename_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Small_Filesize = {
  readonly __typename?: 'MediaDocAccessFields_sizes_small_filesize';
  readonly create: Maybe<MediaDocAccessFields_Sizes_Small_Filesize_Create>;
  readonly delete: Maybe<MediaDocAccessFields_Sizes_Small_Filesize_Delete>;
  readonly read: Maybe<MediaDocAccessFields_Sizes_Small_Filesize_Read>;
  readonly update: Maybe<MediaDocAccessFields_Sizes_Small_Filesize_Update>;
};

export type MediaDocAccessFields_Sizes_Small_Filesize_Create = {
  readonly __typename?: 'MediaDocAccessFields_sizes_small_filesize_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Small_Filesize_Delete = {
  readonly __typename?: 'MediaDocAccessFields_sizes_small_filesize_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Small_Filesize_Read = {
  readonly __typename?: 'MediaDocAccessFields_sizes_small_filesize_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Small_Filesize_Update = {
  readonly __typename?: 'MediaDocAccessFields_sizes_small_filesize_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Small_Height = {
  readonly __typename?: 'MediaDocAccessFields_sizes_small_height';
  readonly create: Maybe<MediaDocAccessFields_Sizes_Small_Height_Create>;
  readonly delete: Maybe<MediaDocAccessFields_Sizes_Small_Height_Delete>;
  readonly read: Maybe<MediaDocAccessFields_Sizes_Small_Height_Read>;
  readonly update: Maybe<MediaDocAccessFields_Sizes_Small_Height_Update>;
};

export type MediaDocAccessFields_Sizes_Small_Height_Create = {
  readonly __typename?: 'MediaDocAccessFields_sizes_small_height_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Small_Height_Delete = {
  readonly __typename?: 'MediaDocAccessFields_sizes_small_height_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Small_Height_Read = {
  readonly __typename?: 'MediaDocAccessFields_sizes_small_height_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Small_Height_Update = {
  readonly __typename?: 'MediaDocAccessFields_sizes_small_height_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Small_MimeType = {
  readonly __typename?: 'MediaDocAccessFields_sizes_small_mimeType';
  readonly create: Maybe<MediaDocAccessFields_Sizes_Small_MimeType_Create>;
  readonly delete: Maybe<MediaDocAccessFields_Sizes_Small_MimeType_Delete>;
  readonly read: Maybe<MediaDocAccessFields_Sizes_Small_MimeType_Read>;
  readonly update: Maybe<MediaDocAccessFields_Sizes_Small_MimeType_Update>;
};

export type MediaDocAccessFields_Sizes_Small_MimeType_Create = {
  readonly __typename?: 'MediaDocAccessFields_sizes_small_mimeType_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Small_MimeType_Delete = {
  readonly __typename?: 'MediaDocAccessFields_sizes_small_mimeType_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Small_MimeType_Read = {
  readonly __typename?: 'MediaDocAccessFields_sizes_small_mimeType_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Small_MimeType_Update = {
  readonly __typename?: 'MediaDocAccessFields_sizes_small_mimeType_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Small_Url = {
  readonly __typename?: 'MediaDocAccessFields_sizes_small_url';
  readonly create: Maybe<MediaDocAccessFields_Sizes_Small_Url_Create>;
  readonly delete: Maybe<MediaDocAccessFields_Sizes_Small_Url_Delete>;
  readonly read: Maybe<MediaDocAccessFields_Sizes_Small_Url_Read>;
  readonly update: Maybe<MediaDocAccessFields_Sizes_Small_Url_Update>;
};

export type MediaDocAccessFields_Sizes_Small_Url_Create = {
  readonly __typename?: 'MediaDocAccessFields_sizes_small_url_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Small_Url_Delete = {
  readonly __typename?: 'MediaDocAccessFields_sizes_small_url_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Small_Url_Read = {
  readonly __typename?: 'MediaDocAccessFields_sizes_small_url_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Small_Url_Update = {
  readonly __typename?: 'MediaDocAccessFields_sizes_small_url_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Small_Width = {
  readonly __typename?: 'MediaDocAccessFields_sizes_small_width';
  readonly create: Maybe<MediaDocAccessFields_Sizes_Small_Width_Create>;
  readonly delete: Maybe<MediaDocAccessFields_Sizes_Small_Width_Delete>;
  readonly read: Maybe<MediaDocAccessFields_Sizes_Small_Width_Read>;
  readonly update: Maybe<MediaDocAccessFields_Sizes_Small_Width_Update>;
};

export type MediaDocAccessFields_Sizes_Small_Width_Create = {
  readonly __typename?: 'MediaDocAccessFields_sizes_small_width_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Small_Width_Delete = {
  readonly __typename?: 'MediaDocAccessFields_sizes_small_width_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Small_Width_Read = {
  readonly __typename?: 'MediaDocAccessFields_sizes_small_width_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Small_Width_Update = {
  readonly __typename?: 'MediaDocAccessFields_sizes_small_width_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Square = {
  readonly __typename?: 'MediaDocAccessFields_sizes_square';
  readonly create: Maybe<MediaDocAccessFields_Sizes_Square_Create>;
  readonly delete: Maybe<MediaDocAccessFields_Sizes_Square_Delete>;
  readonly fields: Maybe<MediaDocAccessFields_Sizes_Square_Fields>;
  readonly read: Maybe<MediaDocAccessFields_Sizes_Square_Read>;
  readonly update: Maybe<MediaDocAccessFields_Sizes_Square_Update>;
};

export type MediaDocAccessFields_Sizes_Square_Create = {
  readonly __typename?: 'MediaDocAccessFields_sizes_square_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Square_Delete = {
  readonly __typename?: 'MediaDocAccessFields_sizes_square_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Square_Fields = {
  readonly __typename?: 'MediaDocAccessFields_sizes_square_Fields';
  readonly filename: Maybe<MediaDocAccessFields_Sizes_Square_Filename>;
  readonly filesize: Maybe<MediaDocAccessFields_Sizes_Square_Filesize>;
  readonly height: Maybe<MediaDocAccessFields_Sizes_Square_Height>;
  readonly mimeType: Maybe<MediaDocAccessFields_Sizes_Square_MimeType>;
  readonly url: Maybe<MediaDocAccessFields_Sizes_Square_Url>;
  readonly width: Maybe<MediaDocAccessFields_Sizes_Square_Width>;
};

export type MediaDocAccessFields_Sizes_Square_Read = {
  readonly __typename?: 'MediaDocAccessFields_sizes_square_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Square_Update = {
  readonly __typename?: 'MediaDocAccessFields_sizes_square_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Square_Filename = {
  readonly __typename?: 'MediaDocAccessFields_sizes_square_filename';
  readonly create: Maybe<MediaDocAccessFields_Sizes_Square_Filename_Create>;
  readonly delete: Maybe<MediaDocAccessFields_Sizes_Square_Filename_Delete>;
  readonly read: Maybe<MediaDocAccessFields_Sizes_Square_Filename_Read>;
  readonly update: Maybe<MediaDocAccessFields_Sizes_Square_Filename_Update>;
};

export type MediaDocAccessFields_Sizes_Square_Filename_Create = {
  readonly __typename?: 'MediaDocAccessFields_sizes_square_filename_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Square_Filename_Delete = {
  readonly __typename?: 'MediaDocAccessFields_sizes_square_filename_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Square_Filename_Read = {
  readonly __typename?: 'MediaDocAccessFields_sizes_square_filename_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Square_Filename_Update = {
  readonly __typename?: 'MediaDocAccessFields_sizes_square_filename_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Square_Filesize = {
  readonly __typename?: 'MediaDocAccessFields_sizes_square_filesize';
  readonly create: Maybe<MediaDocAccessFields_Sizes_Square_Filesize_Create>;
  readonly delete: Maybe<MediaDocAccessFields_Sizes_Square_Filesize_Delete>;
  readonly read: Maybe<MediaDocAccessFields_Sizes_Square_Filesize_Read>;
  readonly update: Maybe<MediaDocAccessFields_Sizes_Square_Filesize_Update>;
};

export type MediaDocAccessFields_Sizes_Square_Filesize_Create = {
  readonly __typename?: 'MediaDocAccessFields_sizes_square_filesize_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Square_Filesize_Delete = {
  readonly __typename?: 'MediaDocAccessFields_sizes_square_filesize_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Square_Filesize_Read = {
  readonly __typename?: 'MediaDocAccessFields_sizes_square_filesize_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Square_Filesize_Update = {
  readonly __typename?: 'MediaDocAccessFields_sizes_square_filesize_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Square_Height = {
  readonly __typename?: 'MediaDocAccessFields_sizes_square_height';
  readonly create: Maybe<MediaDocAccessFields_Sizes_Square_Height_Create>;
  readonly delete: Maybe<MediaDocAccessFields_Sizes_Square_Height_Delete>;
  readonly read: Maybe<MediaDocAccessFields_Sizes_Square_Height_Read>;
  readonly update: Maybe<MediaDocAccessFields_Sizes_Square_Height_Update>;
};

export type MediaDocAccessFields_Sizes_Square_Height_Create = {
  readonly __typename?: 'MediaDocAccessFields_sizes_square_height_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Square_Height_Delete = {
  readonly __typename?: 'MediaDocAccessFields_sizes_square_height_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Square_Height_Read = {
  readonly __typename?: 'MediaDocAccessFields_sizes_square_height_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Square_Height_Update = {
  readonly __typename?: 'MediaDocAccessFields_sizes_square_height_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Square_MimeType = {
  readonly __typename?: 'MediaDocAccessFields_sizes_square_mimeType';
  readonly create: Maybe<MediaDocAccessFields_Sizes_Square_MimeType_Create>;
  readonly delete: Maybe<MediaDocAccessFields_Sizes_Square_MimeType_Delete>;
  readonly read: Maybe<MediaDocAccessFields_Sizes_Square_MimeType_Read>;
  readonly update: Maybe<MediaDocAccessFields_Sizes_Square_MimeType_Update>;
};

export type MediaDocAccessFields_Sizes_Square_MimeType_Create = {
  readonly __typename?: 'MediaDocAccessFields_sizes_square_mimeType_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Square_MimeType_Delete = {
  readonly __typename?: 'MediaDocAccessFields_sizes_square_mimeType_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Square_MimeType_Read = {
  readonly __typename?: 'MediaDocAccessFields_sizes_square_mimeType_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Square_MimeType_Update = {
  readonly __typename?: 'MediaDocAccessFields_sizes_square_mimeType_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Square_Url = {
  readonly __typename?: 'MediaDocAccessFields_sizes_square_url';
  readonly create: Maybe<MediaDocAccessFields_Sizes_Square_Url_Create>;
  readonly delete: Maybe<MediaDocAccessFields_Sizes_Square_Url_Delete>;
  readonly read: Maybe<MediaDocAccessFields_Sizes_Square_Url_Read>;
  readonly update: Maybe<MediaDocAccessFields_Sizes_Square_Url_Update>;
};

export type MediaDocAccessFields_Sizes_Square_Url_Create = {
  readonly __typename?: 'MediaDocAccessFields_sizes_square_url_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Square_Url_Delete = {
  readonly __typename?: 'MediaDocAccessFields_sizes_square_url_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Square_Url_Read = {
  readonly __typename?: 'MediaDocAccessFields_sizes_square_url_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Square_Url_Update = {
  readonly __typename?: 'MediaDocAccessFields_sizes_square_url_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Square_Width = {
  readonly __typename?: 'MediaDocAccessFields_sizes_square_width';
  readonly create: Maybe<MediaDocAccessFields_Sizes_Square_Width_Create>;
  readonly delete: Maybe<MediaDocAccessFields_Sizes_Square_Width_Delete>;
  readonly read: Maybe<MediaDocAccessFields_Sizes_Square_Width_Read>;
  readonly update: Maybe<MediaDocAccessFields_Sizes_Square_Width_Update>;
};

export type MediaDocAccessFields_Sizes_Square_Width_Create = {
  readonly __typename?: 'MediaDocAccessFields_sizes_square_width_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Square_Width_Delete = {
  readonly __typename?: 'MediaDocAccessFields_sizes_square_width_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Square_Width_Read = {
  readonly __typename?: 'MediaDocAccessFields_sizes_square_width_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Square_Width_Update = {
  readonly __typename?: 'MediaDocAccessFields_sizes_square_width_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail = {
  readonly __typename?: 'MediaDocAccessFields_sizes_thumbnail';
  readonly create: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Create>;
  readonly delete: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Delete>;
  readonly fields: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Fields>;
  readonly read: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Read>;
  readonly update: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Update>;
};

export type MediaDocAccessFields_Sizes_Thumbnail_Create = {
  readonly __typename?: 'MediaDocAccessFields_sizes_thumbnail_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Delete = {
  readonly __typename?: 'MediaDocAccessFields_sizes_thumbnail_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Fields = {
  readonly __typename?: 'MediaDocAccessFields_sizes_thumbnail_Fields';
  readonly filename: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Filename>;
  readonly filesize: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Filesize>;
  readonly height: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Height>;
  readonly mimeType: Maybe<MediaDocAccessFields_Sizes_Thumbnail_MimeType>;
  readonly url: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Url>;
  readonly width: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Width>;
};

export type MediaDocAccessFields_Sizes_Thumbnail_Read = {
  readonly __typename?: 'MediaDocAccessFields_sizes_thumbnail_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Update = {
  readonly __typename?: 'MediaDocAccessFields_sizes_thumbnail_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Filename = {
  readonly __typename?: 'MediaDocAccessFields_sizes_thumbnail_filename';
  readonly create: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Filename_Create>;
  readonly delete: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Filename_Delete>;
  readonly read: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Filename_Read>;
  readonly update: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Filename_Update>;
};

export type MediaDocAccessFields_Sizes_Thumbnail_Filename_Create = {
  readonly __typename?: 'MediaDocAccessFields_sizes_thumbnail_filename_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Filename_Delete = {
  readonly __typename?: 'MediaDocAccessFields_sizes_thumbnail_filename_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Filename_Read = {
  readonly __typename?: 'MediaDocAccessFields_sizes_thumbnail_filename_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Filename_Update = {
  readonly __typename?: 'MediaDocAccessFields_sizes_thumbnail_filename_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Filesize = {
  readonly __typename?: 'MediaDocAccessFields_sizes_thumbnail_filesize';
  readonly create: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Filesize_Create>;
  readonly delete: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Filesize_Delete>;
  readonly read: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Filesize_Read>;
  readonly update: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Filesize_Update>;
};

export type MediaDocAccessFields_Sizes_Thumbnail_Filesize_Create = {
  readonly __typename?: 'MediaDocAccessFields_sizes_thumbnail_filesize_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Filesize_Delete = {
  readonly __typename?: 'MediaDocAccessFields_sizes_thumbnail_filesize_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Filesize_Read = {
  readonly __typename?: 'MediaDocAccessFields_sizes_thumbnail_filesize_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Filesize_Update = {
  readonly __typename?: 'MediaDocAccessFields_sizes_thumbnail_filesize_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Height = {
  readonly __typename?: 'MediaDocAccessFields_sizes_thumbnail_height';
  readonly create: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Height_Create>;
  readonly delete: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Height_Delete>;
  readonly read: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Height_Read>;
  readonly update: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Height_Update>;
};

export type MediaDocAccessFields_Sizes_Thumbnail_Height_Create = {
  readonly __typename?: 'MediaDocAccessFields_sizes_thumbnail_height_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Height_Delete = {
  readonly __typename?: 'MediaDocAccessFields_sizes_thumbnail_height_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Height_Read = {
  readonly __typename?: 'MediaDocAccessFields_sizes_thumbnail_height_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Height_Update = {
  readonly __typename?: 'MediaDocAccessFields_sizes_thumbnail_height_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_MimeType = {
  readonly __typename?: 'MediaDocAccessFields_sizes_thumbnail_mimeType';
  readonly create: Maybe<MediaDocAccessFields_Sizes_Thumbnail_MimeType_Create>;
  readonly delete: Maybe<MediaDocAccessFields_Sizes_Thumbnail_MimeType_Delete>;
  readonly read: Maybe<MediaDocAccessFields_Sizes_Thumbnail_MimeType_Read>;
  readonly update: Maybe<MediaDocAccessFields_Sizes_Thumbnail_MimeType_Update>;
};

export type MediaDocAccessFields_Sizes_Thumbnail_MimeType_Create = {
  readonly __typename?: 'MediaDocAccessFields_sizes_thumbnail_mimeType_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_MimeType_Delete = {
  readonly __typename?: 'MediaDocAccessFields_sizes_thumbnail_mimeType_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_MimeType_Read = {
  readonly __typename?: 'MediaDocAccessFields_sizes_thumbnail_mimeType_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_MimeType_Update = {
  readonly __typename?: 'MediaDocAccessFields_sizes_thumbnail_mimeType_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Url = {
  readonly __typename?: 'MediaDocAccessFields_sizes_thumbnail_url';
  readonly create: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Url_Create>;
  readonly delete: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Url_Delete>;
  readonly read: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Url_Read>;
  readonly update: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Url_Update>;
};

export type MediaDocAccessFields_Sizes_Thumbnail_Url_Create = {
  readonly __typename?: 'MediaDocAccessFields_sizes_thumbnail_url_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Url_Delete = {
  readonly __typename?: 'MediaDocAccessFields_sizes_thumbnail_url_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Url_Read = {
  readonly __typename?: 'MediaDocAccessFields_sizes_thumbnail_url_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Url_Update = {
  readonly __typename?: 'MediaDocAccessFields_sizes_thumbnail_url_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Width = {
  readonly __typename?: 'MediaDocAccessFields_sizes_thumbnail_width';
  readonly create: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Width_Create>;
  readonly delete: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Width_Delete>;
  readonly read: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Width_Read>;
  readonly update: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Width_Update>;
};

export type MediaDocAccessFields_Sizes_Thumbnail_Width_Create = {
  readonly __typename?: 'MediaDocAccessFields_sizes_thumbnail_width_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Width_Delete = {
  readonly __typename?: 'MediaDocAccessFields_sizes_thumbnail_width_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Width_Read = {
  readonly __typename?: 'MediaDocAccessFields_sizes_thumbnail_width_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Width_Update = {
  readonly __typename?: 'MediaDocAccessFields_sizes_thumbnail_width_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Xlarge = {
  readonly __typename?: 'MediaDocAccessFields_sizes_xlarge';
  readonly create: Maybe<MediaDocAccessFields_Sizes_Xlarge_Create>;
  readonly delete: Maybe<MediaDocAccessFields_Sizes_Xlarge_Delete>;
  readonly fields: Maybe<MediaDocAccessFields_Sizes_Xlarge_Fields>;
  readonly read: Maybe<MediaDocAccessFields_Sizes_Xlarge_Read>;
  readonly update: Maybe<MediaDocAccessFields_Sizes_Xlarge_Update>;
};

export type MediaDocAccessFields_Sizes_Xlarge_Create = {
  readonly __typename?: 'MediaDocAccessFields_sizes_xlarge_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Xlarge_Delete = {
  readonly __typename?: 'MediaDocAccessFields_sizes_xlarge_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Xlarge_Fields = {
  readonly __typename?: 'MediaDocAccessFields_sizes_xlarge_Fields';
  readonly filename: Maybe<MediaDocAccessFields_Sizes_Xlarge_Filename>;
  readonly filesize: Maybe<MediaDocAccessFields_Sizes_Xlarge_Filesize>;
  readonly height: Maybe<MediaDocAccessFields_Sizes_Xlarge_Height>;
  readonly mimeType: Maybe<MediaDocAccessFields_Sizes_Xlarge_MimeType>;
  readonly url: Maybe<MediaDocAccessFields_Sizes_Xlarge_Url>;
  readonly width: Maybe<MediaDocAccessFields_Sizes_Xlarge_Width>;
};

export type MediaDocAccessFields_Sizes_Xlarge_Read = {
  readonly __typename?: 'MediaDocAccessFields_sizes_xlarge_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Xlarge_Update = {
  readonly __typename?: 'MediaDocAccessFields_sizes_xlarge_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Xlarge_Filename = {
  readonly __typename?: 'MediaDocAccessFields_sizes_xlarge_filename';
  readonly create: Maybe<MediaDocAccessFields_Sizes_Xlarge_Filename_Create>;
  readonly delete: Maybe<MediaDocAccessFields_Sizes_Xlarge_Filename_Delete>;
  readonly read: Maybe<MediaDocAccessFields_Sizes_Xlarge_Filename_Read>;
  readonly update: Maybe<MediaDocAccessFields_Sizes_Xlarge_Filename_Update>;
};

export type MediaDocAccessFields_Sizes_Xlarge_Filename_Create = {
  readonly __typename?: 'MediaDocAccessFields_sizes_xlarge_filename_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Xlarge_Filename_Delete = {
  readonly __typename?: 'MediaDocAccessFields_sizes_xlarge_filename_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Xlarge_Filename_Read = {
  readonly __typename?: 'MediaDocAccessFields_sizes_xlarge_filename_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Xlarge_Filename_Update = {
  readonly __typename?: 'MediaDocAccessFields_sizes_xlarge_filename_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Xlarge_Filesize = {
  readonly __typename?: 'MediaDocAccessFields_sizes_xlarge_filesize';
  readonly create: Maybe<MediaDocAccessFields_Sizes_Xlarge_Filesize_Create>;
  readonly delete: Maybe<MediaDocAccessFields_Sizes_Xlarge_Filesize_Delete>;
  readonly read: Maybe<MediaDocAccessFields_Sizes_Xlarge_Filesize_Read>;
  readonly update: Maybe<MediaDocAccessFields_Sizes_Xlarge_Filesize_Update>;
};

export type MediaDocAccessFields_Sizes_Xlarge_Filesize_Create = {
  readonly __typename?: 'MediaDocAccessFields_sizes_xlarge_filesize_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Xlarge_Filesize_Delete = {
  readonly __typename?: 'MediaDocAccessFields_sizes_xlarge_filesize_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Xlarge_Filesize_Read = {
  readonly __typename?: 'MediaDocAccessFields_sizes_xlarge_filesize_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Xlarge_Filesize_Update = {
  readonly __typename?: 'MediaDocAccessFields_sizes_xlarge_filesize_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Xlarge_Height = {
  readonly __typename?: 'MediaDocAccessFields_sizes_xlarge_height';
  readonly create: Maybe<MediaDocAccessFields_Sizes_Xlarge_Height_Create>;
  readonly delete: Maybe<MediaDocAccessFields_Sizes_Xlarge_Height_Delete>;
  readonly read: Maybe<MediaDocAccessFields_Sizes_Xlarge_Height_Read>;
  readonly update: Maybe<MediaDocAccessFields_Sizes_Xlarge_Height_Update>;
};

export type MediaDocAccessFields_Sizes_Xlarge_Height_Create = {
  readonly __typename?: 'MediaDocAccessFields_sizes_xlarge_height_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Xlarge_Height_Delete = {
  readonly __typename?: 'MediaDocAccessFields_sizes_xlarge_height_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Xlarge_Height_Read = {
  readonly __typename?: 'MediaDocAccessFields_sizes_xlarge_height_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Xlarge_Height_Update = {
  readonly __typename?: 'MediaDocAccessFields_sizes_xlarge_height_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Xlarge_MimeType = {
  readonly __typename?: 'MediaDocAccessFields_sizes_xlarge_mimeType';
  readonly create: Maybe<MediaDocAccessFields_Sizes_Xlarge_MimeType_Create>;
  readonly delete: Maybe<MediaDocAccessFields_Sizes_Xlarge_MimeType_Delete>;
  readonly read: Maybe<MediaDocAccessFields_Sizes_Xlarge_MimeType_Read>;
  readonly update: Maybe<MediaDocAccessFields_Sizes_Xlarge_MimeType_Update>;
};

export type MediaDocAccessFields_Sizes_Xlarge_MimeType_Create = {
  readonly __typename?: 'MediaDocAccessFields_sizes_xlarge_mimeType_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Xlarge_MimeType_Delete = {
  readonly __typename?: 'MediaDocAccessFields_sizes_xlarge_mimeType_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Xlarge_MimeType_Read = {
  readonly __typename?: 'MediaDocAccessFields_sizes_xlarge_mimeType_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Xlarge_MimeType_Update = {
  readonly __typename?: 'MediaDocAccessFields_sizes_xlarge_mimeType_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Xlarge_Url = {
  readonly __typename?: 'MediaDocAccessFields_sizes_xlarge_url';
  readonly create: Maybe<MediaDocAccessFields_Sizes_Xlarge_Url_Create>;
  readonly delete: Maybe<MediaDocAccessFields_Sizes_Xlarge_Url_Delete>;
  readonly read: Maybe<MediaDocAccessFields_Sizes_Xlarge_Url_Read>;
  readonly update: Maybe<MediaDocAccessFields_Sizes_Xlarge_Url_Update>;
};

export type MediaDocAccessFields_Sizes_Xlarge_Url_Create = {
  readonly __typename?: 'MediaDocAccessFields_sizes_xlarge_url_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Xlarge_Url_Delete = {
  readonly __typename?: 'MediaDocAccessFields_sizes_xlarge_url_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Xlarge_Url_Read = {
  readonly __typename?: 'MediaDocAccessFields_sizes_xlarge_url_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Xlarge_Url_Update = {
  readonly __typename?: 'MediaDocAccessFields_sizes_xlarge_url_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Xlarge_Width = {
  readonly __typename?: 'MediaDocAccessFields_sizes_xlarge_width';
  readonly create: Maybe<MediaDocAccessFields_Sizes_Xlarge_Width_Create>;
  readonly delete: Maybe<MediaDocAccessFields_Sizes_Xlarge_Width_Delete>;
  readonly read: Maybe<MediaDocAccessFields_Sizes_Xlarge_Width_Read>;
  readonly update: Maybe<MediaDocAccessFields_Sizes_Xlarge_Width_Update>;
};

export type MediaDocAccessFields_Sizes_Xlarge_Width_Create = {
  readonly __typename?: 'MediaDocAccessFields_sizes_xlarge_width_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Xlarge_Width_Delete = {
  readonly __typename?: 'MediaDocAccessFields_sizes_xlarge_width_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Xlarge_Width_Read = {
  readonly __typename?: 'MediaDocAccessFields_sizes_xlarge_width_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Xlarge_Width_Update = {
  readonly __typename?: 'MediaDocAccessFields_sizes_xlarge_width_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_ThumbnailUrl = {
  readonly __typename?: 'MediaDocAccessFields_thumbnailURL';
  readonly create: Maybe<MediaDocAccessFields_ThumbnailUrl_Create>;
  readonly delete: Maybe<MediaDocAccessFields_ThumbnailUrl_Delete>;
  readonly read: Maybe<MediaDocAccessFields_ThumbnailUrl_Read>;
  readonly update: Maybe<MediaDocAccessFields_ThumbnailUrl_Update>;
};

export type MediaDocAccessFields_ThumbnailUrl_Create = {
  readonly __typename?: 'MediaDocAccessFields_thumbnailURL_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_ThumbnailUrl_Delete = {
  readonly __typename?: 'MediaDocAccessFields_thumbnailURL_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_ThumbnailUrl_Read = {
  readonly __typename?: 'MediaDocAccessFields_thumbnailURL_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_ThumbnailUrl_Update = {
  readonly __typename?: 'MediaDocAccessFields_thumbnailURL_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_UpdatedAt = {
  readonly __typename?: 'MediaDocAccessFields_updatedAt';
  readonly create: Maybe<MediaDocAccessFields_UpdatedAt_Create>;
  readonly delete: Maybe<MediaDocAccessFields_UpdatedAt_Delete>;
  readonly read: Maybe<MediaDocAccessFields_UpdatedAt_Read>;
  readonly update: Maybe<MediaDocAccessFields_UpdatedAt_Update>;
};

export type MediaDocAccessFields_UpdatedAt_Create = {
  readonly __typename?: 'MediaDocAccessFields_updatedAt_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_UpdatedAt_Delete = {
  readonly __typename?: 'MediaDocAccessFields_updatedAt_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_UpdatedAt_Read = {
  readonly __typename?: 'MediaDocAccessFields_updatedAt_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_UpdatedAt_Update = {
  readonly __typename?: 'MediaDocAccessFields_updatedAt_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Url = {
  readonly __typename?: 'MediaDocAccessFields_url';
  readonly create: Maybe<MediaDocAccessFields_Url_Create>;
  readonly delete: Maybe<MediaDocAccessFields_Url_Delete>;
  readonly read: Maybe<MediaDocAccessFields_Url_Read>;
  readonly update: Maybe<MediaDocAccessFields_Url_Update>;
};

export type MediaDocAccessFields_Url_Create = {
  readonly __typename?: 'MediaDocAccessFields_url_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Url_Delete = {
  readonly __typename?: 'MediaDocAccessFields_url_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Url_Read = {
  readonly __typename?: 'MediaDocAccessFields_url_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Url_Update = {
  readonly __typename?: 'MediaDocAccessFields_url_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Width = {
  readonly __typename?: 'MediaDocAccessFields_width';
  readonly create: Maybe<MediaDocAccessFields_Width_Create>;
  readonly delete: Maybe<MediaDocAccessFields_Width_Delete>;
  readonly read: Maybe<MediaDocAccessFields_Width_Read>;
  readonly update: Maybe<MediaDocAccessFields_Width_Update>;
};

export type MediaDocAccessFields_Width_Create = {
  readonly __typename?: 'MediaDocAccessFields_width_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Width_Delete = {
  readonly __typename?: 'MediaDocAccessFields_width_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Width_Read = {
  readonly __typename?: 'MediaDocAccessFields_width_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Width_Update = {
  readonly __typename?: 'MediaDocAccessFields_width_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields = {
  readonly __typename?: 'MediaFields';
  readonly alt: Maybe<MediaFields_Alt>;
  readonly caption: Maybe<MediaFields_Caption>;
  readonly createdAt: Maybe<MediaFields_CreatedAt>;
  readonly filename: Maybe<MediaFields_Filename>;
  readonly filesize: Maybe<MediaFields_Filesize>;
  readonly focalX: Maybe<MediaFields_FocalX>;
  readonly focalY: Maybe<MediaFields_FocalY>;
  readonly height: Maybe<MediaFields_Height>;
  readonly mimeType: Maybe<MediaFields_MimeType>;
  readonly sizes: Maybe<MediaFields_Sizes>;
  readonly thumbnailURL: Maybe<MediaFields_ThumbnailUrl>;
  readonly updatedAt: Maybe<MediaFields_UpdatedAt>;
  readonly url: Maybe<MediaFields_Url>;
  readonly width: Maybe<MediaFields_Width>;
};

export type MediaFields_Alt = {
  readonly __typename?: 'MediaFields_alt';
  readonly create: Maybe<MediaFields_Alt_Create>;
  readonly delete: Maybe<MediaFields_Alt_Delete>;
  readonly read: Maybe<MediaFields_Alt_Read>;
  readonly update: Maybe<MediaFields_Alt_Update>;
};

export type MediaFields_Alt_Create = {
  readonly __typename?: 'MediaFields_alt_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Alt_Delete = {
  readonly __typename?: 'MediaFields_alt_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Alt_Read = {
  readonly __typename?: 'MediaFields_alt_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Alt_Update = {
  readonly __typename?: 'MediaFields_alt_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Caption = {
  readonly __typename?: 'MediaFields_caption';
  readonly create: Maybe<MediaFields_Caption_Create>;
  readonly delete: Maybe<MediaFields_Caption_Delete>;
  readonly read: Maybe<MediaFields_Caption_Read>;
  readonly update: Maybe<MediaFields_Caption_Update>;
};

export type MediaFields_Caption_Create = {
  readonly __typename?: 'MediaFields_caption_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Caption_Delete = {
  readonly __typename?: 'MediaFields_caption_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Caption_Read = {
  readonly __typename?: 'MediaFields_caption_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Caption_Update = {
  readonly __typename?: 'MediaFields_caption_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_CreatedAt = {
  readonly __typename?: 'MediaFields_createdAt';
  readonly create: Maybe<MediaFields_CreatedAt_Create>;
  readonly delete: Maybe<MediaFields_CreatedAt_Delete>;
  readonly read: Maybe<MediaFields_CreatedAt_Read>;
  readonly update: Maybe<MediaFields_CreatedAt_Update>;
};

export type MediaFields_CreatedAt_Create = {
  readonly __typename?: 'MediaFields_createdAt_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_CreatedAt_Delete = {
  readonly __typename?: 'MediaFields_createdAt_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_CreatedAt_Read = {
  readonly __typename?: 'MediaFields_createdAt_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_CreatedAt_Update = {
  readonly __typename?: 'MediaFields_createdAt_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Filename = {
  readonly __typename?: 'MediaFields_filename';
  readonly create: Maybe<MediaFields_Filename_Create>;
  readonly delete: Maybe<MediaFields_Filename_Delete>;
  readonly read: Maybe<MediaFields_Filename_Read>;
  readonly update: Maybe<MediaFields_Filename_Update>;
};

export type MediaFields_Filename_Create = {
  readonly __typename?: 'MediaFields_filename_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Filename_Delete = {
  readonly __typename?: 'MediaFields_filename_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Filename_Read = {
  readonly __typename?: 'MediaFields_filename_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Filename_Update = {
  readonly __typename?: 'MediaFields_filename_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Filesize = {
  readonly __typename?: 'MediaFields_filesize';
  readonly create: Maybe<MediaFields_Filesize_Create>;
  readonly delete: Maybe<MediaFields_Filesize_Delete>;
  readonly read: Maybe<MediaFields_Filesize_Read>;
  readonly update: Maybe<MediaFields_Filesize_Update>;
};

export type MediaFields_Filesize_Create = {
  readonly __typename?: 'MediaFields_filesize_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Filesize_Delete = {
  readonly __typename?: 'MediaFields_filesize_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Filesize_Read = {
  readonly __typename?: 'MediaFields_filesize_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Filesize_Update = {
  readonly __typename?: 'MediaFields_filesize_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_FocalX = {
  readonly __typename?: 'MediaFields_focalX';
  readonly create: Maybe<MediaFields_FocalX_Create>;
  readonly delete: Maybe<MediaFields_FocalX_Delete>;
  readonly read: Maybe<MediaFields_FocalX_Read>;
  readonly update: Maybe<MediaFields_FocalX_Update>;
};

export type MediaFields_FocalX_Create = {
  readonly __typename?: 'MediaFields_focalX_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_FocalX_Delete = {
  readonly __typename?: 'MediaFields_focalX_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_FocalX_Read = {
  readonly __typename?: 'MediaFields_focalX_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_FocalX_Update = {
  readonly __typename?: 'MediaFields_focalX_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_FocalY = {
  readonly __typename?: 'MediaFields_focalY';
  readonly create: Maybe<MediaFields_FocalY_Create>;
  readonly delete: Maybe<MediaFields_FocalY_Delete>;
  readonly read: Maybe<MediaFields_FocalY_Read>;
  readonly update: Maybe<MediaFields_FocalY_Update>;
};

export type MediaFields_FocalY_Create = {
  readonly __typename?: 'MediaFields_focalY_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_FocalY_Delete = {
  readonly __typename?: 'MediaFields_focalY_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_FocalY_Read = {
  readonly __typename?: 'MediaFields_focalY_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_FocalY_Update = {
  readonly __typename?: 'MediaFields_focalY_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Height = {
  readonly __typename?: 'MediaFields_height';
  readonly create: Maybe<MediaFields_Height_Create>;
  readonly delete: Maybe<MediaFields_Height_Delete>;
  readonly read: Maybe<MediaFields_Height_Read>;
  readonly update: Maybe<MediaFields_Height_Update>;
};

export type MediaFields_Height_Create = {
  readonly __typename?: 'MediaFields_height_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Height_Delete = {
  readonly __typename?: 'MediaFields_height_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Height_Read = {
  readonly __typename?: 'MediaFields_height_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Height_Update = {
  readonly __typename?: 'MediaFields_height_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_MimeType = {
  readonly __typename?: 'MediaFields_mimeType';
  readonly create: Maybe<MediaFields_MimeType_Create>;
  readonly delete: Maybe<MediaFields_MimeType_Delete>;
  readonly read: Maybe<MediaFields_MimeType_Read>;
  readonly update: Maybe<MediaFields_MimeType_Update>;
};

export type MediaFields_MimeType_Create = {
  readonly __typename?: 'MediaFields_mimeType_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_MimeType_Delete = {
  readonly __typename?: 'MediaFields_mimeType_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_MimeType_Read = {
  readonly __typename?: 'MediaFields_mimeType_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_MimeType_Update = {
  readonly __typename?: 'MediaFields_mimeType_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes = {
  readonly __typename?: 'MediaFields_sizes';
  readonly create: Maybe<MediaFields_Sizes_Create>;
  readonly delete: Maybe<MediaFields_Sizes_Delete>;
  readonly fields: Maybe<MediaFields_Sizes_Fields>;
  readonly read: Maybe<MediaFields_Sizes_Read>;
  readonly update: Maybe<MediaFields_Sizes_Update>;
};

export type MediaFields_Sizes_Create = {
  readonly __typename?: 'MediaFields_sizes_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Delete = {
  readonly __typename?: 'MediaFields_sizes_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Fields = {
  readonly __typename?: 'MediaFields_sizes_Fields';
  readonly large: Maybe<MediaFields_Sizes_Large>;
  readonly medium: Maybe<MediaFields_Sizes_Medium>;
  readonly og: Maybe<MediaFields_Sizes_Og>;
  readonly small: Maybe<MediaFields_Sizes_Small>;
  readonly square: Maybe<MediaFields_Sizes_Square>;
  readonly thumbnail: Maybe<MediaFields_Sizes_Thumbnail>;
  readonly xlarge: Maybe<MediaFields_Sizes_Xlarge>;
};

export type MediaFields_Sizes_Read = {
  readonly __typename?: 'MediaFields_sizes_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Update = {
  readonly __typename?: 'MediaFields_sizes_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Large = {
  readonly __typename?: 'MediaFields_sizes_large';
  readonly create: Maybe<MediaFields_Sizes_Large_Create>;
  readonly delete: Maybe<MediaFields_Sizes_Large_Delete>;
  readonly fields: Maybe<MediaFields_Sizes_Large_Fields>;
  readonly read: Maybe<MediaFields_Sizes_Large_Read>;
  readonly update: Maybe<MediaFields_Sizes_Large_Update>;
};

export type MediaFields_Sizes_Large_Create = {
  readonly __typename?: 'MediaFields_sizes_large_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Large_Delete = {
  readonly __typename?: 'MediaFields_sizes_large_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Large_Fields = {
  readonly __typename?: 'MediaFields_sizes_large_Fields';
  readonly filename: Maybe<MediaFields_Sizes_Large_Filename>;
  readonly filesize: Maybe<MediaFields_Sizes_Large_Filesize>;
  readonly height: Maybe<MediaFields_Sizes_Large_Height>;
  readonly mimeType: Maybe<MediaFields_Sizes_Large_MimeType>;
  readonly url: Maybe<MediaFields_Sizes_Large_Url>;
  readonly width: Maybe<MediaFields_Sizes_Large_Width>;
};

export type MediaFields_Sizes_Large_Read = {
  readonly __typename?: 'MediaFields_sizes_large_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Large_Update = {
  readonly __typename?: 'MediaFields_sizes_large_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Large_Filename = {
  readonly __typename?: 'MediaFields_sizes_large_filename';
  readonly create: Maybe<MediaFields_Sizes_Large_Filename_Create>;
  readonly delete: Maybe<MediaFields_Sizes_Large_Filename_Delete>;
  readonly read: Maybe<MediaFields_Sizes_Large_Filename_Read>;
  readonly update: Maybe<MediaFields_Sizes_Large_Filename_Update>;
};

export type MediaFields_Sizes_Large_Filename_Create = {
  readonly __typename?: 'MediaFields_sizes_large_filename_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Large_Filename_Delete = {
  readonly __typename?: 'MediaFields_sizes_large_filename_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Large_Filename_Read = {
  readonly __typename?: 'MediaFields_sizes_large_filename_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Large_Filename_Update = {
  readonly __typename?: 'MediaFields_sizes_large_filename_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Large_Filesize = {
  readonly __typename?: 'MediaFields_sizes_large_filesize';
  readonly create: Maybe<MediaFields_Sizes_Large_Filesize_Create>;
  readonly delete: Maybe<MediaFields_Sizes_Large_Filesize_Delete>;
  readonly read: Maybe<MediaFields_Sizes_Large_Filesize_Read>;
  readonly update: Maybe<MediaFields_Sizes_Large_Filesize_Update>;
};

export type MediaFields_Sizes_Large_Filesize_Create = {
  readonly __typename?: 'MediaFields_sizes_large_filesize_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Large_Filesize_Delete = {
  readonly __typename?: 'MediaFields_sizes_large_filesize_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Large_Filesize_Read = {
  readonly __typename?: 'MediaFields_sizes_large_filesize_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Large_Filesize_Update = {
  readonly __typename?: 'MediaFields_sizes_large_filesize_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Large_Height = {
  readonly __typename?: 'MediaFields_sizes_large_height';
  readonly create: Maybe<MediaFields_Sizes_Large_Height_Create>;
  readonly delete: Maybe<MediaFields_Sizes_Large_Height_Delete>;
  readonly read: Maybe<MediaFields_Sizes_Large_Height_Read>;
  readonly update: Maybe<MediaFields_Sizes_Large_Height_Update>;
};

export type MediaFields_Sizes_Large_Height_Create = {
  readonly __typename?: 'MediaFields_sizes_large_height_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Large_Height_Delete = {
  readonly __typename?: 'MediaFields_sizes_large_height_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Large_Height_Read = {
  readonly __typename?: 'MediaFields_sizes_large_height_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Large_Height_Update = {
  readonly __typename?: 'MediaFields_sizes_large_height_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Large_MimeType = {
  readonly __typename?: 'MediaFields_sizes_large_mimeType';
  readonly create: Maybe<MediaFields_Sizes_Large_MimeType_Create>;
  readonly delete: Maybe<MediaFields_Sizes_Large_MimeType_Delete>;
  readonly read: Maybe<MediaFields_Sizes_Large_MimeType_Read>;
  readonly update: Maybe<MediaFields_Sizes_Large_MimeType_Update>;
};

export type MediaFields_Sizes_Large_MimeType_Create = {
  readonly __typename?: 'MediaFields_sizes_large_mimeType_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Large_MimeType_Delete = {
  readonly __typename?: 'MediaFields_sizes_large_mimeType_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Large_MimeType_Read = {
  readonly __typename?: 'MediaFields_sizes_large_mimeType_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Large_MimeType_Update = {
  readonly __typename?: 'MediaFields_sizes_large_mimeType_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Large_Url = {
  readonly __typename?: 'MediaFields_sizes_large_url';
  readonly create: Maybe<MediaFields_Sizes_Large_Url_Create>;
  readonly delete: Maybe<MediaFields_Sizes_Large_Url_Delete>;
  readonly read: Maybe<MediaFields_Sizes_Large_Url_Read>;
  readonly update: Maybe<MediaFields_Sizes_Large_Url_Update>;
};

export type MediaFields_Sizes_Large_Url_Create = {
  readonly __typename?: 'MediaFields_sizes_large_url_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Large_Url_Delete = {
  readonly __typename?: 'MediaFields_sizes_large_url_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Large_Url_Read = {
  readonly __typename?: 'MediaFields_sizes_large_url_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Large_Url_Update = {
  readonly __typename?: 'MediaFields_sizes_large_url_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Large_Width = {
  readonly __typename?: 'MediaFields_sizes_large_width';
  readonly create: Maybe<MediaFields_Sizes_Large_Width_Create>;
  readonly delete: Maybe<MediaFields_Sizes_Large_Width_Delete>;
  readonly read: Maybe<MediaFields_Sizes_Large_Width_Read>;
  readonly update: Maybe<MediaFields_Sizes_Large_Width_Update>;
};

export type MediaFields_Sizes_Large_Width_Create = {
  readonly __typename?: 'MediaFields_sizes_large_width_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Large_Width_Delete = {
  readonly __typename?: 'MediaFields_sizes_large_width_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Large_Width_Read = {
  readonly __typename?: 'MediaFields_sizes_large_width_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Large_Width_Update = {
  readonly __typename?: 'MediaFields_sizes_large_width_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Medium = {
  readonly __typename?: 'MediaFields_sizes_medium';
  readonly create: Maybe<MediaFields_Sizes_Medium_Create>;
  readonly delete: Maybe<MediaFields_Sizes_Medium_Delete>;
  readonly fields: Maybe<MediaFields_Sizes_Medium_Fields>;
  readonly read: Maybe<MediaFields_Sizes_Medium_Read>;
  readonly update: Maybe<MediaFields_Sizes_Medium_Update>;
};

export type MediaFields_Sizes_Medium_Create = {
  readonly __typename?: 'MediaFields_sizes_medium_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Medium_Delete = {
  readonly __typename?: 'MediaFields_sizes_medium_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Medium_Fields = {
  readonly __typename?: 'MediaFields_sizes_medium_Fields';
  readonly filename: Maybe<MediaFields_Sizes_Medium_Filename>;
  readonly filesize: Maybe<MediaFields_Sizes_Medium_Filesize>;
  readonly height: Maybe<MediaFields_Sizes_Medium_Height>;
  readonly mimeType: Maybe<MediaFields_Sizes_Medium_MimeType>;
  readonly url: Maybe<MediaFields_Sizes_Medium_Url>;
  readonly width: Maybe<MediaFields_Sizes_Medium_Width>;
};

export type MediaFields_Sizes_Medium_Read = {
  readonly __typename?: 'MediaFields_sizes_medium_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Medium_Update = {
  readonly __typename?: 'MediaFields_sizes_medium_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Medium_Filename = {
  readonly __typename?: 'MediaFields_sizes_medium_filename';
  readonly create: Maybe<MediaFields_Sizes_Medium_Filename_Create>;
  readonly delete: Maybe<MediaFields_Sizes_Medium_Filename_Delete>;
  readonly read: Maybe<MediaFields_Sizes_Medium_Filename_Read>;
  readonly update: Maybe<MediaFields_Sizes_Medium_Filename_Update>;
};

export type MediaFields_Sizes_Medium_Filename_Create = {
  readonly __typename?: 'MediaFields_sizes_medium_filename_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Medium_Filename_Delete = {
  readonly __typename?: 'MediaFields_sizes_medium_filename_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Medium_Filename_Read = {
  readonly __typename?: 'MediaFields_sizes_medium_filename_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Medium_Filename_Update = {
  readonly __typename?: 'MediaFields_sizes_medium_filename_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Medium_Filesize = {
  readonly __typename?: 'MediaFields_sizes_medium_filesize';
  readonly create: Maybe<MediaFields_Sizes_Medium_Filesize_Create>;
  readonly delete: Maybe<MediaFields_Sizes_Medium_Filesize_Delete>;
  readonly read: Maybe<MediaFields_Sizes_Medium_Filesize_Read>;
  readonly update: Maybe<MediaFields_Sizes_Medium_Filesize_Update>;
};

export type MediaFields_Sizes_Medium_Filesize_Create = {
  readonly __typename?: 'MediaFields_sizes_medium_filesize_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Medium_Filesize_Delete = {
  readonly __typename?: 'MediaFields_sizes_medium_filesize_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Medium_Filesize_Read = {
  readonly __typename?: 'MediaFields_sizes_medium_filesize_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Medium_Filesize_Update = {
  readonly __typename?: 'MediaFields_sizes_medium_filesize_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Medium_Height = {
  readonly __typename?: 'MediaFields_sizes_medium_height';
  readonly create: Maybe<MediaFields_Sizes_Medium_Height_Create>;
  readonly delete: Maybe<MediaFields_Sizes_Medium_Height_Delete>;
  readonly read: Maybe<MediaFields_Sizes_Medium_Height_Read>;
  readonly update: Maybe<MediaFields_Sizes_Medium_Height_Update>;
};

export type MediaFields_Sizes_Medium_Height_Create = {
  readonly __typename?: 'MediaFields_sizes_medium_height_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Medium_Height_Delete = {
  readonly __typename?: 'MediaFields_sizes_medium_height_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Medium_Height_Read = {
  readonly __typename?: 'MediaFields_sizes_medium_height_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Medium_Height_Update = {
  readonly __typename?: 'MediaFields_sizes_medium_height_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Medium_MimeType = {
  readonly __typename?: 'MediaFields_sizes_medium_mimeType';
  readonly create: Maybe<MediaFields_Sizes_Medium_MimeType_Create>;
  readonly delete: Maybe<MediaFields_Sizes_Medium_MimeType_Delete>;
  readonly read: Maybe<MediaFields_Sizes_Medium_MimeType_Read>;
  readonly update: Maybe<MediaFields_Sizes_Medium_MimeType_Update>;
};

export type MediaFields_Sizes_Medium_MimeType_Create = {
  readonly __typename?: 'MediaFields_sizes_medium_mimeType_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Medium_MimeType_Delete = {
  readonly __typename?: 'MediaFields_sizes_medium_mimeType_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Medium_MimeType_Read = {
  readonly __typename?: 'MediaFields_sizes_medium_mimeType_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Medium_MimeType_Update = {
  readonly __typename?: 'MediaFields_sizes_medium_mimeType_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Medium_Url = {
  readonly __typename?: 'MediaFields_sizes_medium_url';
  readonly create: Maybe<MediaFields_Sizes_Medium_Url_Create>;
  readonly delete: Maybe<MediaFields_Sizes_Medium_Url_Delete>;
  readonly read: Maybe<MediaFields_Sizes_Medium_Url_Read>;
  readonly update: Maybe<MediaFields_Sizes_Medium_Url_Update>;
};

export type MediaFields_Sizes_Medium_Url_Create = {
  readonly __typename?: 'MediaFields_sizes_medium_url_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Medium_Url_Delete = {
  readonly __typename?: 'MediaFields_sizes_medium_url_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Medium_Url_Read = {
  readonly __typename?: 'MediaFields_sizes_medium_url_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Medium_Url_Update = {
  readonly __typename?: 'MediaFields_sizes_medium_url_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Medium_Width = {
  readonly __typename?: 'MediaFields_sizes_medium_width';
  readonly create: Maybe<MediaFields_Sizes_Medium_Width_Create>;
  readonly delete: Maybe<MediaFields_Sizes_Medium_Width_Delete>;
  readonly read: Maybe<MediaFields_Sizes_Medium_Width_Read>;
  readonly update: Maybe<MediaFields_Sizes_Medium_Width_Update>;
};

export type MediaFields_Sizes_Medium_Width_Create = {
  readonly __typename?: 'MediaFields_sizes_medium_width_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Medium_Width_Delete = {
  readonly __typename?: 'MediaFields_sizes_medium_width_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Medium_Width_Read = {
  readonly __typename?: 'MediaFields_sizes_medium_width_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Medium_Width_Update = {
  readonly __typename?: 'MediaFields_sizes_medium_width_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Og = {
  readonly __typename?: 'MediaFields_sizes_og';
  readonly create: Maybe<MediaFields_Sizes_Og_Create>;
  readonly delete: Maybe<MediaFields_Sizes_Og_Delete>;
  readonly fields: Maybe<MediaFields_Sizes_Og_Fields>;
  readonly read: Maybe<MediaFields_Sizes_Og_Read>;
  readonly update: Maybe<MediaFields_Sizes_Og_Update>;
};

export type MediaFields_Sizes_Og_Create = {
  readonly __typename?: 'MediaFields_sizes_og_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Og_Delete = {
  readonly __typename?: 'MediaFields_sizes_og_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Og_Fields = {
  readonly __typename?: 'MediaFields_sizes_og_Fields';
  readonly filename: Maybe<MediaFields_Sizes_Og_Filename>;
  readonly filesize: Maybe<MediaFields_Sizes_Og_Filesize>;
  readonly height: Maybe<MediaFields_Sizes_Og_Height>;
  readonly mimeType: Maybe<MediaFields_Sizes_Og_MimeType>;
  readonly url: Maybe<MediaFields_Sizes_Og_Url>;
  readonly width: Maybe<MediaFields_Sizes_Og_Width>;
};

export type MediaFields_Sizes_Og_Read = {
  readonly __typename?: 'MediaFields_sizes_og_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Og_Update = {
  readonly __typename?: 'MediaFields_sizes_og_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Og_Filename = {
  readonly __typename?: 'MediaFields_sizes_og_filename';
  readonly create: Maybe<MediaFields_Sizes_Og_Filename_Create>;
  readonly delete: Maybe<MediaFields_Sizes_Og_Filename_Delete>;
  readonly read: Maybe<MediaFields_Sizes_Og_Filename_Read>;
  readonly update: Maybe<MediaFields_Sizes_Og_Filename_Update>;
};

export type MediaFields_Sizes_Og_Filename_Create = {
  readonly __typename?: 'MediaFields_sizes_og_filename_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Og_Filename_Delete = {
  readonly __typename?: 'MediaFields_sizes_og_filename_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Og_Filename_Read = {
  readonly __typename?: 'MediaFields_sizes_og_filename_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Og_Filename_Update = {
  readonly __typename?: 'MediaFields_sizes_og_filename_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Og_Filesize = {
  readonly __typename?: 'MediaFields_sizes_og_filesize';
  readonly create: Maybe<MediaFields_Sizes_Og_Filesize_Create>;
  readonly delete: Maybe<MediaFields_Sizes_Og_Filesize_Delete>;
  readonly read: Maybe<MediaFields_Sizes_Og_Filesize_Read>;
  readonly update: Maybe<MediaFields_Sizes_Og_Filesize_Update>;
};

export type MediaFields_Sizes_Og_Filesize_Create = {
  readonly __typename?: 'MediaFields_sizes_og_filesize_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Og_Filesize_Delete = {
  readonly __typename?: 'MediaFields_sizes_og_filesize_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Og_Filesize_Read = {
  readonly __typename?: 'MediaFields_sizes_og_filesize_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Og_Filesize_Update = {
  readonly __typename?: 'MediaFields_sizes_og_filesize_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Og_Height = {
  readonly __typename?: 'MediaFields_sizes_og_height';
  readonly create: Maybe<MediaFields_Sizes_Og_Height_Create>;
  readonly delete: Maybe<MediaFields_Sizes_Og_Height_Delete>;
  readonly read: Maybe<MediaFields_Sizes_Og_Height_Read>;
  readonly update: Maybe<MediaFields_Sizes_Og_Height_Update>;
};

export type MediaFields_Sizes_Og_Height_Create = {
  readonly __typename?: 'MediaFields_sizes_og_height_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Og_Height_Delete = {
  readonly __typename?: 'MediaFields_sizes_og_height_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Og_Height_Read = {
  readonly __typename?: 'MediaFields_sizes_og_height_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Og_Height_Update = {
  readonly __typename?: 'MediaFields_sizes_og_height_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Og_MimeType = {
  readonly __typename?: 'MediaFields_sizes_og_mimeType';
  readonly create: Maybe<MediaFields_Sizes_Og_MimeType_Create>;
  readonly delete: Maybe<MediaFields_Sizes_Og_MimeType_Delete>;
  readonly read: Maybe<MediaFields_Sizes_Og_MimeType_Read>;
  readonly update: Maybe<MediaFields_Sizes_Og_MimeType_Update>;
};

export type MediaFields_Sizes_Og_MimeType_Create = {
  readonly __typename?: 'MediaFields_sizes_og_mimeType_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Og_MimeType_Delete = {
  readonly __typename?: 'MediaFields_sizes_og_mimeType_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Og_MimeType_Read = {
  readonly __typename?: 'MediaFields_sizes_og_mimeType_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Og_MimeType_Update = {
  readonly __typename?: 'MediaFields_sizes_og_mimeType_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Og_Url = {
  readonly __typename?: 'MediaFields_sizes_og_url';
  readonly create: Maybe<MediaFields_Sizes_Og_Url_Create>;
  readonly delete: Maybe<MediaFields_Sizes_Og_Url_Delete>;
  readonly read: Maybe<MediaFields_Sizes_Og_Url_Read>;
  readonly update: Maybe<MediaFields_Sizes_Og_Url_Update>;
};

export type MediaFields_Sizes_Og_Url_Create = {
  readonly __typename?: 'MediaFields_sizes_og_url_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Og_Url_Delete = {
  readonly __typename?: 'MediaFields_sizes_og_url_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Og_Url_Read = {
  readonly __typename?: 'MediaFields_sizes_og_url_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Og_Url_Update = {
  readonly __typename?: 'MediaFields_sizes_og_url_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Og_Width = {
  readonly __typename?: 'MediaFields_sizes_og_width';
  readonly create: Maybe<MediaFields_Sizes_Og_Width_Create>;
  readonly delete: Maybe<MediaFields_Sizes_Og_Width_Delete>;
  readonly read: Maybe<MediaFields_Sizes_Og_Width_Read>;
  readonly update: Maybe<MediaFields_Sizes_Og_Width_Update>;
};

export type MediaFields_Sizes_Og_Width_Create = {
  readonly __typename?: 'MediaFields_sizes_og_width_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Og_Width_Delete = {
  readonly __typename?: 'MediaFields_sizes_og_width_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Og_Width_Read = {
  readonly __typename?: 'MediaFields_sizes_og_width_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Og_Width_Update = {
  readonly __typename?: 'MediaFields_sizes_og_width_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Small = {
  readonly __typename?: 'MediaFields_sizes_small';
  readonly create: Maybe<MediaFields_Sizes_Small_Create>;
  readonly delete: Maybe<MediaFields_Sizes_Small_Delete>;
  readonly fields: Maybe<MediaFields_Sizes_Small_Fields>;
  readonly read: Maybe<MediaFields_Sizes_Small_Read>;
  readonly update: Maybe<MediaFields_Sizes_Small_Update>;
};

export type MediaFields_Sizes_Small_Create = {
  readonly __typename?: 'MediaFields_sizes_small_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Small_Delete = {
  readonly __typename?: 'MediaFields_sizes_small_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Small_Fields = {
  readonly __typename?: 'MediaFields_sizes_small_Fields';
  readonly filename: Maybe<MediaFields_Sizes_Small_Filename>;
  readonly filesize: Maybe<MediaFields_Sizes_Small_Filesize>;
  readonly height: Maybe<MediaFields_Sizes_Small_Height>;
  readonly mimeType: Maybe<MediaFields_Sizes_Small_MimeType>;
  readonly url: Maybe<MediaFields_Sizes_Small_Url>;
  readonly width: Maybe<MediaFields_Sizes_Small_Width>;
};

export type MediaFields_Sizes_Small_Read = {
  readonly __typename?: 'MediaFields_sizes_small_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Small_Update = {
  readonly __typename?: 'MediaFields_sizes_small_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Small_Filename = {
  readonly __typename?: 'MediaFields_sizes_small_filename';
  readonly create: Maybe<MediaFields_Sizes_Small_Filename_Create>;
  readonly delete: Maybe<MediaFields_Sizes_Small_Filename_Delete>;
  readonly read: Maybe<MediaFields_Sizes_Small_Filename_Read>;
  readonly update: Maybe<MediaFields_Sizes_Small_Filename_Update>;
};

export type MediaFields_Sizes_Small_Filename_Create = {
  readonly __typename?: 'MediaFields_sizes_small_filename_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Small_Filename_Delete = {
  readonly __typename?: 'MediaFields_sizes_small_filename_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Small_Filename_Read = {
  readonly __typename?: 'MediaFields_sizes_small_filename_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Small_Filename_Update = {
  readonly __typename?: 'MediaFields_sizes_small_filename_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Small_Filesize = {
  readonly __typename?: 'MediaFields_sizes_small_filesize';
  readonly create: Maybe<MediaFields_Sizes_Small_Filesize_Create>;
  readonly delete: Maybe<MediaFields_Sizes_Small_Filesize_Delete>;
  readonly read: Maybe<MediaFields_Sizes_Small_Filesize_Read>;
  readonly update: Maybe<MediaFields_Sizes_Small_Filesize_Update>;
};

export type MediaFields_Sizes_Small_Filesize_Create = {
  readonly __typename?: 'MediaFields_sizes_small_filesize_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Small_Filesize_Delete = {
  readonly __typename?: 'MediaFields_sizes_small_filesize_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Small_Filesize_Read = {
  readonly __typename?: 'MediaFields_sizes_small_filesize_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Small_Filesize_Update = {
  readonly __typename?: 'MediaFields_sizes_small_filesize_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Small_Height = {
  readonly __typename?: 'MediaFields_sizes_small_height';
  readonly create: Maybe<MediaFields_Sizes_Small_Height_Create>;
  readonly delete: Maybe<MediaFields_Sizes_Small_Height_Delete>;
  readonly read: Maybe<MediaFields_Sizes_Small_Height_Read>;
  readonly update: Maybe<MediaFields_Sizes_Small_Height_Update>;
};

export type MediaFields_Sizes_Small_Height_Create = {
  readonly __typename?: 'MediaFields_sizes_small_height_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Small_Height_Delete = {
  readonly __typename?: 'MediaFields_sizes_small_height_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Small_Height_Read = {
  readonly __typename?: 'MediaFields_sizes_small_height_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Small_Height_Update = {
  readonly __typename?: 'MediaFields_sizes_small_height_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Small_MimeType = {
  readonly __typename?: 'MediaFields_sizes_small_mimeType';
  readonly create: Maybe<MediaFields_Sizes_Small_MimeType_Create>;
  readonly delete: Maybe<MediaFields_Sizes_Small_MimeType_Delete>;
  readonly read: Maybe<MediaFields_Sizes_Small_MimeType_Read>;
  readonly update: Maybe<MediaFields_Sizes_Small_MimeType_Update>;
};

export type MediaFields_Sizes_Small_MimeType_Create = {
  readonly __typename?: 'MediaFields_sizes_small_mimeType_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Small_MimeType_Delete = {
  readonly __typename?: 'MediaFields_sizes_small_mimeType_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Small_MimeType_Read = {
  readonly __typename?: 'MediaFields_sizes_small_mimeType_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Small_MimeType_Update = {
  readonly __typename?: 'MediaFields_sizes_small_mimeType_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Small_Url = {
  readonly __typename?: 'MediaFields_sizes_small_url';
  readonly create: Maybe<MediaFields_Sizes_Small_Url_Create>;
  readonly delete: Maybe<MediaFields_Sizes_Small_Url_Delete>;
  readonly read: Maybe<MediaFields_Sizes_Small_Url_Read>;
  readonly update: Maybe<MediaFields_Sizes_Small_Url_Update>;
};

export type MediaFields_Sizes_Small_Url_Create = {
  readonly __typename?: 'MediaFields_sizes_small_url_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Small_Url_Delete = {
  readonly __typename?: 'MediaFields_sizes_small_url_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Small_Url_Read = {
  readonly __typename?: 'MediaFields_sizes_small_url_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Small_Url_Update = {
  readonly __typename?: 'MediaFields_sizes_small_url_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Small_Width = {
  readonly __typename?: 'MediaFields_sizes_small_width';
  readonly create: Maybe<MediaFields_Sizes_Small_Width_Create>;
  readonly delete: Maybe<MediaFields_Sizes_Small_Width_Delete>;
  readonly read: Maybe<MediaFields_Sizes_Small_Width_Read>;
  readonly update: Maybe<MediaFields_Sizes_Small_Width_Update>;
};

export type MediaFields_Sizes_Small_Width_Create = {
  readonly __typename?: 'MediaFields_sizes_small_width_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Small_Width_Delete = {
  readonly __typename?: 'MediaFields_sizes_small_width_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Small_Width_Read = {
  readonly __typename?: 'MediaFields_sizes_small_width_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Small_Width_Update = {
  readonly __typename?: 'MediaFields_sizes_small_width_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Square = {
  readonly __typename?: 'MediaFields_sizes_square';
  readonly create: Maybe<MediaFields_Sizes_Square_Create>;
  readonly delete: Maybe<MediaFields_Sizes_Square_Delete>;
  readonly fields: Maybe<MediaFields_Sizes_Square_Fields>;
  readonly read: Maybe<MediaFields_Sizes_Square_Read>;
  readonly update: Maybe<MediaFields_Sizes_Square_Update>;
};

export type MediaFields_Sizes_Square_Create = {
  readonly __typename?: 'MediaFields_sizes_square_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Square_Delete = {
  readonly __typename?: 'MediaFields_sizes_square_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Square_Fields = {
  readonly __typename?: 'MediaFields_sizes_square_Fields';
  readonly filename: Maybe<MediaFields_Sizes_Square_Filename>;
  readonly filesize: Maybe<MediaFields_Sizes_Square_Filesize>;
  readonly height: Maybe<MediaFields_Sizes_Square_Height>;
  readonly mimeType: Maybe<MediaFields_Sizes_Square_MimeType>;
  readonly url: Maybe<MediaFields_Sizes_Square_Url>;
  readonly width: Maybe<MediaFields_Sizes_Square_Width>;
};

export type MediaFields_Sizes_Square_Read = {
  readonly __typename?: 'MediaFields_sizes_square_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Square_Update = {
  readonly __typename?: 'MediaFields_sizes_square_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Square_Filename = {
  readonly __typename?: 'MediaFields_sizes_square_filename';
  readonly create: Maybe<MediaFields_Sizes_Square_Filename_Create>;
  readonly delete: Maybe<MediaFields_Sizes_Square_Filename_Delete>;
  readonly read: Maybe<MediaFields_Sizes_Square_Filename_Read>;
  readonly update: Maybe<MediaFields_Sizes_Square_Filename_Update>;
};

export type MediaFields_Sizes_Square_Filename_Create = {
  readonly __typename?: 'MediaFields_sizes_square_filename_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Square_Filename_Delete = {
  readonly __typename?: 'MediaFields_sizes_square_filename_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Square_Filename_Read = {
  readonly __typename?: 'MediaFields_sizes_square_filename_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Square_Filename_Update = {
  readonly __typename?: 'MediaFields_sizes_square_filename_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Square_Filesize = {
  readonly __typename?: 'MediaFields_sizes_square_filesize';
  readonly create: Maybe<MediaFields_Sizes_Square_Filesize_Create>;
  readonly delete: Maybe<MediaFields_Sizes_Square_Filesize_Delete>;
  readonly read: Maybe<MediaFields_Sizes_Square_Filesize_Read>;
  readonly update: Maybe<MediaFields_Sizes_Square_Filesize_Update>;
};

export type MediaFields_Sizes_Square_Filesize_Create = {
  readonly __typename?: 'MediaFields_sizes_square_filesize_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Square_Filesize_Delete = {
  readonly __typename?: 'MediaFields_sizes_square_filesize_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Square_Filesize_Read = {
  readonly __typename?: 'MediaFields_sizes_square_filesize_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Square_Filesize_Update = {
  readonly __typename?: 'MediaFields_sizes_square_filesize_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Square_Height = {
  readonly __typename?: 'MediaFields_sizes_square_height';
  readonly create: Maybe<MediaFields_Sizes_Square_Height_Create>;
  readonly delete: Maybe<MediaFields_Sizes_Square_Height_Delete>;
  readonly read: Maybe<MediaFields_Sizes_Square_Height_Read>;
  readonly update: Maybe<MediaFields_Sizes_Square_Height_Update>;
};

export type MediaFields_Sizes_Square_Height_Create = {
  readonly __typename?: 'MediaFields_sizes_square_height_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Square_Height_Delete = {
  readonly __typename?: 'MediaFields_sizes_square_height_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Square_Height_Read = {
  readonly __typename?: 'MediaFields_sizes_square_height_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Square_Height_Update = {
  readonly __typename?: 'MediaFields_sizes_square_height_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Square_MimeType = {
  readonly __typename?: 'MediaFields_sizes_square_mimeType';
  readonly create: Maybe<MediaFields_Sizes_Square_MimeType_Create>;
  readonly delete: Maybe<MediaFields_Sizes_Square_MimeType_Delete>;
  readonly read: Maybe<MediaFields_Sizes_Square_MimeType_Read>;
  readonly update: Maybe<MediaFields_Sizes_Square_MimeType_Update>;
};

export type MediaFields_Sizes_Square_MimeType_Create = {
  readonly __typename?: 'MediaFields_sizes_square_mimeType_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Square_MimeType_Delete = {
  readonly __typename?: 'MediaFields_sizes_square_mimeType_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Square_MimeType_Read = {
  readonly __typename?: 'MediaFields_sizes_square_mimeType_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Square_MimeType_Update = {
  readonly __typename?: 'MediaFields_sizes_square_mimeType_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Square_Url = {
  readonly __typename?: 'MediaFields_sizes_square_url';
  readonly create: Maybe<MediaFields_Sizes_Square_Url_Create>;
  readonly delete: Maybe<MediaFields_Sizes_Square_Url_Delete>;
  readonly read: Maybe<MediaFields_Sizes_Square_Url_Read>;
  readonly update: Maybe<MediaFields_Sizes_Square_Url_Update>;
};

export type MediaFields_Sizes_Square_Url_Create = {
  readonly __typename?: 'MediaFields_sizes_square_url_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Square_Url_Delete = {
  readonly __typename?: 'MediaFields_sizes_square_url_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Square_Url_Read = {
  readonly __typename?: 'MediaFields_sizes_square_url_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Square_Url_Update = {
  readonly __typename?: 'MediaFields_sizes_square_url_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Square_Width = {
  readonly __typename?: 'MediaFields_sizes_square_width';
  readonly create: Maybe<MediaFields_Sizes_Square_Width_Create>;
  readonly delete: Maybe<MediaFields_Sizes_Square_Width_Delete>;
  readonly read: Maybe<MediaFields_Sizes_Square_Width_Read>;
  readonly update: Maybe<MediaFields_Sizes_Square_Width_Update>;
};

export type MediaFields_Sizes_Square_Width_Create = {
  readonly __typename?: 'MediaFields_sizes_square_width_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Square_Width_Delete = {
  readonly __typename?: 'MediaFields_sizes_square_width_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Square_Width_Read = {
  readonly __typename?: 'MediaFields_sizes_square_width_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Square_Width_Update = {
  readonly __typename?: 'MediaFields_sizes_square_width_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail = {
  readonly __typename?: 'MediaFields_sizes_thumbnail';
  readonly create: Maybe<MediaFields_Sizes_Thumbnail_Create>;
  readonly delete: Maybe<MediaFields_Sizes_Thumbnail_Delete>;
  readonly fields: Maybe<MediaFields_Sizes_Thumbnail_Fields>;
  readonly read: Maybe<MediaFields_Sizes_Thumbnail_Read>;
  readonly update: Maybe<MediaFields_Sizes_Thumbnail_Update>;
};

export type MediaFields_Sizes_Thumbnail_Create = {
  readonly __typename?: 'MediaFields_sizes_thumbnail_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Delete = {
  readonly __typename?: 'MediaFields_sizes_thumbnail_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Fields = {
  readonly __typename?: 'MediaFields_sizes_thumbnail_Fields';
  readonly filename: Maybe<MediaFields_Sizes_Thumbnail_Filename>;
  readonly filesize: Maybe<MediaFields_Sizes_Thumbnail_Filesize>;
  readonly height: Maybe<MediaFields_Sizes_Thumbnail_Height>;
  readonly mimeType: Maybe<MediaFields_Sizes_Thumbnail_MimeType>;
  readonly url: Maybe<MediaFields_Sizes_Thumbnail_Url>;
  readonly width: Maybe<MediaFields_Sizes_Thumbnail_Width>;
};

export type MediaFields_Sizes_Thumbnail_Read = {
  readonly __typename?: 'MediaFields_sizes_thumbnail_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Update = {
  readonly __typename?: 'MediaFields_sizes_thumbnail_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Filename = {
  readonly __typename?: 'MediaFields_sizes_thumbnail_filename';
  readonly create: Maybe<MediaFields_Sizes_Thumbnail_Filename_Create>;
  readonly delete: Maybe<MediaFields_Sizes_Thumbnail_Filename_Delete>;
  readonly read: Maybe<MediaFields_Sizes_Thumbnail_Filename_Read>;
  readonly update: Maybe<MediaFields_Sizes_Thumbnail_Filename_Update>;
};

export type MediaFields_Sizes_Thumbnail_Filename_Create = {
  readonly __typename?: 'MediaFields_sizes_thumbnail_filename_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Filename_Delete = {
  readonly __typename?: 'MediaFields_sizes_thumbnail_filename_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Filename_Read = {
  readonly __typename?: 'MediaFields_sizes_thumbnail_filename_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Filename_Update = {
  readonly __typename?: 'MediaFields_sizes_thumbnail_filename_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Filesize = {
  readonly __typename?: 'MediaFields_sizes_thumbnail_filesize';
  readonly create: Maybe<MediaFields_Sizes_Thumbnail_Filesize_Create>;
  readonly delete: Maybe<MediaFields_Sizes_Thumbnail_Filesize_Delete>;
  readonly read: Maybe<MediaFields_Sizes_Thumbnail_Filesize_Read>;
  readonly update: Maybe<MediaFields_Sizes_Thumbnail_Filesize_Update>;
};

export type MediaFields_Sizes_Thumbnail_Filesize_Create = {
  readonly __typename?: 'MediaFields_sizes_thumbnail_filesize_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Filesize_Delete = {
  readonly __typename?: 'MediaFields_sizes_thumbnail_filesize_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Filesize_Read = {
  readonly __typename?: 'MediaFields_sizes_thumbnail_filesize_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Filesize_Update = {
  readonly __typename?: 'MediaFields_sizes_thumbnail_filesize_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Height = {
  readonly __typename?: 'MediaFields_sizes_thumbnail_height';
  readonly create: Maybe<MediaFields_Sizes_Thumbnail_Height_Create>;
  readonly delete: Maybe<MediaFields_Sizes_Thumbnail_Height_Delete>;
  readonly read: Maybe<MediaFields_Sizes_Thumbnail_Height_Read>;
  readonly update: Maybe<MediaFields_Sizes_Thumbnail_Height_Update>;
};

export type MediaFields_Sizes_Thumbnail_Height_Create = {
  readonly __typename?: 'MediaFields_sizes_thumbnail_height_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Height_Delete = {
  readonly __typename?: 'MediaFields_sizes_thumbnail_height_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Height_Read = {
  readonly __typename?: 'MediaFields_sizes_thumbnail_height_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Height_Update = {
  readonly __typename?: 'MediaFields_sizes_thumbnail_height_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_MimeType = {
  readonly __typename?: 'MediaFields_sizes_thumbnail_mimeType';
  readonly create: Maybe<MediaFields_Sizes_Thumbnail_MimeType_Create>;
  readonly delete: Maybe<MediaFields_Sizes_Thumbnail_MimeType_Delete>;
  readonly read: Maybe<MediaFields_Sizes_Thumbnail_MimeType_Read>;
  readonly update: Maybe<MediaFields_Sizes_Thumbnail_MimeType_Update>;
};

export type MediaFields_Sizes_Thumbnail_MimeType_Create = {
  readonly __typename?: 'MediaFields_sizes_thumbnail_mimeType_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_MimeType_Delete = {
  readonly __typename?: 'MediaFields_sizes_thumbnail_mimeType_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_MimeType_Read = {
  readonly __typename?: 'MediaFields_sizes_thumbnail_mimeType_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_MimeType_Update = {
  readonly __typename?: 'MediaFields_sizes_thumbnail_mimeType_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Url = {
  readonly __typename?: 'MediaFields_sizes_thumbnail_url';
  readonly create: Maybe<MediaFields_Sizes_Thumbnail_Url_Create>;
  readonly delete: Maybe<MediaFields_Sizes_Thumbnail_Url_Delete>;
  readonly read: Maybe<MediaFields_Sizes_Thumbnail_Url_Read>;
  readonly update: Maybe<MediaFields_Sizes_Thumbnail_Url_Update>;
};

export type MediaFields_Sizes_Thumbnail_Url_Create = {
  readonly __typename?: 'MediaFields_sizes_thumbnail_url_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Url_Delete = {
  readonly __typename?: 'MediaFields_sizes_thumbnail_url_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Url_Read = {
  readonly __typename?: 'MediaFields_sizes_thumbnail_url_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Url_Update = {
  readonly __typename?: 'MediaFields_sizes_thumbnail_url_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Width = {
  readonly __typename?: 'MediaFields_sizes_thumbnail_width';
  readonly create: Maybe<MediaFields_Sizes_Thumbnail_Width_Create>;
  readonly delete: Maybe<MediaFields_Sizes_Thumbnail_Width_Delete>;
  readonly read: Maybe<MediaFields_Sizes_Thumbnail_Width_Read>;
  readonly update: Maybe<MediaFields_Sizes_Thumbnail_Width_Update>;
};

export type MediaFields_Sizes_Thumbnail_Width_Create = {
  readonly __typename?: 'MediaFields_sizes_thumbnail_width_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Width_Delete = {
  readonly __typename?: 'MediaFields_sizes_thumbnail_width_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Width_Read = {
  readonly __typename?: 'MediaFields_sizes_thumbnail_width_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Width_Update = {
  readonly __typename?: 'MediaFields_sizes_thumbnail_width_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Xlarge = {
  readonly __typename?: 'MediaFields_sizes_xlarge';
  readonly create: Maybe<MediaFields_Sizes_Xlarge_Create>;
  readonly delete: Maybe<MediaFields_Sizes_Xlarge_Delete>;
  readonly fields: Maybe<MediaFields_Sizes_Xlarge_Fields>;
  readonly read: Maybe<MediaFields_Sizes_Xlarge_Read>;
  readonly update: Maybe<MediaFields_Sizes_Xlarge_Update>;
};

export type MediaFields_Sizes_Xlarge_Create = {
  readonly __typename?: 'MediaFields_sizes_xlarge_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Xlarge_Delete = {
  readonly __typename?: 'MediaFields_sizes_xlarge_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Xlarge_Fields = {
  readonly __typename?: 'MediaFields_sizes_xlarge_Fields';
  readonly filename: Maybe<MediaFields_Sizes_Xlarge_Filename>;
  readonly filesize: Maybe<MediaFields_Sizes_Xlarge_Filesize>;
  readonly height: Maybe<MediaFields_Sizes_Xlarge_Height>;
  readonly mimeType: Maybe<MediaFields_Sizes_Xlarge_MimeType>;
  readonly url: Maybe<MediaFields_Sizes_Xlarge_Url>;
  readonly width: Maybe<MediaFields_Sizes_Xlarge_Width>;
};

export type MediaFields_Sizes_Xlarge_Read = {
  readonly __typename?: 'MediaFields_sizes_xlarge_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Xlarge_Update = {
  readonly __typename?: 'MediaFields_sizes_xlarge_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Xlarge_Filename = {
  readonly __typename?: 'MediaFields_sizes_xlarge_filename';
  readonly create: Maybe<MediaFields_Sizes_Xlarge_Filename_Create>;
  readonly delete: Maybe<MediaFields_Sizes_Xlarge_Filename_Delete>;
  readonly read: Maybe<MediaFields_Sizes_Xlarge_Filename_Read>;
  readonly update: Maybe<MediaFields_Sizes_Xlarge_Filename_Update>;
};

export type MediaFields_Sizes_Xlarge_Filename_Create = {
  readonly __typename?: 'MediaFields_sizes_xlarge_filename_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Xlarge_Filename_Delete = {
  readonly __typename?: 'MediaFields_sizes_xlarge_filename_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Xlarge_Filename_Read = {
  readonly __typename?: 'MediaFields_sizes_xlarge_filename_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Xlarge_Filename_Update = {
  readonly __typename?: 'MediaFields_sizes_xlarge_filename_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Xlarge_Filesize = {
  readonly __typename?: 'MediaFields_sizes_xlarge_filesize';
  readonly create: Maybe<MediaFields_Sizes_Xlarge_Filesize_Create>;
  readonly delete: Maybe<MediaFields_Sizes_Xlarge_Filesize_Delete>;
  readonly read: Maybe<MediaFields_Sizes_Xlarge_Filesize_Read>;
  readonly update: Maybe<MediaFields_Sizes_Xlarge_Filesize_Update>;
};

export type MediaFields_Sizes_Xlarge_Filesize_Create = {
  readonly __typename?: 'MediaFields_sizes_xlarge_filesize_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Xlarge_Filesize_Delete = {
  readonly __typename?: 'MediaFields_sizes_xlarge_filesize_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Xlarge_Filesize_Read = {
  readonly __typename?: 'MediaFields_sizes_xlarge_filesize_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Xlarge_Filesize_Update = {
  readonly __typename?: 'MediaFields_sizes_xlarge_filesize_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Xlarge_Height = {
  readonly __typename?: 'MediaFields_sizes_xlarge_height';
  readonly create: Maybe<MediaFields_Sizes_Xlarge_Height_Create>;
  readonly delete: Maybe<MediaFields_Sizes_Xlarge_Height_Delete>;
  readonly read: Maybe<MediaFields_Sizes_Xlarge_Height_Read>;
  readonly update: Maybe<MediaFields_Sizes_Xlarge_Height_Update>;
};

export type MediaFields_Sizes_Xlarge_Height_Create = {
  readonly __typename?: 'MediaFields_sizes_xlarge_height_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Xlarge_Height_Delete = {
  readonly __typename?: 'MediaFields_sizes_xlarge_height_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Xlarge_Height_Read = {
  readonly __typename?: 'MediaFields_sizes_xlarge_height_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Xlarge_Height_Update = {
  readonly __typename?: 'MediaFields_sizes_xlarge_height_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Xlarge_MimeType = {
  readonly __typename?: 'MediaFields_sizes_xlarge_mimeType';
  readonly create: Maybe<MediaFields_Sizes_Xlarge_MimeType_Create>;
  readonly delete: Maybe<MediaFields_Sizes_Xlarge_MimeType_Delete>;
  readonly read: Maybe<MediaFields_Sizes_Xlarge_MimeType_Read>;
  readonly update: Maybe<MediaFields_Sizes_Xlarge_MimeType_Update>;
};

export type MediaFields_Sizes_Xlarge_MimeType_Create = {
  readonly __typename?: 'MediaFields_sizes_xlarge_mimeType_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Xlarge_MimeType_Delete = {
  readonly __typename?: 'MediaFields_sizes_xlarge_mimeType_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Xlarge_MimeType_Read = {
  readonly __typename?: 'MediaFields_sizes_xlarge_mimeType_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Xlarge_MimeType_Update = {
  readonly __typename?: 'MediaFields_sizes_xlarge_mimeType_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Xlarge_Url = {
  readonly __typename?: 'MediaFields_sizes_xlarge_url';
  readonly create: Maybe<MediaFields_Sizes_Xlarge_Url_Create>;
  readonly delete: Maybe<MediaFields_Sizes_Xlarge_Url_Delete>;
  readonly read: Maybe<MediaFields_Sizes_Xlarge_Url_Read>;
  readonly update: Maybe<MediaFields_Sizes_Xlarge_Url_Update>;
};

export type MediaFields_Sizes_Xlarge_Url_Create = {
  readonly __typename?: 'MediaFields_sizes_xlarge_url_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Xlarge_Url_Delete = {
  readonly __typename?: 'MediaFields_sizes_xlarge_url_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Xlarge_Url_Read = {
  readonly __typename?: 'MediaFields_sizes_xlarge_url_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Xlarge_Url_Update = {
  readonly __typename?: 'MediaFields_sizes_xlarge_url_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Xlarge_Width = {
  readonly __typename?: 'MediaFields_sizes_xlarge_width';
  readonly create: Maybe<MediaFields_Sizes_Xlarge_Width_Create>;
  readonly delete: Maybe<MediaFields_Sizes_Xlarge_Width_Delete>;
  readonly read: Maybe<MediaFields_Sizes_Xlarge_Width_Read>;
  readonly update: Maybe<MediaFields_Sizes_Xlarge_Width_Update>;
};

export type MediaFields_Sizes_Xlarge_Width_Create = {
  readonly __typename?: 'MediaFields_sizes_xlarge_width_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Xlarge_Width_Delete = {
  readonly __typename?: 'MediaFields_sizes_xlarge_width_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Xlarge_Width_Read = {
  readonly __typename?: 'MediaFields_sizes_xlarge_width_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Xlarge_Width_Update = {
  readonly __typename?: 'MediaFields_sizes_xlarge_width_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_ThumbnailUrl = {
  readonly __typename?: 'MediaFields_thumbnailURL';
  readonly create: Maybe<MediaFields_ThumbnailUrl_Create>;
  readonly delete: Maybe<MediaFields_ThumbnailUrl_Delete>;
  readonly read: Maybe<MediaFields_ThumbnailUrl_Read>;
  readonly update: Maybe<MediaFields_ThumbnailUrl_Update>;
};

export type MediaFields_ThumbnailUrl_Create = {
  readonly __typename?: 'MediaFields_thumbnailURL_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_ThumbnailUrl_Delete = {
  readonly __typename?: 'MediaFields_thumbnailURL_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_ThumbnailUrl_Read = {
  readonly __typename?: 'MediaFields_thumbnailURL_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_ThumbnailUrl_Update = {
  readonly __typename?: 'MediaFields_thumbnailURL_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_UpdatedAt = {
  readonly __typename?: 'MediaFields_updatedAt';
  readonly create: Maybe<MediaFields_UpdatedAt_Create>;
  readonly delete: Maybe<MediaFields_UpdatedAt_Delete>;
  readonly read: Maybe<MediaFields_UpdatedAt_Read>;
  readonly update: Maybe<MediaFields_UpdatedAt_Update>;
};

export type MediaFields_UpdatedAt_Create = {
  readonly __typename?: 'MediaFields_updatedAt_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_UpdatedAt_Delete = {
  readonly __typename?: 'MediaFields_updatedAt_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_UpdatedAt_Read = {
  readonly __typename?: 'MediaFields_updatedAt_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_UpdatedAt_Update = {
  readonly __typename?: 'MediaFields_updatedAt_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Url = {
  readonly __typename?: 'MediaFields_url';
  readonly create: Maybe<MediaFields_Url_Create>;
  readonly delete: Maybe<MediaFields_Url_Delete>;
  readonly read: Maybe<MediaFields_Url_Read>;
  readonly update: Maybe<MediaFields_Url_Update>;
};

export type MediaFields_Url_Create = {
  readonly __typename?: 'MediaFields_url_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Url_Delete = {
  readonly __typename?: 'MediaFields_url_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Url_Read = {
  readonly __typename?: 'MediaFields_url_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Url_Update = {
  readonly __typename?: 'MediaFields_url_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Width = {
  readonly __typename?: 'MediaFields_width';
  readonly create: Maybe<MediaFields_Width_Create>;
  readonly delete: Maybe<MediaFields_Width_Delete>;
  readonly read: Maybe<MediaFields_Width_Read>;
  readonly update: Maybe<MediaFields_Width_Update>;
};

export type MediaFields_Width_Create = {
  readonly __typename?: 'MediaFields_width_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Width_Delete = {
  readonly __typename?: 'MediaFields_width_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Width_Read = {
  readonly __typename?: 'MediaFields_width_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaFields_Width_Update = {
  readonly __typename?: 'MediaFields_width_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type MediaReadAccess = {
  readonly __typename?: 'MediaReadAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where: Maybe<Scalars['JSONObject']['output']>;
};

export type MediaReadDocAccess = {
  readonly __typename?: 'MediaReadDocAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where: Maybe<Scalars['JSONObject']['output']>;
};

export type MediaUpdateAccess = {
  readonly __typename?: 'MediaUpdateAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where: Maybe<Scalars['JSONObject']['output']>;
};

export type MediaUpdateDocAccess = {
  readonly __typename?: 'MediaUpdateDocAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where: Maybe<Scalars['JSONObject']['output']>;
};

export type Media_Sizes = {
  readonly __typename?: 'Media_Sizes';
  readonly large: Maybe<Media_Sizes_Large>;
  readonly medium: Maybe<Media_Sizes_Medium>;
  readonly og: Maybe<Media_Sizes_Og>;
  readonly small: Maybe<Media_Sizes_Small>;
  readonly square: Maybe<Media_Sizes_Square>;
  readonly thumbnail: Maybe<Media_Sizes_Thumbnail>;
  readonly xlarge: Maybe<Media_Sizes_Xlarge>;
};

export type Media_Sizes_Large = {
  readonly __typename?: 'Media_Sizes_Large';
  readonly filename: Maybe<Scalars['String']['output']>;
  readonly filesize: Maybe<Scalars['Float']['output']>;
  readonly height: Maybe<Scalars['Float']['output']>;
  readonly mimeType: Maybe<Scalars['String']['output']>;
  readonly url: Maybe<Scalars['String']['output']>;
  readonly width: Maybe<Scalars['Float']['output']>;
};

export type Media_Sizes_Medium = {
  readonly __typename?: 'Media_Sizes_Medium';
  readonly filename: Maybe<Scalars['String']['output']>;
  readonly filesize: Maybe<Scalars['Float']['output']>;
  readonly height: Maybe<Scalars['Float']['output']>;
  readonly mimeType: Maybe<Scalars['String']['output']>;
  readonly url: Maybe<Scalars['String']['output']>;
  readonly width: Maybe<Scalars['Float']['output']>;
};

export type Media_Sizes_Og = {
  readonly __typename?: 'Media_Sizes_Og';
  readonly filename: Maybe<Scalars['String']['output']>;
  readonly filesize: Maybe<Scalars['Float']['output']>;
  readonly height: Maybe<Scalars['Float']['output']>;
  readonly mimeType: Maybe<Scalars['String']['output']>;
  readonly url: Maybe<Scalars['String']['output']>;
  readonly width: Maybe<Scalars['Float']['output']>;
};

export type Media_Sizes_Small = {
  readonly __typename?: 'Media_Sizes_Small';
  readonly filename: Maybe<Scalars['String']['output']>;
  readonly filesize: Maybe<Scalars['Float']['output']>;
  readonly height: Maybe<Scalars['Float']['output']>;
  readonly mimeType: Maybe<Scalars['String']['output']>;
  readonly url: Maybe<Scalars['String']['output']>;
  readonly width: Maybe<Scalars['Float']['output']>;
};

export type Media_Sizes_Square = {
  readonly __typename?: 'Media_Sizes_Square';
  readonly filename: Maybe<Scalars['String']['output']>;
  readonly filesize: Maybe<Scalars['Float']['output']>;
  readonly height: Maybe<Scalars['Float']['output']>;
  readonly mimeType: Maybe<Scalars['String']['output']>;
  readonly url: Maybe<Scalars['String']['output']>;
  readonly width: Maybe<Scalars['Float']['output']>;
};

export type Media_Sizes_Thumbnail = {
  readonly __typename?: 'Media_Sizes_Thumbnail';
  readonly filename: Maybe<Scalars['String']['output']>;
  readonly filesize: Maybe<Scalars['Float']['output']>;
  readonly height: Maybe<Scalars['Float']['output']>;
  readonly mimeType: Maybe<Scalars['String']['output']>;
  readonly url: Maybe<Scalars['String']['output']>;
  readonly width: Maybe<Scalars['Float']['output']>;
};

export type Media_Sizes_Xlarge = {
  readonly __typename?: 'Media_Sizes_Xlarge';
  readonly filename: Maybe<Scalars['String']['output']>;
  readonly filesize: Maybe<Scalars['Float']['output']>;
  readonly height: Maybe<Scalars['Float']['output']>;
  readonly mimeType: Maybe<Scalars['String']['output']>;
  readonly url: Maybe<Scalars['String']['output']>;
  readonly width: Maybe<Scalars['Float']['output']>;
};

export type Media_Alt_Operator = {
  readonly all: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly contains: InputMaybe<Scalars['String']['input']>;
  readonly equals: InputMaybe<Scalars['String']['input']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly like: InputMaybe<Scalars['String']['input']>;
  readonly not_equals: InputMaybe<Scalars['String']['input']>;
  readonly not_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Caption_Operator = {
  readonly contains: InputMaybe<Scalars['JSON']['input']>;
  readonly equals: InputMaybe<Scalars['JSON']['input']>;
  readonly exists: InputMaybe<Scalars['Boolean']['input']>;
  readonly like: InputMaybe<Scalars['JSON']['input']>;
  readonly not_equals: InputMaybe<Scalars['JSON']['input']>;
};

export type Media_CreatedAt_Operator = {
  readonly equals: InputMaybe<Scalars['DateTime']['input']>;
  readonly exists: InputMaybe<Scalars['Boolean']['input']>;
  readonly greater_than: InputMaybe<Scalars['DateTime']['input']>;
  readonly greater_than_equal: InputMaybe<Scalars['DateTime']['input']>;
  readonly less_than: InputMaybe<Scalars['DateTime']['input']>;
  readonly less_than_equal: InputMaybe<Scalars['DateTime']['input']>;
  readonly like: InputMaybe<Scalars['DateTime']['input']>;
  readonly not_equals: InputMaybe<Scalars['DateTime']['input']>;
};

export type Media_Filename_Operator = {
  readonly all: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly contains: InputMaybe<Scalars['String']['input']>;
  readonly equals: InputMaybe<Scalars['String']['input']>;
  readonly exists: InputMaybe<Scalars['Boolean']['input']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly like: InputMaybe<Scalars['String']['input']>;
  readonly not_equals: InputMaybe<Scalars['String']['input']>;
  readonly not_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Filesize_Operator = {
  readonly equals: InputMaybe<Scalars['Float']['input']>;
  readonly exists: InputMaybe<Scalars['Boolean']['input']>;
  readonly greater_than: InputMaybe<Scalars['Float']['input']>;
  readonly greater_than_equal: InputMaybe<Scalars['Float']['input']>;
  readonly less_than: InputMaybe<Scalars['Float']['input']>;
  readonly less_than_equal: InputMaybe<Scalars['Float']['input']>;
  readonly not_equals: InputMaybe<Scalars['Float']['input']>;
};

export type Media_FocalX_Operator = {
  readonly equals: InputMaybe<Scalars['Float']['input']>;
  readonly exists: InputMaybe<Scalars['Boolean']['input']>;
  readonly greater_than: InputMaybe<Scalars['Float']['input']>;
  readonly greater_than_equal: InputMaybe<Scalars['Float']['input']>;
  readonly less_than: InputMaybe<Scalars['Float']['input']>;
  readonly less_than_equal: InputMaybe<Scalars['Float']['input']>;
  readonly not_equals: InputMaybe<Scalars['Float']['input']>;
};

export type Media_FocalY_Operator = {
  readonly equals: InputMaybe<Scalars['Float']['input']>;
  readonly exists: InputMaybe<Scalars['Boolean']['input']>;
  readonly greater_than: InputMaybe<Scalars['Float']['input']>;
  readonly greater_than_equal: InputMaybe<Scalars['Float']['input']>;
  readonly less_than: InputMaybe<Scalars['Float']['input']>;
  readonly less_than_equal: InputMaybe<Scalars['Float']['input']>;
  readonly not_equals: InputMaybe<Scalars['Float']['input']>;
};

export type Media_Height_Operator = {
  readonly equals: InputMaybe<Scalars['Float']['input']>;
  readonly exists: InputMaybe<Scalars['Boolean']['input']>;
  readonly greater_than: InputMaybe<Scalars['Float']['input']>;
  readonly greater_than_equal: InputMaybe<Scalars['Float']['input']>;
  readonly less_than: InputMaybe<Scalars['Float']['input']>;
  readonly less_than_equal: InputMaybe<Scalars['Float']['input']>;
  readonly not_equals: InputMaybe<Scalars['Float']['input']>;
};

export type Media_Id_Operator = {
  readonly equals: InputMaybe<Scalars['Int']['input']>;
  readonly exists: InputMaybe<Scalars['Boolean']['input']>;
  readonly greater_than: InputMaybe<Scalars['Int']['input']>;
  readonly greater_than_equal: InputMaybe<Scalars['Int']['input']>;
  readonly less_than: InputMaybe<Scalars['Int']['input']>;
  readonly less_than_equal: InputMaybe<Scalars['Int']['input']>;
  readonly not_equals: InputMaybe<Scalars['Int']['input']>;
};

export type Media_MimeType_Operator = {
  readonly all: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly contains: InputMaybe<Scalars['String']['input']>;
  readonly equals: InputMaybe<Scalars['String']['input']>;
  readonly exists: InputMaybe<Scalars['Boolean']['input']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly like: InputMaybe<Scalars['String']['input']>;
  readonly not_equals: InputMaybe<Scalars['String']['input']>;
  readonly not_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Sizes__Large__Filename_Operator = {
  readonly all: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly contains: InputMaybe<Scalars['String']['input']>;
  readonly equals: InputMaybe<Scalars['String']['input']>;
  readonly exists: InputMaybe<Scalars['Boolean']['input']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly like: InputMaybe<Scalars['String']['input']>;
  readonly not_equals: InputMaybe<Scalars['String']['input']>;
  readonly not_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Sizes__Large__Filesize_Operator = {
  readonly equals: InputMaybe<Scalars['Float']['input']>;
  readonly exists: InputMaybe<Scalars['Boolean']['input']>;
  readonly greater_than: InputMaybe<Scalars['Float']['input']>;
  readonly greater_than_equal: InputMaybe<Scalars['Float']['input']>;
  readonly less_than: InputMaybe<Scalars['Float']['input']>;
  readonly less_than_equal: InputMaybe<Scalars['Float']['input']>;
  readonly not_equals: InputMaybe<Scalars['Float']['input']>;
};

export type Media_Sizes__Large__Height_Operator = {
  readonly equals: InputMaybe<Scalars['Float']['input']>;
  readonly exists: InputMaybe<Scalars['Boolean']['input']>;
  readonly greater_than: InputMaybe<Scalars['Float']['input']>;
  readonly greater_than_equal: InputMaybe<Scalars['Float']['input']>;
  readonly less_than: InputMaybe<Scalars['Float']['input']>;
  readonly less_than_equal: InputMaybe<Scalars['Float']['input']>;
  readonly not_equals: InputMaybe<Scalars['Float']['input']>;
};

export type Media_Sizes__Large__MimeType_Operator = {
  readonly all: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly contains: InputMaybe<Scalars['String']['input']>;
  readonly equals: InputMaybe<Scalars['String']['input']>;
  readonly exists: InputMaybe<Scalars['Boolean']['input']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly like: InputMaybe<Scalars['String']['input']>;
  readonly not_equals: InputMaybe<Scalars['String']['input']>;
  readonly not_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Sizes__Large__Url_Operator = {
  readonly all: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly contains: InputMaybe<Scalars['String']['input']>;
  readonly equals: InputMaybe<Scalars['String']['input']>;
  readonly exists: InputMaybe<Scalars['Boolean']['input']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly like: InputMaybe<Scalars['String']['input']>;
  readonly not_equals: InputMaybe<Scalars['String']['input']>;
  readonly not_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Sizes__Large__Width_Operator = {
  readonly equals: InputMaybe<Scalars['Float']['input']>;
  readonly exists: InputMaybe<Scalars['Boolean']['input']>;
  readonly greater_than: InputMaybe<Scalars['Float']['input']>;
  readonly greater_than_equal: InputMaybe<Scalars['Float']['input']>;
  readonly less_than: InputMaybe<Scalars['Float']['input']>;
  readonly less_than_equal: InputMaybe<Scalars['Float']['input']>;
  readonly not_equals: InputMaybe<Scalars['Float']['input']>;
};

export type Media_Sizes__Medium__Filename_Operator = {
  readonly all: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly contains: InputMaybe<Scalars['String']['input']>;
  readonly equals: InputMaybe<Scalars['String']['input']>;
  readonly exists: InputMaybe<Scalars['Boolean']['input']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly like: InputMaybe<Scalars['String']['input']>;
  readonly not_equals: InputMaybe<Scalars['String']['input']>;
  readonly not_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Sizes__Medium__Filesize_Operator = {
  readonly equals: InputMaybe<Scalars['Float']['input']>;
  readonly exists: InputMaybe<Scalars['Boolean']['input']>;
  readonly greater_than: InputMaybe<Scalars['Float']['input']>;
  readonly greater_than_equal: InputMaybe<Scalars['Float']['input']>;
  readonly less_than: InputMaybe<Scalars['Float']['input']>;
  readonly less_than_equal: InputMaybe<Scalars['Float']['input']>;
  readonly not_equals: InputMaybe<Scalars['Float']['input']>;
};

export type Media_Sizes__Medium__Height_Operator = {
  readonly equals: InputMaybe<Scalars['Float']['input']>;
  readonly exists: InputMaybe<Scalars['Boolean']['input']>;
  readonly greater_than: InputMaybe<Scalars['Float']['input']>;
  readonly greater_than_equal: InputMaybe<Scalars['Float']['input']>;
  readonly less_than: InputMaybe<Scalars['Float']['input']>;
  readonly less_than_equal: InputMaybe<Scalars['Float']['input']>;
  readonly not_equals: InputMaybe<Scalars['Float']['input']>;
};

export type Media_Sizes__Medium__MimeType_Operator = {
  readonly all: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly contains: InputMaybe<Scalars['String']['input']>;
  readonly equals: InputMaybe<Scalars['String']['input']>;
  readonly exists: InputMaybe<Scalars['Boolean']['input']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly like: InputMaybe<Scalars['String']['input']>;
  readonly not_equals: InputMaybe<Scalars['String']['input']>;
  readonly not_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Sizes__Medium__Url_Operator = {
  readonly all: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly contains: InputMaybe<Scalars['String']['input']>;
  readonly equals: InputMaybe<Scalars['String']['input']>;
  readonly exists: InputMaybe<Scalars['Boolean']['input']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly like: InputMaybe<Scalars['String']['input']>;
  readonly not_equals: InputMaybe<Scalars['String']['input']>;
  readonly not_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Sizes__Medium__Width_Operator = {
  readonly equals: InputMaybe<Scalars['Float']['input']>;
  readonly exists: InputMaybe<Scalars['Boolean']['input']>;
  readonly greater_than: InputMaybe<Scalars['Float']['input']>;
  readonly greater_than_equal: InputMaybe<Scalars['Float']['input']>;
  readonly less_than: InputMaybe<Scalars['Float']['input']>;
  readonly less_than_equal: InputMaybe<Scalars['Float']['input']>;
  readonly not_equals: InputMaybe<Scalars['Float']['input']>;
};

export type Media_Sizes__Og__Filename_Operator = {
  readonly all: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly contains: InputMaybe<Scalars['String']['input']>;
  readonly equals: InputMaybe<Scalars['String']['input']>;
  readonly exists: InputMaybe<Scalars['Boolean']['input']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly like: InputMaybe<Scalars['String']['input']>;
  readonly not_equals: InputMaybe<Scalars['String']['input']>;
  readonly not_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Sizes__Og__Filesize_Operator = {
  readonly equals: InputMaybe<Scalars['Float']['input']>;
  readonly exists: InputMaybe<Scalars['Boolean']['input']>;
  readonly greater_than: InputMaybe<Scalars['Float']['input']>;
  readonly greater_than_equal: InputMaybe<Scalars['Float']['input']>;
  readonly less_than: InputMaybe<Scalars['Float']['input']>;
  readonly less_than_equal: InputMaybe<Scalars['Float']['input']>;
  readonly not_equals: InputMaybe<Scalars['Float']['input']>;
};

export type Media_Sizes__Og__Height_Operator = {
  readonly equals: InputMaybe<Scalars['Float']['input']>;
  readonly exists: InputMaybe<Scalars['Boolean']['input']>;
  readonly greater_than: InputMaybe<Scalars['Float']['input']>;
  readonly greater_than_equal: InputMaybe<Scalars['Float']['input']>;
  readonly less_than: InputMaybe<Scalars['Float']['input']>;
  readonly less_than_equal: InputMaybe<Scalars['Float']['input']>;
  readonly not_equals: InputMaybe<Scalars['Float']['input']>;
};

export type Media_Sizes__Og__MimeType_Operator = {
  readonly all: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly contains: InputMaybe<Scalars['String']['input']>;
  readonly equals: InputMaybe<Scalars['String']['input']>;
  readonly exists: InputMaybe<Scalars['Boolean']['input']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly like: InputMaybe<Scalars['String']['input']>;
  readonly not_equals: InputMaybe<Scalars['String']['input']>;
  readonly not_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Sizes__Og__Url_Operator = {
  readonly all: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly contains: InputMaybe<Scalars['String']['input']>;
  readonly equals: InputMaybe<Scalars['String']['input']>;
  readonly exists: InputMaybe<Scalars['Boolean']['input']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly like: InputMaybe<Scalars['String']['input']>;
  readonly not_equals: InputMaybe<Scalars['String']['input']>;
  readonly not_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Sizes__Og__Width_Operator = {
  readonly equals: InputMaybe<Scalars['Float']['input']>;
  readonly exists: InputMaybe<Scalars['Boolean']['input']>;
  readonly greater_than: InputMaybe<Scalars['Float']['input']>;
  readonly greater_than_equal: InputMaybe<Scalars['Float']['input']>;
  readonly less_than: InputMaybe<Scalars['Float']['input']>;
  readonly less_than_equal: InputMaybe<Scalars['Float']['input']>;
  readonly not_equals: InputMaybe<Scalars['Float']['input']>;
};

export type Media_Sizes__Small__Filename_Operator = {
  readonly all: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly contains: InputMaybe<Scalars['String']['input']>;
  readonly equals: InputMaybe<Scalars['String']['input']>;
  readonly exists: InputMaybe<Scalars['Boolean']['input']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly like: InputMaybe<Scalars['String']['input']>;
  readonly not_equals: InputMaybe<Scalars['String']['input']>;
  readonly not_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Sizes__Small__Filesize_Operator = {
  readonly equals: InputMaybe<Scalars['Float']['input']>;
  readonly exists: InputMaybe<Scalars['Boolean']['input']>;
  readonly greater_than: InputMaybe<Scalars['Float']['input']>;
  readonly greater_than_equal: InputMaybe<Scalars['Float']['input']>;
  readonly less_than: InputMaybe<Scalars['Float']['input']>;
  readonly less_than_equal: InputMaybe<Scalars['Float']['input']>;
  readonly not_equals: InputMaybe<Scalars['Float']['input']>;
};

export type Media_Sizes__Small__Height_Operator = {
  readonly equals: InputMaybe<Scalars['Float']['input']>;
  readonly exists: InputMaybe<Scalars['Boolean']['input']>;
  readonly greater_than: InputMaybe<Scalars['Float']['input']>;
  readonly greater_than_equal: InputMaybe<Scalars['Float']['input']>;
  readonly less_than: InputMaybe<Scalars['Float']['input']>;
  readonly less_than_equal: InputMaybe<Scalars['Float']['input']>;
  readonly not_equals: InputMaybe<Scalars['Float']['input']>;
};

export type Media_Sizes__Small__MimeType_Operator = {
  readonly all: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly contains: InputMaybe<Scalars['String']['input']>;
  readonly equals: InputMaybe<Scalars['String']['input']>;
  readonly exists: InputMaybe<Scalars['Boolean']['input']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly like: InputMaybe<Scalars['String']['input']>;
  readonly not_equals: InputMaybe<Scalars['String']['input']>;
  readonly not_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Sizes__Small__Url_Operator = {
  readonly all: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly contains: InputMaybe<Scalars['String']['input']>;
  readonly equals: InputMaybe<Scalars['String']['input']>;
  readonly exists: InputMaybe<Scalars['Boolean']['input']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly like: InputMaybe<Scalars['String']['input']>;
  readonly not_equals: InputMaybe<Scalars['String']['input']>;
  readonly not_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Sizes__Small__Width_Operator = {
  readonly equals: InputMaybe<Scalars['Float']['input']>;
  readonly exists: InputMaybe<Scalars['Boolean']['input']>;
  readonly greater_than: InputMaybe<Scalars['Float']['input']>;
  readonly greater_than_equal: InputMaybe<Scalars['Float']['input']>;
  readonly less_than: InputMaybe<Scalars['Float']['input']>;
  readonly less_than_equal: InputMaybe<Scalars['Float']['input']>;
  readonly not_equals: InputMaybe<Scalars['Float']['input']>;
};

export type Media_Sizes__Square__Filename_Operator = {
  readonly all: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly contains: InputMaybe<Scalars['String']['input']>;
  readonly equals: InputMaybe<Scalars['String']['input']>;
  readonly exists: InputMaybe<Scalars['Boolean']['input']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly like: InputMaybe<Scalars['String']['input']>;
  readonly not_equals: InputMaybe<Scalars['String']['input']>;
  readonly not_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Sizes__Square__Filesize_Operator = {
  readonly equals: InputMaybe<Scalars['Float']['input']>;
  readonly exists: InputMaybe<Scalars['Boolean']['input']>;
  readonly greater_than: InputMaybe<Scalars['Float']['input']>;
  readonly greater_than_equal: InputMaybe<Scalars['Float']['input']>;
  readonly less_than: InputMaybe<Scalars['Float']['input']>;
  readonly less_than_equal: InputMaybe<Scalars['Float']['input']>;
  readonly not_equals: InputMaybe<Scalars['Float']['input']>;
};

export type Media_Sizes__Square__Height_Operator = {
  readonly equals: InputMaybe<Scalars['Float']['input']>;
  readonly exists: InputMaybe<Scalars['Boolean']['input']>;
  readonly greater_than: InputMaybe<Scalars['Float']['input']>;
  readonly greater_than_equal: InputMaybe<Scalars['Float']['input']>;
  readonly less_than: InputMaybe<Scalars['Float']['input']>;
  readonly less_than_equal: InputMaybe<Scalars['Float']['input']>;
  readonly not_equals: InputMaybe<Scalars['Float']['input']>;
};

export type Media_Sizes__Square__MimeType_Operator = {
  readonly all: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly contains: InputMaybe<Scalars['String']['input']>;
  readonly equals: InputMaybe<Scalars['String']['input']>;
  readonly exists: InputMaybe<Scalars['Boolean']['input']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly like: InputMaybe<Scalars['String']['input']>;
  readonly not_equals: InputMaybe<Scalars['String']['input']>;
  readonly not_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Sizes__Square__Url_Operator = {
  readonly all: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly contains: InputMaybe<Scalars['String']['input']>;
  readonly equals: InputMaybe<Scalars['String']['input']>;
  readonly exists: InputMaybe<Scalars['Boolean']['input']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly like: InputMaybe<Scalars['String']['input']>;
  readonly not_equals: InputMaybe<Scalars['String']['input']>;
  readonly not_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Sizes__Square__Width_Operator = {
  readonly equals: InputMaybe<Scalars['Float']['input']>;
  readonly exists: InputMaybe<Scalars['Boolean']['input']>;
  readonly greater_than: InputMaybe<Scalars['Float']['input']>;
  readonly greater_than_equal: InputMaybe<Scalars['Float']['input']>;
  readonly less_than: InputMaybe<Scalars['Float']['input']>;
  readonly less_than_equal: InputMaybe<Scalars['Float']['input']>;
  readonly not_equals: InputMaybe<Scalars['Float']['input']>;
};

export type Media_Sizes__Thumbnail__Filename_Operator = {
  readonly all: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly contains: InputMaybe<Scalars['String']['input']>;
  readonly equals: InputMaybe<Scalars['String']['input']>;
  readonly exists: InputMaybe<Scalars['Boolean']['input']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly like: InputMaybe<Scalars['String']['input']>;
  readonly not_equals: InputMaybe<Scalars['String']['input']>;
  readonly not_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Sizes__Thumbnail__Filesize_Operator = {
  readonly equals: InputMaybe<Scalars['Float']['input']>;
  readonly exists: InputMaybe<Scalars['Boolean']['input']>;
  readonly greater_than: InputMaybe<Scalars['Float']['input']>;
  readonly greater_than_equal: InputMaybe<Scalars['Float']['input']>;
  readonly less_than: InputMaybe<Scalars['Float']['input']>;
  readonly less_than_equal: InputMaybe<Scalars['Float']['input']>;
  readonly not_equals: InputMaybe<Scalars['Float']['input']>;
};

export type Media_Sizes__Thumbnail__Height_Operator = {
  readonly equals: InputMaybe<Scalars['Float']['input']>;
  readonly exists: InputMaybe<Scalars['Boolean']['input']>;
  readonly greater_than: InputMaybe<Scalars['Float']['input']>;
  readonly greater_than_equal: InputMaybe<Scalars['Float']['input']>;
  readonly less_than: InputMaybe<Scalars['Float']['input']>;
  readonly less_than_equal: InputMaybe<Scalars['Float']['input']>;
  readonly not_equals: InputMaybe<Scalars['Float']['input']>;
};

export type Media_Sizes__Thumbnail__MimeType_Operator = {
  readonly all: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly contains: InputMaybe<Scalars['String']['input']>;
  readonly equals: InputMaybe<Scalars['String']['input']>;
  readonly exists: InputMaybe<Scalars['Boolean']['input']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly like: InputMaybe<Scalars['String']['input']>;
  readonly not_equals: InputMaybe<Scalars['String']['input']>;
  readonly not_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Sizes__Thumbnail__Url_Operator = {
  readonly all: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly contains: InputMaybe<Scalars['String']['input']>;
  readonly equals: InputMaybe<Scalars['String']['input']>;
  readonly exists: InputMaybe<Scalars['Boolean']['input']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly like: InputMaybe<Scalars['String']['input']>;
  readonly not_equals: InputMaybe<Scalars['String']['input']>;
  readonly not_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Sizes__Thumbnail__Width_Operator = {
  readonly equals: InputMaybe<Scalars['Float']['input']>;
  readonly exists: InputMaybe<Scalars['Boolean']['input']>;
  readonly greater_than: InputMaybe<Scalars['Float']['input']>;
  readonly greater_than_equal: InputMaybe<Scalars['Float']['input']>;
  readonly less_than: InputMaybe<Scalars['Float']['input']>;
  readonly less_than_equal: InputMaybe<Scalars['Float']['input']>;
  readonly not_equals: InputMaybe<Scalars['Float']['input']>;
};

export type Media_Sizes__Xlarge__Filename_Operator = {
  readonly all: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly contains: InputMaybe<Scalars['String']['input']>;
  readonly equals: InputMaybe<Scalars['String']['input']>;
  readonly exists: InputMaybe<Scalars['Boolean']['input']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly like: InputMaybe<Scalars['String']['input']>;
  readonly not_equals: InputMaybe<Scalars['String']['input']>;
  readonly not_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Sizes__Xlarge__Filesize_Operator = {
  readonly equals: InputMaybe<Scalars['Float']['input']>;
  readonly exists: InputMaybe<Scalars['Boolean']['input']>;
  readonly greater_than: InputMaybe<Scalars['Float']['input']>;
  readonly greater_than_equal: InputMaybe<Scalars['Float']['input']>;
  readonly less_than: InputMaybe<Scalars['Float']['input']>;
  readonly less_than_equal: InputMaybe<Scalars['Float']['input']>;
  readonly not_equals: InputMaybe<Scalars['Float']['input']>;
};

export type Media_Sizes__Xlarge__Height_Operator = {
  readonly equals: InputMaybe<Scalars['Float']['input']>;
  readonly exists: InputMaybe<Scalars['Boolean']['input']>;
  readonly greater_than: InputMaybe<Scalars['Float']['input']>;
  readonly greater_than_equal: InputMaybe<Scalars['Float']['input']>;
  readonly less_than: InputMaybe<Scalars['Float']['input']>;
  readonly less_than_equal: InputMaybe<Scalars['Float']['input']>;
  readonly not_equals: InputMaybe<Scalars['Float']['input']>;
};

export type Media_Sizes__Xlarge__MimeType_Operator = {
  readonly all: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly contains: InputMaybe<Scalars['String']['input']>;
  readonly equals: InputMaybe<Scalars['String']['input']>;
  readonly exists: InputMaybe<Scalars['Boolean']['input']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly like: InputMaybe<Scalars['String']['input']>;
  readonly not_equals: InputMaybe<Scalars['String']['input']>;
  readonly not_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Sizes__Xlarge__Url_Operator = {
  readonly all: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly contains: InputMaybe<Scalars['String']['input']>;
  readonly equals: InputMaybe<Scalars['String']['input']>;
  readonly exists: InputMaybe<Scalars['Boolean']['input']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly like: InputMaybe<Scalars['String']['input']>;
  readonly not_equals: InputMaybe<Scalars['String']['input']>;
  readonly not_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Sizes__Xlarge__Width_Operator = {
  readonly equals: InputMaybe<Scalars['Float']['input']>;
  readonly exists: InputMaybe<Scalars['Boolean']['input']>;
  readonly greater_than: InputMaybe<Scalars['Float']['input']>;
  readonly greater_than_equal: InputMaybe<Scalars['Float']['input']>;
  readonly less_than: InputMaybe<Scalars['Float']['input']>;
  readonly less_than_equal: InputMaybe<Scalars['Float']['input']>;
  readonly not_equals: InputMaybe<Scalars['Float']['input']>;
};

export type Media_ThumbnailUrl_Operator = {
  readonly all: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly contains: InputMaybe<Scalars['String']['input']>;
  readonly equals: InputMaybe<Scalars['String']['input']>;
  readonly exists: InputMaybe<Scalars['Boolean']['input']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly like: InputMaybe<Scalars['String']['input']>;
  readonly not_equals: InputMaybe<Scalars['String']['input']>;
  readonly not_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_UpdatedAt_Operator = {
  readonly equals: InputMaybe<Scalars['DateTime']['input']>;
  readonly exists: InputMaybe<Scalars['Boolean']['input']>;
  readonly greater_than: InputMaybe<Scalars['DateTime']['input']>;
  readonly greater_than_equal: InputMaybe<Scalars['DateTime']['input']>;
  readonly less_than: InputMaybe<Scalars['DateTime']['input']>;
  readonly less_than_equal: InputMaybe<Scalars['DateTime']['input']>;
  readonly like: InputMaybe<Scalars['DateTime']['input']>;
  readonly not_equals: InputMaybe<Scalars['DateTime']['input']>;
};

export type Media_Url_Operator = {
  readonly all: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly contains: InputMaybe<Scalars['String']['input']>;
  readonly equals: InputMaybe<Scalars['String']['input']>;
  readonly exists: InputMaybe<Scalars['Boolean']['input']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly like: InputMaybe<Scalars['String']['input']>;
  readonly not_equals: InputMaybe<Scalars['String']['input']>;
  readonly not_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Where = {
  readonly AND: InputMaybe<ReadonlyArray<InputMaybe<Media_Where_And>>>;
  readonly OR: InputMaybe<ReadonlyArray<InputMaybe<Media_Where_Or>>>;
  readonly alt: InputMaybe<Media_Alt_Operator>;
  readonly caption: InputMaybe<Media_Caption_Operator>;
  readonly createdAt: InputMaybe<Media_CreatedAt_Operator>;
  readonly filename: InputMaybe<Media_Filename_Operator>;
  readonly filesize: InputMaybe<Media_Filesize_Operator>;
  readonly focalX: InputMaybe<Media_FocalX_Operator>;
  readonly focalY: InputMaybe<Media_FocalY_Operator>;
  readonly height: InputMaybe<Media_Height_Operator>;
  readonly id: InputMaybe<Media_Id_Operator>;
  readonly mimeType: InputMaybe<Media_MimeType_Operator>;
  readonly sizes__large__filename: InputMaybe<Media_Sizes__Large__Filename_Operator>;
  readonly sizes__large__filesize: InputMaybe<Media_Sizes__Large__Filesize_Operator>;
  readonly sizes__large__height: InputMaybe<Media_Sizes__Large__Height_Operator>;
  readonly sizes__large__mimeType: InputMaybe<Media_Sizes__Large__MimeType_Operator>;
  readonly sizes__large__url: InputMaybe<Media_Sizes__Large__Url_Operator>;
  readonly sizes__large__width: InputMaybe<Media_Sizes__Large__Width_Operator>;
  readonly sizes__medium__filename: InputMaybe<Media_Sizes__Medium__Filename_Operator>;
  readonly sizes__medium__filesize: InputMaybe<Media_Sizes__Medium__Filesize_Operator>;
  readonly sizes__medium__height: InputMaybe<Media_Sizes__Medium__Height_Operator>;
  readonly sizes__medium__mimeType: InputMaybe<Media_Sizes__Medium__MimeType_Operator>;
  readonly sizes__medium__url: InputMaybe<Media_Sizes__Medium__Url_Operator>;
  readonly sizes__medium__width: InputMaybe<Media_Sizes__Medium__Width_Operator>;
  readonly sizes__og__filename: InputMaybe<Media_Sizes__Og__Filename_Operator>;
  readonly sizes__og__filesize: InputMaybe<Media_Sizes__Og__Filesize_Operator>;
  readonly sizes__og__height: InputMaybe<Media_Sizes__Og__Height_Operator>;
  readonly sizes__og__mimeType: InputMaybe<Media_Sizes__Og__MimeType_Operator>;
  readonly sizes__og__url: InputMaybe<Media_Sizes__Og__Url_Operator>;
  readonly sizes__og__width: InputMaybe<Media_Sizes__Og__Width_Operator>;
  readonly sizes__small__filename: InputMaybe<Media_Sizes__Small__Filename_Operator>;
  readonly sizes__small__filesize: InputMaybe<Media_Sizes__Small__Filesize_Operator>;
  readonly sizes__small__height: InputMaybe<Media_Sizes__Small__Height_Operator>;
  readonly sizes__small__mimeType: InputMaybe<Media_Sizes__Small__MimeType_Operator>;
  readonly sizes__small__url: InputMaybe<Media_Sizes__Small__Url_Operator>;
  readonly sizes__small__width: InputMaybe<Media_Sizes__Small__Width_Operator>;
  readonly sizes__square__filename: InputMaybe<Media_Sizes__Square__Filename_Operator>;
  readonly sizes__square__filesize: InputMaybe<Media_Sizes__Square__Filesize_Operator>;
  readonly sizes__square__height: InputMaybe<Media_Sizes__Square__Height_Operator>;
  readonly sizes__square__mimeType: InputMaybe<Media_Sizes__Square__MimeType_Operator>;
  readonly sizes__square__url: InputMaybe<Media_Sizes__Square__Url_Operator>;
  readonly sizes__square__width: InputMaybe<Media_Sizes__Square__Width_Operator>;
  readonly sizes__thumbnail__filename: InputMaybe<Media_Sizes__Thumbnail__Filename_Operator>;
  readonly sizes__thumbnail__filesize: InputMaybe<Media_Sizes__Thumbnail__Filesize_Operator>;
  readonly sizes__thumbnail__height: InputMaybe<Media_Sizes__Thumbnail__Height_Operator>;
  readonly sizes__thumbnail__mimeType: InputMaybe<Media_Sizes__Thumbnail__MimeType_Operator>;
  readonly sizes__thumbnail__url: InputMaybe<Media_Sizes__Thumbnail__Url_Operator>;
  readonly sizes__thumbnail__width: InputMaybe<Media_Sizes__Thumbnail__Width_Operator>;
  readonly sizes__xlarge__filename: InputMaybe<Media_Sizes__Xlarge__Filename_Operator>;
  readonly sizes__xlarge__filesize: InputMaybe<Media_Sizes__Xlarge__Filesize_Operator>;
  readonly sizes__xlarge__height: InputMaybe<Media_Sizes__Xlarge__Height_Operator>;
  readonly sizes__xlarge__mimeType: InputMaybe<Media_Sizes__Xlarge__MimeType_Operator>;
  readonly sizes__xlarge__url: InputMaybe<Media_Sizes__Xlarge__Url_Operator>;
  readonly sizes__xlarge__width: InputMaybe<Media_Sizes__Xlarge__Width_Operator>;
  readonly thumbnailURL: InputMaybe<Media_ThumbnailUrl_Operator>;
  readonly updatedAt: InputMaybe<Media_UpdatedAt_Operator>;
  readonly url: InputMaybe<Media_Url_Operator>;
  readonly width: InputMaybe<Media_Width_Operator>;
};

export type Media_Where_And = {
  readonly AND: InputMaybe<ReadonlyArray<InputMaybe<Media_Where_And>>>;
  readonly OR: InputMaybe<ReadonlyArray<InputMaybe<Media_Where_Or>>>;
  readonly alt: InputMaybe<Media_Alt_Operator>;
  readonly caption: InputMaybe<Media_Caption_Operator>;
  readonly createdAt: InputMaybe<Media_CreatedAt_Operator>;
  readonly filename: InputMaybe<Media_Filename_Operator>;
  readonly filesize: InputMaybe<Media_Filesize_Operator>;
  readonly focalX: InputMaybe<Media_FocalX_Operator>;
  readonly focalY: InputMaybe<Media_FocalY_Operator>;
  readonly height: InputMaybe<Media_Height_Operator>;
  readonly id: InputMaybe<Media_Id_Operator>;
  readonly mimeType: InputMaybe<Media_MimeType_Operator>;
  readonly sizes__large__filename: InputMaybe<Media_Sizes__Large__Filename_Operator>;
  readonly sizes__large__filesize: InputMaybe<Media_Sizes__Large__Filesize_Operator>;
  readonly sizes__large__height: InputMaybe<Media_Sizes__Large__Height_Operator>;
  readonly sizes__large__mimeType: InputMaybe<Media_Sizes__Large__MimeType_Operator>;
  readonly sizes__large__url: InputMaybe<Media_Sizes__Large__Url_Operator>;
  readonly sizes__large__width: InputMaybe<Media_Sizes__Large__Width_Operator>;
  readonly sizes__medium__filename: InputMaybe<Media_Sizes__Medium__Filename_Operator>;
  readonly sizes__medium__filesize: InputMaybe<Media_Sizes__Medium__Filesize_Operator>;
  readonly sizes__medium__height: InputMaybe<Media_Sizes__Medium__Height_Operator>;
  readonly sizes__medium__mimeType: InputMaybe<Media_Sizes__Medium__MimeType_Operator>;
  readonly sizes__medium__url: InputMaybe<Media_Sizes__Medium__Url_Operator>;
  readonly sizes__medium__width: InputMaybe<Media_Sizes__Medium__Width_Operator>;
  readonly sizes__og__filename: InputMaybe<Media_Sizes__Og__Filename_Operator>;
  readonly sizes__og__filesize: InputMaybe<Media_Sizes__Og__Filesize_Operator>;
  readonly sizes__og__height: InputMaybe<Media_Sizes__Og__Height_Operator>;
  readonly sizes__og__mimeType: InputMaybe<Media_Sizes__Og__MimeType_Operator>;
  readonly sizes__og__url: InputMaybe<Media_Sizes__Og__Url_Operator>;
  readonly sizes__og__width: InputMaybe<Media_Sizes__Og__Width_Operator>;
  readonly sizes__small__filename: InputMaybe<Media_Sizes__Small__Filename_Operator>;
  readonly sizes__small__filesize: InputMaybe<Media_Sizes__Small__Filesize_Operator>;
  readonly sizes__small__height: InputMaybe<Media_Sizes__Small__Height_Operator>;
  readonly sizes__small__mimeType: InputMaybe<Media_Sizes__Small__MimeType_Operator>;
  readonly sizes__small__url: InputMaybe<Media_Sizes__Small__Url_Operator>;
  readonly sizes__small__width: InputMaybe<Media_Sizes__Small__Width_Operator>;
  readonly sizes__square__filename: InputMaybe<Media_Sizes__Square__Filename_Operator>;
  readonly sizes__square__filesize: InputMaybe<Media_Sizes__Square__Filesize_Operator>;
  readonly sizes__square__height: InputMaybe<Media_Sizes__Square__Height_Operator>;
  readonly sizes__square__mimeType: InputMaybe<Media_Sizes__Square__MimeType_Operator>;
  readonly sizes__square__url: InputMaybe<Media_Sizes__Square__Url_Operator>;
  readonly sizes__square__width: InputMaybe<Media_Sizes__Square__Width_Operator>;
  readonly sizes__thumbnail__filename: InputMaybe<Media_Sizes__Thumbnail__Filename_Operator>;
  readonly sizes__thumbnail__filesize: InputMaybe<Media_Sizes__Thumbnail__Filesize_Operator>;
  readonly sizes__thumbnail__height: InputMaybe<Media_Sizes__Thumbnail__Height_Operator>;
  readonly sizes__thumbnail__mimeType: InputMaybe<Media_Sizes__Thumbnail__MimeType_Operator>;
  readonly sizes__thumbnail__url: InputMaybe<Media_Sizes__Thumbnail__Url_Operator>;
  readonly sizes__thumbnail__width: InputMaybe<Media_Sizes__Thumbnail__Width_Operator>;
  readonly sizes__xlarge__filename: InputMaybe<Media_Sizes__Xlarge__Filename_Operator>;
  readonly sizes__xlarge__filesize: InputMaybe<Media_Sizes__Xlarge__Filesize_Operator>;
  readonly sizes__xlarge__height: InputMaybe<Media_Sizes__Xlarge__Height_Operator>;
  readonly sizes__xlarge__mimeType: InputMaybe<Media_Sizes__Xlarge__MimeType_Operator>;
  readonly sizes__xlarge__url: InputMaybe<Media_Sizes__Xlarge__Url_Operator>;
  readonly sizes__xlarge__width: InputMaybe<Media_Sizes__Xlarge__Width_Operator>;
  readonly thumbnailURL: InputMaybe<Media_ThumbnailUrl_Operator>;
  readonly updatedAt: InputMaybe<Media_UpdatedAt_Operator>;
  readonly url: InputMaybe<Media_Url_Operator>;
  readonly width: InputMaybe<Media_Width_Operator>;
};

export type Media_Where_Or = {
  readonly AND: InputMaybe<ReadonlyArray<InputMaybe<Media_Where_And>>>;
  readonly OR: InputMaybe<ReadonlyArray<InputMaybe<Media_Where_Or>>>;
  readonly alt: InputMaybe<Media_Alt_Operator>;
  readonly caption: InputMaybe<Media_Caption_Operator>;
  readonly createdAt: InputMaybe<Media_CreatedAt_Operator>;
  readonly filename: InputMaybe<Media_Filename_Operator>;
  readonly filesize: InputMaybe<Media_Filesize_Operator>;
  readonly focalX: InputMaybe<Media_FocalX_Operator>;
  readonly focalY: InputMaybe<Media_FocalY_Operator>;
  readonly height: InputMaybe<Media_Height_Operator>;
  readonly id: InputMaybe<Media_Id_Operator>;
  readonly mimeType: InputMaybe<Media_MimeType_Operator>;
  readonly sizes__large__filename: InputMaybe<Media_Sizes__Large__Filename_Operator>;
  readonly sizes__large__filesize: InputMaybe<Media_Sizes__Large__Filesize_Operator>;
  readonly sizes__large__height: InputMaybe<Media_Sizes__Large__Height_Operator>;
  readonly sizes__large__mimeType: InputMaybe<Media_Sizes__Large__MimeType_Operator>;
  readonly sizes__large__url: InputMaybe<Media_Sizes__Large__Url_Operator>;
  readonly sizes__large__width: InputMaybe<Media_Sizes__Large__Width_Operator>;
  readonly sizes__medium__filename: InputMaybe<Media_Sizes__Medium__Filename_Operator>;
  readonly sizes__medium__filesize: InputMaybe<Media_Sizes__Medium__Filesize_Operator>;
  readonly sizes__medium__height: InputMaybe<Media_Sizes__Medium__Height_Operator>;
  readonly sizes__medium__mimeType: InputMaybe<Media_Sizes__Medium__MimeType_Operator>;
  readonly sizes__medium__url: InputMaybe<Media_Sizes__Medium__Url_Operator>;
  readonly sizes__medium__width: InputMaybe<Media_Sizes__Medium__Width_Operator>;
  readonly sizes__og__filename: InputMaybe<Media_Sizes__Og__Filename_Operator>;
  readonly sizes__og__filesize: InputMaybe<Media_Sizes__Og__Filesize_Operator>;
  readonly sizes__og__height: InputMaybe<Media_Sizes__Og__Height_Operator>;
  readonly sizes__og__mimeType: InputMaybe<Media_Sizes__Og__MimeType_Operator>;
  readonly sizes__og__url: InputMaybe<Media_Sizes__Og__Url_Operator>;
  readonly sizes__og__width: InputMaybe<Media_Sizes__Og__Width_Operator>;
  readonly sizes__small__filename: InputMaybe<Media_Sizes__Small__Filename_Operator>;
  readonly sizes__small__filesize: InputMaybe<Media_Sizes__Small__Filesize_Operator>;
  readonly sizes__small__height: InputMaybe<Media_Sizes__Small__Height_Operator>;
  readonly sizes__small__mimeType: InputMaybe<Media_Sizes__Small__MimeType_Operator>;
  readonly sizes__small__url: InputMaybe<Media_Sizes__Small__Url_Operator>;
  readonly sizes__small__width: InputMaybe<Media_Sizes__Small__Width_Operator>;
  readonly sizes__square__filename: InputMaybe<Media_Sizes__Square__Filename_Operator>;
  readonly sizes__square__filesize: InputMaybe<Media_Sizes__Square__Filesize_Operator>;
  readonly sizes__square__height: InputMaybe<Media_Sizes__Square__Height_Operator>;
  readonly sizes__square__mimeType: InputMaybe<Media_Sizes__Square__MimeType_Operator>;
  readonly sizes__square__url: InputMaybe<Media_Sizes__Square__Url_Operator>;
  readonly sizes__square__width: InputMaybe<Media_Sizes__Square__Width_Operator>;
  readonly sizes__thumbnail__filename: InputMaybe<Media_Sizes__Thumbnail__Filename_Operator>;
  readonly sizes__thumbnail__filesize: InputMaybe<Media_Sizes__Thumbnail__Filesize_Operator>;
  readonly sizes__thumbnail__height: InputMaybe<Media_Sizes__Thumbnail__Height_Operator>;
  readonly sizes__thumbnail__mimeType: InputMaybe<Media_Sizes__Thumbnail__MimeType_Operator>;
  readonly sizes__thumbnail__url: InputMaybe<Media_Sizes__Thumbnail__Url_Operator>;
  readonly sizes__thumbnail__width: InputMaybe<Media_Sizes__Thumbnail__Width_Operator>;
  readonly sizes__xlarge__filename: InputMaybe<Media_Sizes__Xlarge__Filename_Operator>;
  readonly sizes__xlarge__filesize: InputMaybe<Media_Sizes__Xlarge__Filesize_Operator>;
  readonly sizes__xlarge__height: InputMaybe<Media_Sizes__Xlarge__Height_Operator>;
  readonly sizes__xlarge__mimeType: InputMaybe<Media_Sizes__Xlarge__MimeType_Operator>;
  readonly sizes__xlarge__url: InputMaybe<Media_Sizes__Xlarge__Url_Operator>;
  readonly sizes__xlarge__width: InputMaybe<Media_Sizes__Xlarge__Width_Operator>;
  readonly thumbnailURL: InputMaybe<Media_ThumbnailUrl_Operator>;
  readonly updatedAt: InputMaybe<Media_UpdatedAt_Operator>;
  readonly url: InputMaybe<Media_Url_Operator>;
  readonly width: InputMaybe<Media_Width_Operator>;
};

export type Media_Width_Operator = {
  readonly equals: InputMaybe<Scalars['Float']['input']>;
  readonly exists: InputMaybe<Scalars['Boolean']['input']>;
  readonly greater_than: InputMaybe<Scalars['Float']['input']>;
  readonly greater_than_equal: InputMaybe<Scalars['Float']['input']>;
  readonly less_than: InputMaybe<Scalars['Float']['input']>;
  readonly less_than_equal: InputMaybe<Scalars['Float']['input']>;
  readonly not_equals: InputMaybe<Scalars['Float']['input']>;
};

export type Mutation = {
  readonly __typename?: 'Mutation';
  readonly createAdmin: Maybe<Admin>;
  readonly createCourse: Maybe<Course>;
  readonly createExam: Maybe<Exam>;
  readonly createFaq: Maybe<Faq>;
  readonly createMedia: Maybe<Media>;
  readonly createPayloadLockedDocument: Maybe<PayloadLockedDocument>;
  readonly createPayloadPreference: Maybe<PayloadPreference>;
  readonly createPost: Maybe<Post>;
  readonly createPurchase: Maybe<Purchase>;
  readonly createQuestion: Maybe<Question>;
  readonly createRecomendation: Maybe<Recomendation>;
  readonly createSubject: Maybe<Subject>;
  readonly createTariff: Maybe<Tariff>;
  readonly createTest: Maybe<Test>;
  readonly createTestResult: Maybe<TestResult>;
  readonly createUser: Maybe<User>;
  readonly deleteAdmin: Maybe<Admin>;
  readonly deleteCourse: Maybe<Course>;
  readonly deleteExam: Maybe<Exam>;
  readonly deleteFaq: Maybe<Faq>;
  readonly deleteMedia: Maybe<Media>;
  readonly deletePayloadLockedDocument: Maybe<PayloadLockedDocument>;
  readonly deletePayloadPreference: Maybe<PayloadPreference>;
  readonly deletePost: Maybe<Post>;
  readonly deletePurchase: Maybe<Purchase>;
  readonly deleteQuestion: Maybe<Question>;
  readonly deleteRecomendation: Maybe<Recomendation>;
  readonly deleteSubject: Maybe<Subject>;
  readonly deleteTariff: Maybe<Tariff>;
  readonly deleteTest: Maybe<Test>;
  readonly deleteTestResult: Maybe<TestResult>;
  readonly deleteUser: Maybe<User>;
  readonly duplicateCourse: Maybe<Course>;
  readonly duplicateExam: Maybe<Exam>;
  readonly duplicateFaq: Maybe<Faq>;
  readonly duplicateMedia: Maybe<Media>;
  readonly duplicatePayloadLockedDocument: Maybe<PayloadLockedDocument>;
  readonly duplicatePayloadPreference: Maybe<PayloadPreference>;
  readonly duplicatePost: Maybe<Post>;
  readonly duplicatePurchase: Maybe<Purchase>;
  readonly duplicateQuestion: Maybe<Question>;
  readonly duplicateRecomendation: Maybe<Recomendation>;
  readonly duplicateSubject: Maybe<Subject>;
  readonly duplicateTariff: Maybe<Tariff>;
  readonly duplicateTest: Maybe<Test>;
  readonly duplicateTestResult: Maybe<TestResult>;
  readonly duplicateUser: Maybe<User>;
  readonly forgotPasswordAdmin: Scalars['Boolean']['output'];
  readonly loginAdmin: Maybe<AdminsLoginResult>;
  readonly logoutAdmin: Maybe<Scalars['String']['output']>;
  readonly refreshTokenAdmin: Maybe<AdminsRefreshedAdmin>;
  readonly resetPasswordAdmin: Maybe<AdminsResetPassword>;
  readonly restoreVersionPost: Maybe<Post>;
  readonly unlockAdmin: Scalars['Boolean']['output'];
  readonly updateAdmin: Maybe<Admin>;
  readonly updateCourse: Maybe<Course>;
  readonly updateExam: Maybe<Exam>;
  readonly updateFaq: Maybe<Faq>;
  readonly updateHomePage: Maybe<HomePage>;
  readonly updateMedia: Maybe<Media>;
  readonly updatePayloadLockedDocument: Maybe<PayloadLockedDocument>;
  readonly updatePayloadPreference: Maybe<PayloadPreference>;
  readonly updatePost: Maybe<Post>;
  readonly updatePurchase: Maybe<Purchase>;
  readonly updateQuestion: Maybe<Question>;
  readonly updateRecomendation: Maybe<Recomendation>;
  readonly updateSubject: Maybe<Subject>;
  readonly updateTariff: Maybe<Tariff>;
  readonly updateTest: Maybe<Test>;
  readonly updateTestResult: Maybe<TestResult>;
  readonly updateUser: Maybe<User>;
  readonly verifyEmailAdmin: Maybe<Scalars['Boolean']['output']>;
};


export type MutationCreateAdminArgs = {
  data: MutationAdminInput;
  draft: InputMaybe<Scalars['Boolean']['input']>;
  locale: InputMaybe<LocaleInputType>;
};


export type MutationCreateCourseArgs = {
  data: MutationCourseInput;
  draft: InputMaybe<Scalars['Boolean']['input']>;
  locale: InputMaybe<LocaleInputType>;
};


export type MutationCreateExamArgs = {
  data: MutationExamInput;
  draft: InputMaybe<Scalars['Boolean']['input']>;
  locale: InputMaybe<LocaleInputType>;
};


export type MutationCreateFaqArgs = {
  data: MutationFaqInput;
  draft: InputMaybe<Scalars['Boolean']['input']>;
  locale: InputMaybe<LocaleInputType>;
};


export type MutationCreateMediaArgs = {
  data: MutationMediaInput;
  draft: InputMaybe<Scalars['Boolean']['input']>;
  locale: InputMaybe<LocaleInputType>;
};


export type MutationCreatePayloadLockedDocumentArgs = {
  data: MutationPayloadLockedDocumentInput;
  draft: InputMaybe<Scalars['Boolean']['input']>;
  locale: InputMaybe<LocaleInputType>;
};


export type MutationCreatePayloadPreferenceArgs = {
  data: MutationPayloadPreferenceInput;
  draft: InputMaybe<Scalars['Boolean']['input']>;
  locale: InputMaybe<LocaleInputType>;
};


export type MutationCreatePostArgs = {
  data: MutationPostInput;
  draft: InputMaybe<Scalars['Boolean']['input']>;
  locale: InputMaybe<LocaleInputType>;
};


export type MutationCreatePurchaseArgs = {
  data: MutationPurchaseInput;
  draft: InputMaybe<Scalars['Boolean']['input']>;
  locale: InputMaybe<LocaleInputType>;
};


export type MutationCreateQuestionArgs = {
  data: MutationQuestionInput;
  draft: InputMaybe<Scalars['Boolean']['input']>;
  locale: InputMaybe<LocaleInputType>;
};


export type MutationCreateRecomendationArgs = {
  data: MutationRecomendationInput;
  draft: InputMaybe<Scalars['Boolean']['input']>;
  locale: InputMaybe<LocaleInputType>;
};


export type MutationCreateSubjectArgs = {
  data: MutationSubjectInput;
  draft: InputMaybe<Scalars['Boolean']['input']>;
  locale: InputMaybe<LocaleInputType>;
};


export type MutationCreateTariffArgs = {
  data: MutationTariffInput;
  draft: InputMaybe<Scalars['Boolean']['input']>;
  locale: InputMaybe<LocaleInputType>;
};


export type MutationCreateTestArgs = {
  data: MutationTestInput;
  draft: InputMaybe<Scalars['Boolean']['input']>;
  locale: InputMaybe<LocaleInputType>;
};


export type MutationCreateTestResultArgs = {
  data: MutationTestResultInput;
  draft: InputMaybe<Scalars['Boolean']['input']>;
  locale: InputMaybe<LocaleInputType>;
};


export type MutationCreateUserArgs = {
  data: MutationUserInput;
  draft: InputMaybe<Scalars['Boolean']['input']>;
  locale: InputMaybe<LocaleInputType>;
};


export type MutationDeleteAdminArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeleteCourseArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeleteExamArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeleteFaqArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeleteMediaArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeletePayloadLockedDocumentArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeletePayloadPreferenceArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeletePostArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeletePurchaseArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeleteQuestionArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeleteRecomendationArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeleteSubjectArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeleteTariffArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeleteTestArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeleteTestResultArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDuplicateCourseArgs = {
  data: MutationCourseInput;
  id: Scalars['Int']['input'];
};


export type MutationDuplicateExamArgs = {
  data: MutationExamInput;
  id: Scalars['Int']['input'];
};


export type MutationDuplicateFaqArgs = {
  data: MutationFaqInput;
  id: Scalars['Int']['input'];
};


export type MutationDuplicateMediaArgs = {
  data: MutationMediaInput;
  id: Scalars['Int']['input'];
};


export type MutationDuplicatePayloadLockedDocumentArgs = {
  data: MutationPayloadLockedDocumentInput;
  id: Scalars['Int']['input'];
};


export type MutationDuplicatePayloadPreferenceArgs = {
  data: MutationPayloadPreferenceInput;
  id: Scalars['Int']['input'];
};


export type MutationDuplicatePostArgs = {
  data: MutationPostInput;
  id: Scalars['Int']['input'];
};


export type MutationDuplicatePurchaseArgs = {
  data: MutationPurchaseInput;
  id: Scalars['Int']['input'];
};


export type MutationDuplicateQuestionArgs = {
  data: MutationQuestionInput;
  id: Scalars['Int']['input'];
};


export type MutationDuplicateRecomendationArgs = {
  data: MutationRecomendationInput;
  id: Scalars['Int']['input'];
};


export type MutationDuplicateSubjectArgs = {
  data: MutationSubjectInput;
  id: Scalars['Int']['input'];
};


export type MutationDuplicateTariffArgs = {
  data: MutationTariffInput;
  id: Scalars['Int']['input'];
};


export type MutationDuplicateTestArgs = {
  data: MutationTestInput;
  id: Scalars['Int']['input'];
};


export type MutationDuplicateTestResultArgs = {
  data: MutationTestResultInput;
  id: Scalars['Int']['input'];
};


export type MutationDuplicateUserArgs = {
  data: MutationUserInput;
  id: Scalars['Int']['input'];
};


export type MutationForgotPasswordAdminArgs = {
  disableEmail: InputMaybe<Scalars['Boolean']['input']>;
  email: Scalars['String']['input'];
  expiration: InputMaybe<Scalars['Int']['input']>;
};


export type MutationLoginAdminArgs = {
  email: Scalars['String']['input'];
  password: InputMaybe<Scalars['String']['input']>;
};


export type MutationResetPasswordAdminArgs = {
  password: InputMaybe<Scalars['String']['input']>;
  token: InputMaybe<Scalars['String']['input']>;
};


export type MutationRestoreVersionPostArgs = {
  draft: InputMaybe<Scalars['Boolean']['input']>;
  id: InputMaybe<Scalars['Int']['input']>;
};


export type MutationUnlockAdminArgs = {
  email: Scalars['String']['input'];
};


export type MutationUpdateAdminArgs = {
  autosave: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationAdminUpdateInput;
  draft: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['Int']['input'];
  locale: InputMaybe<LocaleInputType>;
};


export type MutationUpdateCourseArgs = {
  autosave: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationCourseUpdateInput;
  draft: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['Int']['input'];
  locale: InputMaybe<LocaleInputType>;
};


export type MutationUpdateExamArgs = {
  autosave: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationExamUpdateInput;
  draft: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['Int']['input'];
  locale: InputMaybe<LocaleInputType>;
};


export type MutationUpdateFaqArgs = {
  autosave: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationFaqUpdateInput;
  draft: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['Int']['input'];
  locale: InputMaybe<LocaleInputType>;
};


export type MutationUpdateHomePageArgs = {
  data: MutationHomePageInput;
  draft: InputMaybe<Scalars['Boolean']['input']>;
  locale: InputMaybe<LocaleInputType>;
};


export type MutationUpdateMediaArgs = {
  autosave: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationMediaUpdateInput;
  draft: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['Int']['input'];
  locale: InputMaybe<LocaleInputType>;
};


export type MutationUpdatePayloadLockedDocumentArgs = {
  autosave: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationPayloadLockedDocumentUpdateInput;
  draft: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['Int']['input'];
  locale: InputMaybe<LocaleInputType>;
};


export type MutationUpdatePayloadPreferenceArgs = {
  autosave: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationPayloadPreferenceUpdateInput;
  draft: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['Int']['input'];
  locale: InputMaybe<LocaleInputType>;
};


export type MutationUpdatePostArgs = {
  autosave: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationPostUpdateInput;
  draft: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['Int']['input'];
  locale: InputMaybe<LocaleInputType>;
};


export type MutationUpdatePurchaseArgs = {
  autosave: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationPurchaseUpdateInput;
  draft: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['Int']['input'];
  locale: InputMaybe<LocaleInputType>;
};


export type MutationUpdateQuestionArgs = {
  autosave: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationQuestionUpdateInput;
  draft: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['Int']['input'];
  locale: InputMaybe<LocaleInputType>;
};


export type MutationUpdateRecomendationArgs = {
  autosave: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationRecomendationUpdateInput;
  draft: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['Int']['input'];
  locale: InputMaybe<LocaleInputType>;
};


export type MutationUpdateSubjectArgs = {
  autosave: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationSubjectUpdateInput;
  draft: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['Int']['input'];
  locale: InputMaybe<LocaleInputType>;
};


export type MutationUpdateTariffArgs = {
  autosave: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationTariffUpdateInput;
  draft: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['Int']['input'];
  locale: InputMaybe<LocaleInputType>;
};


export type MutationUpdateTestArgs = {
  autosave: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationTestUpdateInput;
  draft: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['Int']['input'];
  locale: InputMaybe<LocaleInputType>;
};


export type MutationUpdateTestResultArgs = {
  autosave: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationTestResultUpdateInput;
  draft: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['Int']['input'];
  locale: InputMaybe<LocaleInputType>;
};


export type MutationUpdateUserArgs = {
  autosave: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationUserUpdateInput;
  draft: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['Int']['input'];
  locale: InputMaybe<LocaleInputType>;
};


export type MutationVerifyEmailAdminArgs = {
  token: InputMaybe<Scalars['String']['input']>;
};

export type PaginatedTestsWithStatus = {
  readonly __typename?: 'PaginatedTestsWithStatus';
  readonly docs: Maybe<ReadonlyArray<Maybe<TestWithStatus>>>;
  readonly page: Maybe<Scalars['Int']['output']>;
  readonly totalDocs: Maybe<Scalars['Int']['output']>;
  readonly totalPages: Maybe<Scalars['Int']['output']>;
};

export type PayloadLockedDocument = {
  readonly __typename?: 'PayloadLockedDocument';
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly document: Maybe<PayloadLockedDocument_Document_Relationship>;
  readonly globalSlug: Maybe<Scalars['String']['output']>;
  readonly id: Scalars['Int']['output'];
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
  readonly user: PayloadLockedDocument_User_Relationship;
};


export type PayloadLockedDocumentDocumentArgs = {
  draft: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale: InputMaybe<FallbackLocaleInputType>;
  locale: InputMaybe<LocaleInputType>;
};


export type PayloadLockedDocumentUserArgs = {
  fallbackLocale: InputMaybe<FallbackLocaleInputType>;
  locale: InputMaybe<LocaleInputType>;
};

export type PayloadLockedDocumentUpdate_DocumentRelationshipInput = {
  readonly relationTo: InputMaybe<PayloadLockedDocumentUpdate_DocumentRelationshipInputRelationTo>;
  readonly value: InputMaybe<Scalars['JSON']['input']>;
};

export type PayloadLockedDocumentUpdate_DocumentRelationshipInputRelationTo =
  | 'admins'
  | 'courses'
  | 'exams'
  | 'faqs'
  | 'media'
  | 'posts'
  | 'purchases'
  | 'questions'
  | 'recomendations'
  | 'subjects'
  | 'tariffs'
  | 'testResults'
  | 'tests'
  | 'users';

export type PayloadLockedDocumentUpdate_UserRelationshipInput = {
  readonly relationTo: InputMaybe<PayloadLockedDocumentUpdate_UserRelationshipInputRelationTo>;
  readonly value: InputMaybe<Scalars['JSON']['input']>;
};

export type PayloadLockedDocumentUpdate_UserRelationshipInputRelationTo =
  | 'admins';

export type PayloadLockedDocument_Document = Admin | Course | Exam | Faq | Media | Post | Purchase | Question | Recomendation | Subject | Tariff | Test | TestResult | User;

export type PayloadLockedDocument_DocumentRelationshipInput = {
  readonly relationTo: InputMaybe<PayloadLockedDocument_DocumentRelationshipInputRelationTo>;
  readonly value: InputMaybe<Scalars['JSON']['input']>;
};

export type PayloadLockedDocument_DocumentRelationshipInputRelationTo =
  | 'admins'
  | 'courses'
  | 'exams'
  | 'faqs'
  | 'media'
  | 'posts'
  | 'purchases'
  | 'questions'
  | 'recomendations'
  | 'subjects'
  | 'tariffs'
  | 'testResults'
  | 'tests'
  | 'users';

export type PayloadLockedDocument_Document_RelationTo =
  | 'admins'
  | 'courses'
  | 'exams'
  | 'faqs'
  | 'media'
  | 'posts'
  | 'purchases'
  | 'questions'
  | 'recomendations'
  | 'subjects'
  | 'tariffs'
  | 'testResults'
  | 'tests'
  | 'users';

export type PayloadLockedDocument_Document_Relationship = {
  readonly __typename?: 'PayloadLockedDocument_Document_Relationship';
  readonly relationTo: Maybe<PayloadLockedDocument_Document_RelationTo>;
  readonly value: Maybe<PayloadLockedDocument_Document>;
};

export type PayloadLockedDocument_User = Admin;

export type PayloadLockedDocument_UserRelationshipInput = {
  readonly relationTo: InputMaybe<PayloadLockedDocument_UserRelationshipInputRelationTo>;
  readonly value: InputMaybe<Scalars['JSON']['input']>;
};

export type PayloadLockedDocument_UserRelationshipInputRelationTo =
  | 'admins';

export type PayloadLockedDocument_User_RelationTo =
  | 'admins';

export type PayloadLockedDocument_User_Relationship = {
  readonly __typename?: 'PayloadLockedDocument_User_Relationship';
  readonly relationTo: Maybe<PayloadLockedDocument_User_RelationTo>;
  readonly value: Maybe<PayloadLockedDocument_User>;
};

export type PayloadLockedDocument_CreatedAt_Operator = {
  readonly equals: InputMaybe<Scalars['DateTime']['input']>;
  readonly exists: InputMaybe<Scalars['Boolean']['input']>;
  readonly greater_than: InputMaybe<Scalars['DateTime']['input']>;
  readonly greater_than_equal: InputMaybe<Scalars['DateTime']['input']>;
  readonly less_than: InputMaybe<Scalars['DateTime']['input']>;
  readonly less_than_equal: InputMaybe<Scalars['DateTime']['input']>;
  readonly like: InputMaybe<Scalars['DateTime']['input']>;
  readonly not_equals: InputMaybe<Scalars['DateTime']['input']>;
};

export type PayloadLockedDocument_Document_Relation = {
  readonly relationTo: InputMaybe<PayloadLockedDocument_Document_Relation_RelationTo>;
  readonly value: InputMaybe<Scalars['JSON']['input']>;
};

export type PayloadLockedDocument_Document_Relation_RelationTo =
  | 'admins'
  | 'courses'
  | 'exams'
  | 'faqs'
  | 'media'
  | 'posts'
  | 'purchases'
  | 'questions'
  | 'recomendations'
  | 'subjects'
  | 'tariffs'
  | 'testResults'
  | 'tests'
  | 'users';

export type PayloadLockedDocument_GlobalSlug_Operator = {
  readonly all: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly contains: InputMaybe<Scalars['String']['input']>;
  readonly equals: InputMaybe<Scalars['String']['input']>;
  readonly exists: InputMaybe<Scalars['Boolean']['input']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly like: InputMaybe<Scalars['String']['input']>;
  readonly not_equals: InputMaybe<Scalars['String']['input']>;
  readonly not_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type PayloadLockedDocument_Id_Operator = {
  readonly equals: InputMaybe<Scalars['Int']['input']>;
  readonly exists: InputMaybe<Scalars['Boolean']['input']>;
  readonly greater_than: InputMaybe<Scalars['Int']['input']>;
  readonly greater_than_equal: InputMaybe<Scalars['Int']['input']>;
  readonly less_than: InputMaybe<Scalars['Int']['input']>;
  readonly less_than_equal: InputMaybe<Scalars['Int']['input']>;
  readonly not_equals: InputMaybe<Scalars['Int']['input']>;
};

export type PayloadLockedDocument_UpdatedAt_Operator = {
  readonly equals: InputMaybe<Scalars['DateTime']['input']>;
  readonly exists: InputMaybe<Scalars['Boolean']['input']>;
  readonly greater_than: InputMaybe<Scalars['DateTime']['input']>;
  readonly greater_than_equal: InputMaybe<Scalars['DateTime']['input']>;
  readonly less_than: InputMaybe<Scalars['DateTime']['input']>;
  readonly less_than_equal: InputMaybe<Scalars['DateTime']['input']>;
  readonly like: InputMaybe<Scalars['DateTime']['input']>;
  readonly not_equals: InputMaybe<Scalars['DateTime']['input']>;
};

export type PayloadLockedDocument_User_Relation = {
  readonly relationTo: InputMaybe<PayloadLockedDocument_User_Relation_RelationTo>;
  readonly value: InputMaybe<Scalars['JSON']['input']>;
};

export type PayloadLockedDocument_User_Relation_RelationTo =
  | 'admins';

export type PayloadLockedDocument_Where = {
  readonly AND: InputMaybe<ReadonlyArray<InputMaybe<PayloadLockedDocument_Where_And>>>;
  readonly OR: InputMaybe<ReadonlyArray<InputMaybe<PayloadLockedDocument_Where_Or>>>;
  readonly createdAt: InputMaybe<PayloadLockedDocument_CreatedAt_Operator>;
  readonly document: InputMaybe<PayloadLockedDocument_Document_Relation>;
  readonly globalSlug: InputMaybe<PayloadLockedDocument_GlobalSlug_Operator>;
  readonly id: InputMaybe<PayloadLockedDocument_Id_Operator>;
  readonly updatedAt: InputMaybe<PayloadLockedDocument_UpdatedAt_Operator>;
  readonly user: InputMaybe<PayloadLockedDocument_User_Relation>;
};

export type PayloadLockedDocument_Where_And = {
  readonly AND: InputMaybe<ReadonlyArray<InputMaybe<PayloadLockedDocument_Where_And>>>;
  readonly OR: InputMaybe<ReadonlyArray<InputMaybe<PayloadLockedDocument_Where_Or>>>;
  readonly createdAt: InputMaybe<PayloadLockedDocument_CreatedAt_Operator>;
  readonly document: InputMaybe<PayloadLockedDocument_Document_Relation>;
  readonly globalSlug: InputMaybe<PayloadLockedDocument_GlobalSlug_Operator>;
  readonly id: InputMaybe<PayloadLockedDocument_Id_Operator>;
  readonly updatedAt: InputMaybe<PayloadLockedDocument_UpdatedAt_Operator>;
  readonly user: InputMaybe<PayloadLockedDocument_User_Relation>;
};

export type PayloadLockedDocument_Where_Or = {
  readonly AND: InputMaybe<ReadonlyArray<InputMaybe<PayloadLockedDocument_Where_And>>>;
  readonly OR: InputMaybe<ReadonlyArray<InputMaybe<PayloadLockedDocument_Where_Or>>>;
  readonly createdAt: InputMaybe<PayloadLockedDocument_CreatedAt_Operator>;
  readonly document: InputMaybe<PayloadLockedDocument_Document_Relation>;
  readonly globalSlug: InputMaybe<PayloadLockedDocument_GlobalSlug_Operator>;
  readonly id: InputMaybe<PayloadLockedDocument_Id_Operator>;
  readonly updatedAt: InputMaybe<PayloadLockedDocument_UpdatedAt_Operator>;
  readonly user: InputMaybe<PayloadLockedDocument_User_Relation>;
};

export type PayloadLockedDocuments = {
  readonly __typename?: 'PayloadLockedDocuments';
  readonly docs: ReadonlyArray<PayloadLockedDocument>;
  readonly hasNextPage: Scalars['Boolean']['output'];
  readonly hasPrevPage: Scalars['Boolean']['output'];
  readonly limit: Scalars['Int']['output'];
  readonly nextPage: Maybe<Scalars['Int']['output']>;
  readonly offset: Maybe<Scalars['Int']['output']>;
  readonly page: Scalars['Int']['output'];
  readonly pagingCounter: Scalars['Int']['output'];
  readonly prevPage: Maybe<Scalars['Int']['output']>;
  readonly totalDocs: Scalars['Int']['output'];
  readonly totalPages: Scalars['Int']['output'];
};

export type PayloadLockedDocumentsCreateAccess = {
  readonly __typename?: 'PayloadLockedDocumentsCreateAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadLockedDocumentsCreateDocAccess = {
  readonly __typename?: 'PayloadLockedDocumentsCreateDocAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadLockedDocumentsDeleteAccess = {
  readonly __typename?: 'PayloadLockedDocumentsDeleteAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadLockedDocumentsDeleteDocAccess = {
  readonly __typename?: 'PayloadLockedDocumentsDeleteDocAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadLockedDocumentsDocAccessFields = {
  readonly __typename?: 'PayloadLockedDocumentsDocAccessFields';
  readonly createdAt: Maybe<PayloadLockedDocumentsDocAccessFields_CreatedAt>;
  readonly document: Maybe<PayloadLockedDocumentsDocAccessFields_Document>;
  readonly globalSlug: Maybe<PayloadLockedDocumentsDocAccessFields_GlobalSlug>;
  readonly updatedAt: Maybe<PayloadLockedDocumentsDocAccessFields_UpdatedAt>;
  readonly user: Maybe<PayloadLockedDocumentsDocAccessFields_User>;
};

export type PayloadLockedDocumentsDocAccessFields_CreatedAt = {
  readonly __typename?: 'PayloadLockedDocumentsDocAccessFields_createdAt';
  readonly create: Maybe<PayloadLockedDocumentsDocAccessFields_CreatedAt_Create>;
  readonly delete: Maybe<PayloadLockedDocumentsDocAccessFields_CreatedAt_Delete>;
  readonly read: Maybe<PayloadLockedDocumentsDocAccessFields_CreatedAt_Read>;
  readonly update: Maybe<PayloadLockedDocumentsDocAccessFields_CreatedAt_Update>;
};

export type PayloadLockedDocumentsDocAccessFields_CreatedAt_Create = {
  readonly __typename?: 'PayloadLockedDocumentsDocAccessFields_createdAt_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_CreatedAt_Delete = {
  readonly __typename?: 'PayloadLockedDocumentsDocAccessFields_createdAt_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_CreatedAt_Read = {
  readonly __typename?: 'PayloadLockedDocumentsDocAccessFields_createdAt_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_CreatedAt_Update = {
  readonly __typename?: 'PayloadLockedDocumentsDocAccessFields_createdAt_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_Document = {
  readonly __typename?: 'PayloadLockedDocumentsDocAccessFields_document';
  readonly create: Maybe<PayloadLockedDocumentsDocAccessFields_Document_Create>;
  readonly delete: Maybe<PayloadLockedDocumentsDocAccessFields_Document_Delete>;
  readonly read: Maybe<PayloadLockedDocumentsDocAccessFields_Document_Read>;
  readonly update: Maybe<PayloadLockedDocumentsDocAccessFields_Document_Update>;
};

export type PayloadLockedDocumentsDocAccessFields_Document_Create = {
  readonly __typename?: 'PayloadLockedDocumentsDocAccessFields_document_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_Document_Delete = {
  readonly __typename?: 'PayloadLockedDocumentsDocAccessFields_document_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_Document_Read = {
  readonly __typename?: 'PayloadLockedDocumentsDocAccessFields_document_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_Document_Update = {
  readonly __typename?: 'PayloadLockedDocumentsDocAccessFields_document_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_GlobalSlug = {
  readonly __typename?: 'PayloadLockedDocumentsDocAccessFields_globalSlug';
  readonly create: Maybe<PayloadLockedDocumentsDocAccessFields_GlobalSlug_Create>;
  readonly delete: Maybe<PayloadLockedDocumentsDocAccessFields_GlobalSlug_Delete>;
  readonly read: Maybe<PayloadLockedDocumentsDocAccessFields_GlobalSlug_Read>;
  readonly update: Maybe<PayloadLockedDocumentsDocAccessFields_GlobalSlug_Update>;
};

export type PayloadLockedDocumentsDocAccessFields_GlobalSlug_Create = {
  readonly __typename?: 'PayloadLockedDocumentsDocAccessFields_globalSlug_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_GlobalSlug_Delete = {
  readonly __typename?: 'PayloadLockedDocumentsDocAccessFields_globalSlug_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_GlobalSlug_Read = {
  readonly __typename?: 'PayloadLockedDocumentsDocAccessFields_globalSlug_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_GlobalSlug_Update = {
  readonly __typename?: 'PayloadLockedDocumentsDocAccessFields_globalSlug_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_UpdatedAt = {
  readonly __typename?: 'PayloadLockedDocumentsDocAccessFields_updatedAt';
  readonly create: Maybe<PayloadLockedDocumentsDocAccessFields_UpdatedAt_Create>;
  readonly delete: Maybe<PayloadLockedDocumentsDocAccessFields_UpdatedAt_Delete>;
  readonly read: Maybe<PayloadLockedDocumentsDocAccessFields_UpdatedAt_Read>;
  readonly update: Maybe<PayloadLockedDocumentsDocAccessFields_UpdatedAt_Update>;
};

export type PayloadLockedDocumentsDocAccessFields_UpdatedAt_Create = {
  readonly __typename?: 'PayloadLockedDocumentsDocAccessFields_updatedAt_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_UpdatedAt_Delete = {
  readonly __typename?: 'PayloadLockedDocumentsDocAccessFields_updatedAt_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_UpdatedAt_Read = {
  readonly __typename?: 'PayloadLockedDocumentsDocAccessFields_updatedAt_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_UpdatedAt_Update = {
  readonly __typename?: 'PayloadLockedDocumentsDocAccessFields_updatedAt_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_User = {
  readonly __typename?: 'PayloadLockedDocumentsDocAccessFields_user';
  readonly create: Maybe<PayloadLockedDocumentsDocAccessFields_User_Create>;
  readonly delete: Maybe<PayloadLockedDocumentsDocAccessFields_User_Delete>;
  readonly read: Maybe<PayloadLockedDocumentsDocAccessFields_User_Read>;
  readonly update: Maybe<PayloadLockedDocumentsDocAccessFields_User_Update>;
};

export type PayloadLockedDocumentsDocAccessFields_User_Create = {
  readonly __typename?: 'PayloadLockedDocumentsDocAccessFields_user_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_User_Delete = {
  readonly __typename?: 'PayloadLockedDocumentsDocAccessFields_user_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_User_Read = {
  readonly __typename?: 'PayloadLockedDocumentsDocAccessFields_user_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_User_Update = {
  readonly __typename?: 'PayloadLockedDocumentsDocAccessFields_user_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields = {
  readonly __typename?: 'PayloadLockedDocumentsFields';
  readonly createdAt: Maybe<PayloadLockedDocumentsFields_CreatedAt>;
  readonly document: Maybe<PayloadLockedDocumentsFields_Document>;
  readonly globalSlug: Maybe<PayloadLockedDocumentsFields_GlobalSlug>;
  readonly updatedAt: Maybe<PayloadLockedDocumentsFields_UpdatedAt>;
  readonly user: Maybe<PayloadLockedDocumentsFields_User>;
};

export type PayloadLockedDocumentsFields_CreatedAt = {
  readonly __typename?: 'PayloadLockedDocumentsFields_createdAt';
  readonly create: Maybe<PayloadLockedDocumentsFields_CreatedAt_Create>;
  readonly delete: Maybe<PayloadLockedDocumentsFields_CreatedAt_Delete>;
  readonly read: Maybe<PayloadLockedDocumentsFields_CreatedAt_Read>;
  readonly update: Maybe<PayloadLockedDocumentsFields_CreatedAt_Update>;
};

export type PayloadLockedDocumentsFields_CreatedAt_Create = {
  readonly __typename?: 'PayloadLockedDocumentsFields_createdAt_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_CreatedAt_Delete = {
  readonly __typename?: 'PayloadLockedDocumentsFields_createdAt_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_CreatedAt_Read = {
  readonly __typename?: 'PayloadLockedDocumentsFields_createdAt_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_CreatedAt_Update = {
  readonly __typename?: 'PayloadLockedDocumentsFields_createdAt_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_Document = {
  readonly __typename?: 'PayloadLockedDocumentsFields_document';
  readonly create: Maybe<PayloadLockedDocumentsFields_Document_Create>;
  readonly delete: Maybe<PayloadLockedDocumentsFields_Document_Delete>;
  readonly read: Maybe<PayloadLockedDocumentsFields_Document_Read>;
  readonly update: Maybe<PayloadLockedDocumentsFields_Document_Update>;
};

export type PayloadLockedDocumentsFields_Document_Create = {
  readonly __typename?: 'PayloadLockedDocumentsFields_document_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_Document_Delete = {
  readonly __typename?: 'PayloadLockedDocumentsFields_document_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_Document_Read = {
  readonly __typename?: 'PayloadLockedDocumentsFields_document_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_Document_Update = {
  readonly __typename?: 'PayloadLockedDocumentsFields_document_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_GlobalSlug = {
  readonly __typename?: 'PayloadLockedDocumentsFields_globalSlug';
  readonly create: Maybe<PayloadLockedDocumentsFields_GlobalSlug_Create>;
  readonly delete: Maybe<PayloadLockedDocumentsFields_GlobalSlug_Delete>;
  readonly read: Maybe<PayloadLockedDocumentsFields_GlobalSlug_Read>;
  readonly update: Maybe<PayloadLockedDocumentsFields_GlobalSlug_Update>;
};

export type PayloadLockedDocumentsFields_GlobalSlug_Create = {
  readonly __typename?: 'PayloadLockedDocumentsFields_globalSlug_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_GlobalSlug_Delete = {
  readonly __typename?: 'PayloadLockedDocumentsFields_globalSlug_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_GlobalSlug_Read = {
  readonly __typename?: 'PayloadLockedDocumentsFields_globalSlug_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_GlobalSlug_Update = {
  readonly __typename?: 'PayloadLockedDocumentsFields_globalSlug_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_UpdatedAt = {
  readonly __typename?: 'PayloadLockedDocumentsFields_updatedAt';
  readonly create: Maybe<PayloadLockedDocumentsFields_UpdatedAt_Create>;
  readonly delete: Maybe<PayloadLockedDocumentsFields_UpdatedAt_Delete>;
  readonly read: Maybe<PayloadLockedDocumentsFields_UpdatedAt_Read>;
  readonly update: Maybe<PayloadLockedDocumentsFields_UpdatedAt_Update>;
};

export type PayloadLockedDocumentsFields_UpdatedAt_Create = {
  readonly __typename?: 'PayloadLockedDocumentsFields_updatedAt_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_UpdatedAt_Delete = {
  readonly __typename?: 'PayloadLockedDocumentsFields_updatedAt_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_UpdatedAt_Read = {
  readonly __typename?: 'PayloadLockedDocumentsFields_updatedAt_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_UpdatedAt_Update = {
  readonly __typename?: 'PayloadLockedDocumentsFields_updatedAt_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_User = {
  readonly __typename?: 'PayloadLockedDocumentsFields_user';
  readonly create: Maybe<PayloadLockedDocumentsFields_User_Create>;
  readonly delete: Maybe<PayloadLockedDocumentsFields_User_Delete>;
  readonly read: Maybe<PayloadLockedDocumentsFields_User_Read>;
  readonly update: Maybe<PayloadLockedDocumentsFields_User_Update>;
};

export type PayloadLockedDocumentsFields_User_Create = {
  readonly __typename?: 'PayloadLockedDocumentsFields_user_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_User_Delete = {
  readonly __typename?: 'PayloadLockedDocumentsFields_user_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_User_Read = {
  readonly __typename?: 'PayloadLockedDocumentsFields_user_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_User_Update = {
  readonly __typename?: 'PayloadLockedDocumentsFields_user_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsReadAccess = {
  readonly __typename?: 'PayloadLockedDocumentsReadAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadLockedDocumentsReadDocAccess = {
  readonly __typename?: 'PayloadLockedDocumentsReadDocAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadLockedDocumentsUpdateAccess = {
  readonly __typename?: 'PayloadLockedDocumentsUpdateAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadLockedDocumentsUpdateDocAccess = {
  readonly __typename?: 'PayloadLockedDocumentsUpdateDocAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadPreference = {
  readonly __typename?: 'PayloadPreference';
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly id: Scalars['Int']['output'];
  readonly key: Maybe<Scalars['String']['output']>;
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
  readonly user: PayloadPreference_User_Relationship;
  readonly value: Maybe<Scalars['JSON']['output']>;
};


export type PayloadPreferenceUserArgs = {
  fallbackLocale: InputMaybe<FallbackLocaleInputType>;
  locale: InputMaybe<LocaleInputType>;
};

export type PayloadPreferenceUpdate_UserRelationshipInput = {
  readonly relationTo: InputMaybe<PayloadPreferenceUpdate_UserRelationshipInputRelationTo>;
  readonly value: InputMaybe<Scalars['JSON']['input']>;
};

export type PayloadPreferenceUpdate_UserRelationshipInputRelationTo =
  | 'admins';

export type PayloadPreference_User = Admin;

export type PayloadPreference_UserRelationshipInput = {
  readonly relationTo: InputMaybe<PayloadPreference_UserRelationshipInputRelationTo>;
  readonly value: InputMaybe<Scalars['JSON']['input']>;
};

export type PayloadPreference_UserRelationshipInputRelationTo =
  | 'admins';

export type PayloadPreference_User_RelationTo =
  | 'admins';

export type PayloadPreference_User_Relationship = {
  readonly __typename?: 'PayloadPreference_User_Relationship';
  readonly relationTo: Maybe<PayloadPreference_User_RelationTo>;
  readonly value: Maybe<PayloadPreference_User>;
};

export type PayloadPreference_CreatedAt_Operator = {
  readonly equals: InputMaybe<Scalars['DateTime']['input']>;
  readonly exists: InputMaybe<Scalars['Boolean']['input']>;
  readonly greater_than: InputMaybe<Scalars['DateTime']['input']>;
  readonly greater_than_equal: InputMaybe<Scalars['DateTime']['input']>;
  readonly less_than: InputMaybe<Scalars['DateTime']['input']>;
  readonly less_than_equal: InputMaybe<Scalars['DateTime']['input']>;
  readonly like: InputMaybe<Scalars['DateTime']['input']>;
  readonly not_equals: InputMaybe<Scalars['DateTime']['input']>;
};

export type PayloadPreference_Id_Operator = {
  readonly equals: InputMaybe<Scalars['Int']['input']>;
  readonly exists: InputMaybe<Scalars['Boolean']['input']>;
  readonly greater_than: InputMaybe<Scalars['Int']['input']>;
  readonly greater_than_equal: InputMaybe<Scalars['Int']['input']>;
  readonly less_than: InputMaybe<Scalars['Int']['input']>;
  readonly less_than_equal: InputMaybe<Scalars['Int']['input']>;
  readonly not_equals: InputMaybe<Scalars['Int']['input']>;
};

export type PayloadPreference_Key_Operator = {
  readonly all: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly contains: InputMaybe<Scalars['String']['input']>;
  readonly equals: InputMaybe<Scalars['String']['input']>;
  readonly exists: InputMaybe<Scalars['Boolean']['input']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly like: InputMaybe<Scalars['String']['input']>;
  readonly not_equals: InputMaybe<Scalars['String']['input']>;
  readonly not_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type PayloadPreference_UpdatedAt_Operator = {
  readonly equals: InputMaybe<Scalars['DateTime']['input']>;
  readonly exists: InputMaybe<Scalars['Boolean']['input']>;
  readonly greater_than: InputMaybe<Scalars['DateTime']['input']>;
  readonly greater_than_equal: InputMaybe<Scalars['DateTime']['input']>;
  readonly less_than: InputMaybe<Scalars['DateTime']['input']>;
  readonly less_than_equal: InputMaybe<Scalars['DateTime']['input']>;
  readonly like: InputMaybe<Scalars['DateTime']['input']>;
  readonly not_equals: InputMaybe<Scalars['DateTime']['input']>;
};

export type PayloadPreference_User_Relation = {
  readonly relationTo: InputMaybe<PayloadPreference_User_Relation_RelationTo>;
  readonly value: InputMaybe<Scalars['JSON']['input']>;
};

export type PayloadPreference_User_Relation_RelationTo =
  | 'admins';

export type PayloadPreference_Value_Operator = {
  readonly contains: InputMaybe<Scalars['JSON']['input']>;
  readonly equals: InputMaybe<Scalars['JSON']['input']>;
  readonly exists: InputMaybe<Scalars['Boolean']['input']>;
  readonly intersects: InputMaybe<Scalars['JSON']['input']>;
  readonly like: InputMaybe<Scalars['JSON']['input']>;
  readonly not_equals: InputMaybe<Scalars['JSON']['input']>;
  readonly within: InputMaybe<Scalars['JSON']['input']>;
};

export type PayloadPreference_Where = {
  readonly AND: InputMaybe<ReadonlyArray<InputMaybe<PayloadPreference_Where_And>>>;
  readonly OR: InputMaybe<ReadonlyArray<InputMaybe<PayloadPreference_Where_Or>>>;
  readonly createdAt: InputMaybe<PayloadPreference_CreatedAt_Operator>;
  readonly id: InputMaybe<PayloadPreference_Id_Operator>;
  readonly key: InputMaybe<PayloadPreference_Key_Operator>;
  readonly updatedAt: InputMaybe<PayloadPreference_UpdatedAt_Operator>;
  readonly user: InputMaybe<PayloadPreference_User_Relation>;
  readonly value: InputMaybe<PayloadPreference_Value_Operator>;
};

export type PayloadPreference_Where_And = {
  readonly AND: InputMaybe<ReadonlyArray<InputMaybe<PayloadPreference_Where_And>>>;
  readonly OR: InputMaybe<ReadonlyArray<InputMaybe<PayloadPreference_Where_Or>>>;
  readonly createdAt: InputMaybe<PayloadPreference_CreatedAt_Operator>;
  readonly id: InputMaybe<PayloadPreference_Id_Operator>;
  readonly key: InputMaybe<PayloadPreference_Key_Operator>;
  readonly updatedAt: InputMaybe<PayloadPreference_UpdatedAt_Operator>;
  readonly user: InputMaybe<PayloadPreference_User_Relation>;
  readonly value: InputMaybe<PayloadPreference_Value_Operator>;
};

export type PayloadPreference_Where_Or = {
  readonly AND: InputMaybe<ReadonlyArray<InputMaybe<PayloadPreference_Where_And>>>;
  readonly OR: InputMaybe<ReadonlyArray<InputMaybe<PayloadPreference_Where_Or>>>;
  readonly createdAt: InputMaybe<PayloadPreference_CreatedAt_Operator>;
  readonly id: InputMaybe<PayloadPreference_Id_Operator>;
  readonly key: InputMaybe<PayloadPreference_Key_Operator>;
  readonly updatedAt: InputMaybe<PayloadPreference_UpdatedAt_Operator>;
  readonly user: InputMaybe<PayloadPreference_User_Relation>;
  readonly value: InputMaybe<PayloadPreference_Value_Operator>;
};

export type PayloadPreferences = {
  readonly __typename?: 'PayloadPreferences';
  readonly docs: ReadonlyArray<PayloadPreference>;
  readonly hasNextPage: Scalars['Boolean']['output'];
  readonly hasPrevPage: Scalars['Boolean']['output'];
  readonly limit: Scalars['Int']['output'];
  readonly nextPage: Maybe<Scalars['Int']['output']>;
  readonly offset: Maybe<Scalars['Int']['output']>;
  readonly page: Scalars['Int']['output'];
  readonly pagingCounter: Scalars['Int']['output'];
  readonly prevPage: Maybe<Scalars['Int']['output']>;
  readonly totalDocs: Scalars['Int']['output'];
  readonly totalPages: Scalars['Int']['output'];
};

export type PayloadPreferencesCreateAccess = {
  readonly __typename?: 'PayloadPreferencesCreateAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadPreferencesCreateDocAccess = {
  readonly __typename?: 'PayloadPreferencesCreateDocAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadPreferencesDeleteAccess = {
  readonly __typename?: 'PayloadPreferencesDeleteAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadPreferencesDeleteDocAccess = {
  readonly __typename?: 'PayloadPreferencesDeleteDocAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadPreferencesDocAccessFields = {
  readonly __typename?: 'PayloadPreferencesDocAccessFields';
  readonly createdAt: Maybe<PayloadPreferencesDocAccessFields_CreatedAt>;
  readonly key: Maybe<PayloadPreferencesDocAccessFields_Key>;
  readonly updatedAt: Maybe<PayloadPreferencesDocAccessFields_UpdatedAt>;
  readonly user: Maybe<PayloadPreferencesDocAccessFields_User>;
  readonly value: Maybe<PayloadPreferencesDocAccessFields_Value>;
};

export type PayloadPreferencesDocAccessFields_CreatedAt = {
  readonly __typename?: 'PayloadPreferencesDocAccessFields_createdAt';
  readonly create: Maybe<PayloadPreferencesDocAccessFields_CreatedAt_Create>;
  readonly delete: Maybe<PayloadPreferencesDocAccessFields_CreatedAt_Delete>;
  readonly read: Maybe<PayloadPreferencesDocAccessFields_CreatedAt_Read>;
  readonly update: Maybe<PayloadPreferencesDocAccessFields_CreatedAt_Update>;
};

export type PayloadPreferencesDocAccessFields_CreatedAt_Create = {
  readonly __typename?: 'PayloadPreferencesDocAccessFields_createdAt_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_CreatedAt_Delete = {
  readonly __typename?: 'PayloadPreferencesDocAccessFields_createdAt_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_CreatedAt_Read = {
  readonly __typename?: 'PayloadPreferencesDocAccessFields_createdAt_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_CreatedAt_Update = {
  readonly __typename?: 'PayloadPreferencesDocAccessFields_createdAt_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_Key = {
  readonly __typename?: 'PayloadPreferencesDocAccessFields_key';
  readonly create: Maybe<PayloadPreferencesDocAccessFields_Key_Create>;
  readonly delete: Maybe<PayloadPreferencesDocAccessFields_Key_Delete>;
  readonly read: Maybe<PayloadPreferencesDocAccessFields_Key_Read>;
  readonly update: Maybe<PayloadPreferencesDocAccessFields_Key_Update>;
};

export type PayloadPreferencesDocAccessFields_Key_Create = {
  readonly __typename?: 'PayloadPreferencesDocAccessFields_key_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_Key_Delete = {
  readonly __typename?: 'PayloadPreferencesDocAccessFields_key_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_Key_Read = {
  readonly __typename?: 'PayloadPreferencesDocAccessFields_key_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_Key_Update = {
  readonly __typename?: 'PayloadPreferencesDocAccessFields_key_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_UpdatedAt = {
  readonly __typename?: 'PayloadPreferencesDocAccessFields_updatedAt';
  readonly create: Maybe<PayloadPreferencesDocAccessFields_UpdatedAt_Create>;
  readonly delete: Maybe<PayloadPreferencesDocAccessFields_UpdatedAt_Delete>;
  readonly read: Maybe<PayloadPreferencesDocAccessFields_UpdatedAt_Read>;
  readonly update: Maybe<PayloadPreferencesDocAccessFields_UpdatedAt_Update>;
};

export type PayloadPreferencesDocAccessFields_UpdatedAt_Create = {
  readonly __typename?: 'PayloadPreferencesDocAccessFields_updatedAt_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_UpdatedAt_Delete = {
  readonly __typename?: 'PayloadPreferencesDocAccessFields_updatedAt_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_UpdatedAt_Read = {
  readonly __typename?: 'PayloadPreferencesDocAccessFields_updatedAt_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_UpdatedAt_Update = {
  readonly __typename?: 'PayloadPreferencesDocAccessFields_updatedAt_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_User = {
  readonly __typename?: 'PayloadPreferencesDocAccessFields_user';
  readonly create: Maybe<PayloadPreferencesDocAccessFields_User_Create>;
  readonly delete: Maybe<PayloadPreferencesDocAccessFields_User_Delete>;
  readonly read: Maybe<PayloadPreferencesDocAccessFields_User_Read>;
  readonly update: Maybe<PayloadPreferencesDocAccessFields_User_Update>;
};

export type PayloadPreferencesDocAccessFields_User_Create = {
  readonly __typename?: 'PayloadPreferencesDocAccessFields_user_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_User_Delete = {
  readonly __typename?: 'PayloadPreferencesDocAccessFields_user_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_User_Read = {
  readonly __typename?: 'PayloadPreferencesDocAccessFields_user_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_User_Update = {
  readonly __typename?: 'PayloadPreferencesDocAccessFields_user_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_Value = {
  readonly __typename?: 'PayloadPreferencesDocAccessFields_value';
  readonly create: Maybe<PayloadPreferencesDocAccessFields_Value_Create>;
  readonly delete: Maybe<PayloadPreferencesDocAccessFields_Value_Delete>;
  readonly read: Maybe<PayloadPreferencesDocAccessFields_Value_Read>;
  readonly update: Maybe<PayloadPreferencesDocAccessFields_Value_Update>;
};

export type PayloadPreferencesDocAccessFields_Value_Create = {
  readonly __typename?: 'PayloadPreferencesDocAccessFields_value_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_Value_Delete = {
  readonly __typename?: 'PayloadPreferencesDocAccessFields_value_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_Value_Read = {
  readonly __typename?: 'PayloadPreferencesDocAccessFields_value_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_Value_Update = {
  readonly __typename?: 'PayloadPreferencesDocAccessFields_value_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields = {
  readonly __typename?: 'PayloadPreferencesFields';
  readonly createdAt: Maybe<PayloadPreferencesFields_CreatedAt>;
  readonly key: Maybe<PayloadPreferencesFields_Key>;
  readonly updatedAt: Maybe<PayloadPreferencesFields_UpdatedAt>;
  readonly user: Maybe<PayloadPreferencesFields_User>;
  readonly value: Maybe<PayloadPreferencesFields_Value>;
};

export type PayloadPreferencesFields_CreatedAt = {
  readonly __typename?: 'PayloadPreferencesFields_createdAt';
  readonly create: Maybe<PayloadPreferencesFields_CreatedAt_Create>;
  readonly delete: Maybe<PayloadPreferencesFields_CreatedAt_Delete>;
  readonly read: Maybe<PayloadPreferencesFields_CreatedAt_Read>;
  readonly update: Maybe<PayloadPreferencesFields_CreatedAt_Update>;
};

export type PayloadPreferencesFields_CreatedAt_Create = {
  readonly __typename?: 'PayloadPreferencesFields_createdAt_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_CreatedAt_Delete = {
  readonly __typename?: 'PayloadPreferencesFields_createdAt_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_CreatedAt_Read = {
  readonly __typename?: 'PayloadPreferencesFields_createdAt_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_CreatedAt_Update = {
  readonly __typename?: 'PayloadPreferencesFields_createdAt_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_Key = {
  readonly __typename?: 'PayloadPreferencesFields_key';
  readonly create: Maybe<PayloadPreferencesFields_Key_Create>;
  readonly delete: Maybe<PayloadPreferencesFields_Key_Delete>;
  readonly read: Maybe<PayloadPreferencesFields_Key_Read>;
  readonly update: Maybe<PayloadPreferencesFields_Key_Update>;
};

export type PayloadPreferencesFields_Key_Create = {
  readonly __typename?: 'PayloadPreferencesFields_key_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_Key_Delete = {
  readonly __typename?: 'PayloadPreferencesFields_key_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_Key_Read = {
  readonly __typename?: 'PayloadPreferencesFields_key_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_Key_Update = {
  readonly __typename?: 'PayloadPreferencesFields_key_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_UpdatedAt = {
  readonly __typename?: 'PayloadPreferencesFields_updatedAt';
  readonly create: Maybe<PayloadPreferencesFields_UpdatedAt_Create>;
  readonly delete: Maybe<PayloadPreferencesFields_UpdatedAt_Delete>;
  readonly read: Maybe<PayloadPreferencesFields_UpdatedAt_Read>;
  readonly update: Maybe<PayloadPreferencesFields_UpdatedAt_Update>;
};

export type PayloadPreferencesFields_UpdatedAt_Create = {
  readonly __typename?: 'PayloadPreferencesFields_updatedAt_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_UpdatedAt_Delete = {
  readonly __typename?: 'PayloadPreferencesFields_updatedAt_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_UpdatedAt_Read = {
  readonly __typename?: 'PayloadPreferencesFields_updatedAt_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_UpdatedAt_Update = {
  readonly __typename?: 'PayloadPreferencesFields_updatedAt_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_User = {
  readonly __typename?: 'PayloadPreferencesFields_user';
  readonly create: Maybe<PayloadPreferencesFields_User_Create>;
  readonly delete: Maybe<PayloadPreferencesFields_User_Delete>;
  readonly read: Maybe<PayloadPreferencesFields_User_Read>;
  readonly update: Maybe<PayloadPreferencesFields_User_Update>;
};

export type PayloadPreferencesFields_User_Create = {
  readonly __typename?: 'PayloadPreferencesFields_user_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_User_Delete = {
  readonly __typename?: 'PayloadPreferencesFields_user_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_User_Read = {
  readonly __typename?: 'PayloadPreferencesFields_user_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_User_Update = {
  readonly __typename?: 'PayloadPreferencesFields_user_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_Value = {
  readonly __typename?: 'PayloadPreferencesFields_value';
  readonly create: Maybe<PayloadPreferencesFields_Value_Create>;
  readonly delete: Maybe<PayloadPreferencesFields_Value_Delete>;
  readonly read: Maybe<PayloadPreferencesFields_Value_Read>;
  readonly update: Maybe<PayloadPreferencesFields_Value_Update>;
};

export type PayloadPreferencesFields_Value_Create = {
  readonly __typename?: 'PayloadPreferencesFields_value_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_Value_Delete = {
  readonly __typename?: 'PayloadPreferencesFields_value_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_Value_Read = {
  readonly __typename?: 'PayloadPreferencesFields_value_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_Value_Update = {
  readonly __typename?: 'PayloadPreferencesFields_value_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesReadAccess = {
  readonly __typename?: 'PayloadPreferencesReadAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadPreferencesReadDocAccess = {
  readonly __typename?: 'PayloadPreferencesReadDocAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadPreferencesUpdateAccess = {
  readonly __typename?: 'PayloadPreferencesUpdateAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadPreferencesUpdateDocAccess = {
  readonly __typename?: 'PayloadPreferencesUpdateDocAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where: Maybe<Scalars['JSONObject']['output']>;
};

export type Post = {
  readonly __typename?: 'Post';
  readonly _status: Maybe<Post__Status>;
  readonly categories: Maybe<ReadonlyArray<Exam>>;
  readonly content: Maybe<Scalars['JSON']['output']>;
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly description: Maybe<Scalars['String']['output']>;
  readonly id: Scalars['Int']['output'];
  readonly image: Maybe<Media>;
  readonly publishedAt: Maybe<Scalars['DateTime']['output']>;
  readonly relatedPosts: Maybe<ReadonlyArray<Post>>;
  readonly slug: Maybe<Scalars['String']['output']>;
  readonly slugLock: Maybe<Scalars['Boolean']['output']>;
  readonly title: Maybe<Scalars['String']['output']>;
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
};


export type PostCategoriesArgs = {
  fallbackLocale: InputMaybe<FallbackLocaleInputType>;
  locale: InputMaybe<LocaleInputType>;
};


export type PostContentArgs = {
  depth: InputMaybe<Scalars['Int']['input']>;
};


export type PostImageArgs = {
  fallbackLocale: InputMaybe<FallbackLocaleInputType>;
  locale: InputMaybe<LocaleInputType>;
};


export type PostRelatedPostsArgs = {
  draft: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale: InputMaybe<FallbackLocaleInputType>;
  locale: InputMaybe<LocaleInputType>;
};

export type PostUpdate__Status_MutationInput =
  | 'draft'
  | 'published';

export type PostVersion = {
  readonly __typename?: 'PostVersion';
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly id: Maybe<Scalars['Int']['output']>;
  readonly latest: Maybe<Scalars['Boolean']['output']>;
  readonly parent: Maybe<Post>;
  readonly publishedLocale: Maybe<PostVersion_PublishedLocale>;
  readonly snapshot: Maybe<Scalars['Boolean']['output']>;
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
  readonly version: Maybe<PostVersion_Version>;
};


export type PostVersionParentArgs = {
  draft: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale: InputMaybe<FallbackLocaleInputType>;
  locale: InputMaybe<LocaleInputType>;
};

export type PostVersion_Version = {
  readonly __typename?: 'PostVersion_Version';
  readonly _status: Maybe<PostVersion_Version__Status>;
  readonly categories: Maybe<ReadonlyArray<Exam>>;
  readonly content: Maybe<Scalars['JSON']['output']>;
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly description: Maybe<Scalars['String']['output']>;
  readonly image: Maybe<Media>;
  readonly publishedAt: Maybe<Scalars['DateTime']['output']>;
  readonly relatedPosts: Maybe<ReadonlyArray<Post>>;
  readonly slug: Maybe<Scalars['String']['output']>;
  readonly slugLock: Maybe<Scalars['Boolean']['output']>;
  readonly title: Maybe<Scalars['String']['output']>;
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
};


export type PostVersion_VersionCategoriesArgs = {
  fallbackLocale: InputMaybe<FallbackLocaleInputType>;
  locale: InputMaybe<LocaleInputType>;
};


export type PostVersion_VersionContentArgs = {
  depth: InputMaybe<Scalars['Int']['input']>;
};


export type PostVersion_VersionImageArgs = {
  fallbackLocale: InputMaybe<FallbackLocaleInputType>;
  locale: InputMaybe<LocaleInputType>;
};


export type PostVersion_VersionRelatedPostsArgs = {
  draft: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale: InputMaybe<FallbackLocaleInputType>;
  locale: InputMaybe<LocaleInputType>;
};

export type PostVersion_Version__Status =
  | 'draft'
  | 'published';

export type PostVersion_PublishedLocale =
  | 'en'
  | 'ru';

export type Post__Status =
  | 'draft'
  | 'published';

export type Post__Status_Input =
  | 'draft'
  | 'published';

export type Post__Status_MutationInput =
  | 'draft'
  | 'published';

export type Post__Status_Operator = {
  readonly all: InputMaybe<ReadonlyArray<InputMaybe<Post__Status_Input>>>;
  readonly equals: InputMaybe<Post__Status_Input>;
  readonly exists: InputMaybe<Scalars['Boolean']['input']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Post__Status_Input>>>;
  readonly not_equals: InputMaybe<Post__Status_Input>;
  readonly not_in: InputMaybe<ReadonlyArray<InputMaybe<Post__Status_Input>>>;
};

export type Post_Categories_Operator = {
  readonly all: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']['input']>>>;
  readonly equals: InputMaybe<Scalars['JSON']['input']>;
  readonly exists: InputMaybe<Scalars['Boolean']['input']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']['input']>>>;
  readonly not_equals: InputMaybe<Scalars['JSON']['input']>;
  readonly not_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']['input']>>>;
};

export type Post_Content_Operator = {
  readonly contains: InputMaybe<Scalars['JSON']['input']>;
  readonly equals: InputMaybe<Scalars['JSON']['input']>;
  readonly like: InputMaybe<Scalars['JSON']['input']>;
  readonly not_equals: InputMaybe<Scalars['JSON']['input']>;
};

export type Post_CreatedAt_Operator = {
  readonly equals: InputMaybe<Scalars['DateTime']['input']>;
  readonly exists: InputMaybe<Scalars['Boolean']['input']>;
  readonly greater_than: InputMaybe<Scalars['DateTime']['input']>;
  readonly greater_than_equal: InputMaybe<Scalars['DateTime']['input']>;
  readonly less_than: InputMaybe<Scalars['DateTime']['input']>;
  readonly less_than_equal: InputMaybe<Scalars['DateTime']['input']>;
  readonly like: InputMaybe<Scalars['DateTime']['input']>;
  readonly not_equals: InputMaybe<Scalars['DateTime']['input']>;
};

export type Post_Description_Operator = {
  readonly all: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly contains: InputMaybe<Scalars['String']['input']>;
  readonly equals: InputMaybe<Scalars['String']['input']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly like: InputMaybe<Scalars['String']['input']>;
  readonly not_equals: InputMaybe<Scalars['String']['input']>;
  readonly not_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type Post_Id_Operator = {
  readonly equals: InputMaybe<Scalars['Int']['input']>;
  readonly exists: InputMaybe<Scalars['Boolean']['input']>;
  readonly greater_than: InputMaybe<Scalars['Int']['input']>;
  readonly greater_than_equal: InputMaybe<Scalars['Int']['input']>;
  readonly less_than: InputMaybe<Scalars['Int']['input']>;
  readonly less_than_equal: InputMaybe<Scalars['Int']['input']>;
  readonly not_equals: InputMaybe<Scalars['Int']['input']>;
};

export type Post_Image_Operator = {
  readonly all: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']['input']>>>;
  readonly equals: InputMaybe<Scalars['JSON']['input']>;
  readonly exists: InputMaybe<Scalars['Boolean']['input']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']['input']>>>;
  readonly not_equals: InputMaybe<Scalars['JSON']['input']>;
  readonly not_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']['input']>>>;
};

export type Post_PublishedAt_Operator = {
  readonly equals: InputMaybe<Scalars['DateTime']['input']>;
  readonly exists: InputMaybe<Scalars['Boolean']['input']>;
  readonly greater_than: InputMaybe<Scalars['DateTime']['input']>;
  readonly greater_than_equal: InputMaybe<Scalars['DateTime']['input']>;
  readonly less_than: InputMaybe<Scalars['DateTime']['input']>;
  readonly less_than_equal: InputMaybe<Scalars['DateTime']['input']>;
  readonly like: InputMaybe<Scalars['DateTime']['input']>;
  readonly not_equals: InputMaybe<Scalars['DateTime']['input']>;
};

export type Post_RelatedPosts_Operator = {
  readonly all: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']['input']>>>;
  readonly equals: InputMaybe<Scalars['JSON']['input']>;
  readonly exists: InputMaybe<Scalars['Boolean']['input']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']['input']>>>;
  readonly not_equals: InputMaybe<Scalars['JSON']['input']>;
  readonly not_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']['input']>>>;
};

export type Post_SlugLock_Operator = {
  readonly equals: InputMaybe<Scalars['Boolean']['input']>;
  readonly exists: InputMaybe<Scalars['Boolean']['input']>;
  readonly not_equals: InputMaybe<Scalars['Boolean']['input']>;
};

export type Post_Slug_Operator = {
  readonly all: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly contains: InputMaybe<Scalars['String']['input']>;
  readonly equals: InputMaybe<Scalars['String']['input']>;
  readonly exists: InputMaybe<Scalars['Boolean']['input']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly like: InputMaybe<Scalars['String']['input']>;
  readonly not_equals: InputMaybe<Scalars['String']['input']>;
  readonly not_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type Post_Title_Operator = {
  readonly all: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly contains: InputMaybe<Scalars['String']['input']>;
  readonly equals: InputMaybe<Scalars['String']['input']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly like: InputMaybe<Scalars['String']['input']>;
  readonly not_equals: InputMaybe<Scalars['String']['input']>;
  readonly not_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type Post_UpdatedAt_Operator = {
  readonly equals: InputMaybe<Scalars['DateTime']['input']>;
  readonly exists: InputMaybe<Scalars['Boolean']['input']>;
  readonly greater_than: InputMaybe<Scalars['DateTime']['input']>;
  readonly greater_than_equal: InputMaybe<Scalars['DateTime']['input']>;
  readonly less_than: InputMaybe<Scalars['DateTime']['input']>;
  readonly less_than_equal: InputMaybe<Scalars['DateTime']['input']>;
  readonly like: InputMaybe<Scalars['DateTime']['input']>;
  readonly not_equals: InputMaybe<Scalars['DateTime']['input']>;
};

export type Post_Where = {
  readonly AND: InputMaybe<ReadonlyArray<InputMaybe<Post_Where_And>>>;
  readonly OR: InputMaybe<ReadonlyArray<InputMaybe<Post_Where_Or>>>;
  readonly _status: InputMaybe<Post__Status_Operator>;
  readonly categories: InputMaybe<Post_Categories_Operator>;
  readonly content: InputMaybe<Post_Content_Operator>;
  readonly createdAt: InputMaybe<Post_CreatedAt_Operator>;
  readonly description: InputMaybe<Post_Description_Operator>;
  readonly id: InputMaybe<Post_Id_Operator>;
  readonly image: InputMaybe<Post_Image_Operator>;
  readonly publishedAt: InputMaybe<Post_PublishedAt_Operator>;
  readonly relatedPosts: InputMaybe<Post_RelatedPosts_Operator>;
  readonly slug: InputMaybe<Post_Slug_Operator>;
  readonly slugLock: InputMaybe<Post_SlugLock_Operator>;
  readonly title: InputMaybe<Post_Title_Operator>;
  readonly updatedAt: InputMaybe<Post_UpdatedAt_Operator>;
};

export type Post_Where_And = {
  readonly AND: InputMaybe<ReadonlyArray<InputMaybe<Post_Where_And>>>;
  readonly OR: InputMaybe<ReadonlyArray<InputMaybe<Post_Where_Or>>>;
  readonly _status: InputMaybe<Post__Status_Operator>;
  readonly categories: InputMaybe<Post_Categories_Operator>;
  readonly content: InputMaybe<Post_Content_Operator>;
  readonly createdAt: InputMaybe<Post_CreatedAt_Operator>;
  readonly description: InputMaybe<Post_Description_Operator>;
  readonly id: InputMaybe<Post_Id_Operator>;
  readonly image: InputMaybe<Post_Image_Operator>;
  readonly publishedAt: InputMaybe<Post_PublishedAt_Operator>;
  readonly relatedPosts: InputMaybe<Post_RelatedPosts_Operator>;
  readonly slug: InputMaybe<Post_Slug_Operator>;
  readonly slugLock: InputMaybe<Post_SlugLock_Operator>;
  readonly title: InputMaybe<Post_Title_Operator>;
  readonly updatedAt: InputMaybe<Post_UpdatedAt_Operator>;
};

export type Post_Where_Or = {
  readonly AND: InputMaybe<ReadonlyArray<InputMaybe<Post_Where_And>>>;
  readonly OR: InputMaybe<ReadonlyArray<InputMaybe<Post_Where_Or>>>;
  readonly _status: InputMaybe<Post__Status_Operator>;
  readonly categories: InputMaybe<Post_Categories_Operator>;
  readonly content: InputMaybe<Post_Content_Operator>;
  readonly createdAt: InputMaybe<Post_CreatedAt_Operator>;
  readonly description: InputMaybe<Post_Description_Operator>;
  readonly id: InputMaybe<Post_Id_Operator>;
  readonly image: InputMaybe<Post_Image_Operator>;
  readonly publishedAt: InputMaybe<Post_PublishedAt_Operator>;
  readonly relatedPosts: InputMaybe<Post_RelatedPosts_Operator>;
  readonly slug: InputMaybe<Post_Slug_Operator>;
  readonly slugLock: InputMaybe<Post_SlugLock_Operator>;
  readonly title: InputMaybe<Post_Title_Operator>;
  readonly updatedAt: InputMaybe<Post_UpdatedAt_Operator>;
};

export type Posts = {
  readonly __typename?: 'Posts';
  readonly docs: ReadonlyArray<Post>;
  readonly hasNextPage: Scalars['Boolean']['output'];
  readonly hasPrevPage: Scalars['Boolean']['output'];
  readonly limit: Scalars['Int']['output'];
  readonly nextPage: Maybe<Scalars['Int']['output']>;
  readonly offset: Maybe<Scalars['Int']['output']>;
  readonly page: Scalars['Int']['output'];
  readonly pagingCounter: Scalars['Int']['output'];
  readonly prevPage: Maybe<Scalars['Int']['output']>;
  readonly totalDocs: Scalars['Int']['output'];
  readonly totalPages: Scalars['Int']['output'];
};

export type PostsCreateAccess = {
  readonly __typename?: 'PostsCreateAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where: Maybe<Scalars['JSONObject']['output']>;
};

export type PostsCreateDocAccess = {
  readonly __typename?: 'PostsCreateDocAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where: Maybe<Scalars['JSONObject']['output']>;
};

export type PostsDeleteAccess = {
  readonly __typename?: 'PostsDeleteAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where: Maybe<Scalars['JSONObject']['output']>;
};

export type PostsDeleteDocAccess = {
  readonly __typename?: 'PostsDeleteDocAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where: Maybe<Scalars['JSONObject']['output']>;
};

export type PostsDocAccessFields = {
  readonly __typename?: 'PostsDocAccessFields';
  readonly _status: Maybe<PostsDocAccessFields__Status>;
  readonly categories: Maybe<PostsDocAccessFields_Categories>;
  readonly content: Maybe<PostsDocAccessFields_Content>;
  readonly createdAt: Maybe<PostsDocAccessFields_CreatedAt>;
  readonly description: Maybe<PostsDocAccessFields_Description>;
  readonly image: Maybe<PostsDocAccessFields_Image>;
  readonly publishedAt: Maybe<PostsDocAccessFields_PublishedAt>;
  readonly relatedPosts: Maybe<PostsDocAccessFields_RelatedPosts>;
  readonly slug: Maybe<PostsDocAccessFields_Slug>;
  readonly slugLock: Maybe<PostsDocAccessFields_SlugLock>;
  readonly title: Maybe<PostsDocAccessFields_Title>;
  readonly updatedAt: Maybe<PostsDocAccessFields_UpdatedAt>;
};

export type PostsDocAccessFields__Status = {
  readonly __typename?: 'PostsDocAccessFields__status';
  readonly create: Maybe<PostsDocAccessFields__Status_Create>;
  readonly delete: Maybe<PostsDocAccessFields__Status_Delete>;
  readonly read: Maybe<PostsDocAccessFields__Status_Read>;
  readonly update: Maybe<PostsDocAccessFields__Status_Update>;
};

export type PostsDocAccessFields__Status_Create = {
  readonly __typename?: 'PostsDocAccessFields__status_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields__Status_Delete = {
  readonly __typename?: 'PostsDocAccessFields__status_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields__Status_Read = {
  readonly __typename?: 'PostsDocAccessFields__status_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields__Status_Update = {
  readonly __typename?: 'PostsDocAccessFields__status_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_Categories = {
  readonly __typename?: 'PostsDocAccessFields_categories';
  readonly create: Maybe<PostsDocAccessFields_Categories_Create>;
  readonly delete: Maybe<PostsDocAccessFields_Categories_Delete>;
  readonly read: Maybe<PostsDocAccessFields_Categories_Read>;
  readonly update: Maybe<PostsDocAccessFields_Categories_Update>;
};

export type PostsDocAccessFields_Categories_Create = {
  readonly __typename?: 'PostsDocAccessFields_categories_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_Categories_Delete = {
  readonly __typename?: 'PostsDocAccessFields_categories_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_Categories_Read = {
  readonly __typename?: 'PostsDocAccessFields_categories_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_Categories_Update = {
  readonly __typename?: 'PostsDocAccessFields_categories_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_Content = {
  readonly __typename?: 'PostsDocAccessFields_content';
  readonly create: Maybe<PostsDocAccessFields_Content_Create>;
  readonly delete: Maybe<PostsDocAccessFields_Content_Delete>;
  readonly read: Maybe<PostsDocAccessFields_Content_Read>;
  readonly update: Maybe<PostsDocAccessFields_Content_Update>;
};

export type PostsDocAccessFields_Content_Create = {
  readonly __typename?: 'PostsDocAccessFields_content_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_Content_Delete = {
  readonly __typename?: 'PostsDocAccessFields_content_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_Content_Read = {
  readonly __typename?: 'PostsDocAccessFields_content_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_Content_Update = {
  readonly __typename?: 'PostsDocAccessFields_content_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_CreatedAt = {
  readonly __typename?: 'PostsDocAccessFields_createdAt';
  readonly create: Maybe<PostsDocAccessFields_CreatedAt_Create>;
  readonly delete: Maybe<PostsDocAccessFields_CreatedAt_Delete>;
  readonly read: Maybe<PostsDocAccessFields_CreatedAt_Read>;
  readonly update: Maybe<PostsDocAccessFields_CreatedAt_Update>;
};

export type PostsDocAccessFields_CreatedAt_Create = {
  readonly __typename?: 'PostsDocAccessFields_createdAt_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_CreatedAt_Delete = {
  readonly __typename?: 'PostsDocAccessFields_createdAt_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_CreatedAt_Read = {
  readonly __typename?: 'PostsDocAccessFields_createdAt_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_CreatedAt_Update = {
  readonly __typename?: 'PostsDocAccessFields_createdAt_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_Description = {
  readonly __typename?: 'PostsDocAccessFields_description';
  readonly create: Maybe<PostsDocAccessFields_Description_Create>;
  readonly delete: Maybe<PostsDocAccessFields_Description_Delete>;
  readonly read: Maybe<PostsDocAccessFields_Description_Read>;
  readonly update: Maybe<PostsDocAccessFields_Description_Update>;
};

export type PostsDocAccessFields_Description_Create = {
  readonly __typename?: 'PostsDocAccessFields_description_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_Description_Delete = {
  readonly __typename?: 'PostsDocAccessFields_description_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_Description_Read = {
  readonly __typename?: 'PostsDocAccessFields_description_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_Description_Update = {
  readonly __typename?: 'PostsDocAccessFields_description_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_Image = {
  readonly __typename?: 'PostsDocAccessFields_image';
  readonly create: Maybe<PostsDocAccessFields_Image_Create>;
  readonly delete: Maybe<PostsDocAccessFields_Image_Delete>;
  readonly read: Maybe<PostsDocAccessFields_Image_Read>;
  readonly update: Maybe<PostsDocAccessFields_Image_Update>;
};

export type PostsDocAccessFields_Image_Create = {
  readonly __typename?: 'PostsDocAccessFields_image_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_Image_Delete = {
  readonly __typename?: 'PostsDocAccessFields_image_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_Image_Read = {
  readonly __typename?: 'PostsDocAccessFields_image_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_Image_Update = {
  readonly __typename?: 'PostsDocAccessFields_image_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_PublishedAt = {
  readonly __typename?: 'PostsDocAccessFields_publishedAt';
  readonly create: Maybe<PostsDocAccessFields_PublishedAt_Create>;
  readonly delete: Maybe<PostsDocAccessFields_PublishedAt_Delete>;
  readonly read: Maybe<PostsDocAccessFields_PublishedAt_Read>;
  readonly update: Maybe<PostsDocAccessFields_PublishedAt_Update>;
};

export type PostsDocAccessFields_PublishedAt_Create = {
  readonly __typename?: 'PostsDocAccessFields_publishedAt_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_PublishedAt_Delete = {
  readonly __typename?: 'PostsDocAccessFields_publishedAt_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_PublishedAt_Read = {
  readonly __typename?: 'PostsDocAccessFields_publishedAt_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_PublishedAt_Update = {
  readonly __typename?: 'PostsDocAccessFields_publishedAt_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_RelatedPosts = {
  readonly __typename?: 'PostsDocAccessFields_relatedPosts';
  readonly create: Maybe<PostsDocAccessFields_RelatedPosts_Create>;
  readonly delete: Maybe<PostsDocAccessFields_RelatedPosts_Delete>;
  readonly read: Maybe<PostsDocAccessFields_RelatedPosts_Read>;
  readonly update: Maybe<PostsDocAccessFields_RelatedPosts_Update>;
};

export type PostsDocAccessFields_RelatedPosts_Create = {
  readonly __typename?: 'PostsDocAccessFields_relatedPosts_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_RelatedPosts_Delete = {
  readonly __typename?: 'PostsDocAccessFields_relatedPosts_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_RelatedPosts_Read = {
  readonly __typename?: 'PostsDocAccessFields_relatedPosts_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_RelatedPosts_Update = {
  readonly __typename?: 'PostsDocAccessFields_relatedPosts_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_Slug = {
  readonly __typename?: 'PostsDocAccessFields_slug';
  readonly create: Maybe<PostsDocAccessFields_Slug_Create>;
  readonly delete: Maybe<PostsDocAccessFields_Slug_Delete>;
  readonly read: Maybe<PostsDocAccessFields_Slug_Read>;
  readonly update: Maybe<PostsDocAccessFields_Slug_Update>;
};

export type PostsDocAccessFields_SlugLock = {
  readonly __typename?: 'PostsDocAccessFields_slugLock';
  readonly create: Maybe<PostsDocAccessFields_SlugLock_Create>;
  readonly delete: Maybe<PostsDocAccessFields_SlugLock_Delete>;
  readonly read: Maybe<PostsDocAccessFields_SlugLock_Read>;
  readonly update: Maybe<PostsDocAccessFields_SlugLock_Update>;
};

export type PostsDocAccessFields_SlugLock_Create = {
  readonly __typename?: 'PostsDocAccessFields_slugLock_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_SlugLock_Delete = {
  readonly __typename?: 'PostsDocAccessFields_slugLock_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_SlugLock_Read = {
  readonly __typename?: 'PostsDocAccessFields_slugLock_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_SlugLock_Update = {
  readonly __typename?: 'PostsDocAccessFields_slugLock_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_Slug_Create = {
  readonly __typename?: 'PostsDocAccessFields_slug_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_Slug_Delete = {
  readonly __typename?: 'PostsDocAccessFields_slug_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_Slug_Read = {
  readonly __typename?: 'PostsDocAccessFields_slug_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_Slug_Update = {
  readonly __typename?: 'PostsDocAccessFields_slug_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_Title = {
  readonly __typename?: 'PostsDocAccessFields_title';
  readonly create: Maybe<PostsDocAccessFields_Title_Create>;
  readonly delete: Maybe<PostsDocAccessFields_Title_Delete>;
  readonly read: Maybe<PostsDocAccessFields_Title_Read>;
  readonly update: Maybe<PostsDocAccessFields_Title_Update>;
};

export type PostsDocAccessFields_Title_Create = {
  readonly __typename?: 'PostsDocAccessFields_title_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_Title_Delete = {
  readonly __typename?: 'PostsDocAccessFields_title_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_Title_Read = {
  readonly __typename?: 'PostsDocAccessFields_title_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_Title_Update = {
  readonly __typename?: 'PostsDocAccessFields_title_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_UpdatedAt = {
  readonly __typename?: 'PostsDocAccessFields_updatedAt';
  readonly create: Maybe<PostsDocAccessFields_UpdatedAt_Create>;
  readonly delete: Maybe<PostsDocAccessFields_UpdatedAt_Delete>;
  readonly read: Maybe<PostsDocAccessFields_UpdatedAt_Read>;
  readonly update: Maybe<PostsDocAccessFields_UpdatedAt_Update>;
};

export type PostsDocAccessFields_UpdatedAt_Create = {
  readonly __typename?: 'PostsDocAccessFields_updatedAt_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_UpdatedAt_Delete = {
  readonly __typename?: 'PostsDocAccessFields_updatedAt_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_UpdatedAt_Read = {
  readonly __typename?: 'PostsDocAccessFields_updatedAt_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_UpdatedAt_Update = {
  readonly __typename?: 'PostsDocAccessFields_updatedAt_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type PostsFields = {
  readonly __typename?: 'PostsFields';
  readonly _status: Maybe<PostsFields__Status>;
  readonly categories: Maybe<PostsFields_Categories>;
  readonly content: Maybe<PostsFields_Content>;
  readonly createdAt: Maybe<PostsFields_CreatedAt>;
  readonly description: Maybe<PostsFields_Description>;
  readonly image: Maybe<PostsFields_Image>;
  readonly publishedAt: Maybe<PostsFields_PublishedAt>;
  readonly relatedPosts: Maybe<PostsFields_RelatedPosts>;
  readonly slug: Maybe<PostsFields_Slug>;
  readonly slugLock: Maybe<PostsFields_SlugLock>;
  readonly title: Maybe<PostsFields_Title>;
  readonly updatedAt: Maybe<PostsFields_UpdatedAt>;
};

export type PostsFields__Status = {
  readonly __typename?: 'PostsFields__status';
  readonly create: Maybe<PostsFields__Status_Create>;
  readonly delete: Maybe<PostsFields__Status_Delete>;
  readonly read: Maybe<PostsFields__Status_Read>;
  readonly update: Maybe<PostsFields__Status_Update>;
};

export type PostsFields__Status_Create = {
  readonly __typename?: 'PostsFields__status_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type PostsFields__Status_Delete = {
  readonly __typename?: 'PostsFields__status_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type PostsFields__Status_Read = {
  readonly __typename?: 'PostsFields__status_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type PostsFields__Status_Update = {
  readonly __typename?: 'PostsFields__status_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type PostsFields_Categories = {
  readonly __typename?: 'PostsFields_categories';
  readonly create: Maybe<PostsFields_Categories_Create>;
  readonly delete: Maybe<PostsFields_Categories_Delete>;
  readonly read: Maybe<PostsFields_Categories_Read>;
  readonly update: Maybe<PostsFields_Categories_Update>;
};

export type PostsFields_Categories_Create = {
  readonly __typename?: 'PostsFields_categories_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type PostsFields_Categories_Delete = {
  readonly __typename?: 'PostsFields_categories_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type PostsFields_Categories_Read = {
  readonly __typename?: 'PostsFields_categories_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type PostsFields_Categories_Update = {
  readonly __typename?: 'PostsFields_categories_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type PostsFields_Content = {
  readonly __typename?: 'PostsFields_content';
  readonly create: Maybe<PostsFields_Content_Create>;
  readonly delete: Maybe<PostsFields_Content_Delete>;
  readonly read: Maybe<PostsFields_Content_Read>;
  readonly update: Maybe<PostsFields_Content_Update>;
};

export type PostsFields_Content_Create = {
  readonly __typename?: 'PostsFields_content_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type PostsFields_Content_Delete = {
  readonly __typename?: 'PostsFields_content_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type PostsFields_Content_Read = {
  readonly __typename?: 'PostsFields_content_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type PostsFields_Content_Update = {
  readonly __typename?: 'PostsFields_content_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type PostsFields_CreatedAt = {
  readonly __typename?: 'PostsFields_createdAt';
  readonly create: Maybe<PostsFields_CreatedAt_Create>;
  readonly delete: Maybe<PostsFields_CreatedAt_Delete>;
  readonly read: Maybe<PostsFields_CreatedAt_Read>;
  readonly update: Maybe<PostsFields_CreatedAt_Update>;
};

export type PostsFields_CreatedAt_Create = {
  readonly __typename?: 'PostsFields_createdAt_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type PostsFields_CreatedAt_Delete = {
  readonly __typename?: 'PostsFields_createdAt_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type PostsFields_CreatedAt_Read = {
  readonly __typename?: 'PostsFields_createdAt_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type PostsFields_CreatedAt_Update = {
  readonly __typename?: 'PostsFields_createdAt_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type PostsFields_Description = {
  readonly __typename?: 'PostsFields_description';
  readonly create: Maybe<PostsFields_Description_Create>;
  readonly delete: Maybe<PostsFields_Description_Delete>;
  readonly read: Maybe<PostsFields_Description_Read>;
  readonly update: Maybe<PostsFields_Description_Update>;
};

export type PostsFields_Description_Create = {
  readonly __typename?: 'PostsFields_description_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type PostsFields_Description_Delete = {
  readonly __typename?: 'PostsFields_description_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type PostsFields_Description_Read = {
  readonly __typename?: 'PostsFields_description_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type PostsFields_Description_Update = {
  readonly __typename?: 'PostsFields_description_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type PostsFields_Image = {
  readonly __typename?: 'PostsFields_image';
  readonly create: Maybe<PostsFields_Image_Create>;
  readonly delete: Maybe<PostsFields_Image_Delete>;
  readonly read: Maybe<PostsFields_Image_Read>;
  readonly update: Maybe<PostsFields_Image_Update>;
};

export type PostsFields_Image_Create = {
  readonly __typename?: 'PostsFields_image_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type PostsFields_Image_Delete = {
  readonly __typename?: 'PostsFields_image_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type PostsFields_Image_Read = {
  readonly __typename?: 'PostsFields_image_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type PostsFields_Image_Update = {
  readonly __typename?: 'PostsFields_image_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type PostsFields_PublishedAt = {
  readonly __typename?: 'PostsFields_publishedAt';
  readonly create: Maybe<PostsFields_PublishedAt_Create>;
  readonly delete: Maybe<PostsFields_PublishedAt_Delete>;
  readonly read: Maybe<PostsFields_PublishedAt_Read>;
  readonly update: Maybe<PostsFields_PublishedAt_Update>;
};

export type PostsFields_PublishedAt_Create = {
  readonly __typename?: 'PostsFields_publishedAt_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type PostsFields_PublishedAt_Delete = {
  readonly __typename?: 'PostsFields_publishedAt_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type PostsFields_PublishedAt_Read = {
  readonly __typename?: 'PostsFields_publishedAt_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type PostsFields_PublishedAt_Update = {
  readonly __typename?: 'PostsFields_publishedAt_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type PostsFields_RelatedPosts = {
  readonly __typename?: 'PostsFields_relatedPosts';
  readonly create: Maybe<PostsFields_RelatedPosts_Create>;
  readonly delete: Maybe<PostsFields_RelatedPosts_Delete>;
  readonly read: Maybe<PostsFields_RelatedPosts_Read>;
  readonly update: Maybe<PostsFields_RelatedPosts_Update>;
};

export type PostsFields_RelatedPosts_Create = {
  readonly __typename?: 'PostsFields_relatedPosts_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type PostsFields_RelatedPosts_Delete = {
  readonly __typename?: 'PostsFields_relatedPosts_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type PostsFields_RelatedPosts_Read = {
  readonly __typename?: 'PostsFields_relatedPosts_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type PostsFields_RelatedPosts_Update = {
  readonly __typename?: 'PostsFields_relatedPosts_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type PostsFields_Slug = {
  readonly __typename?: 'PostsFields_slug';
  readonly create: Maybe<PostsFields_Slug_Create>;
  readonly delete: Maybe<PostsFields_Slug_Delete>;
  readonly read: Maybe<PostsFields_Slug_Read>;
  readonly update: Maybe<PostsFields_Slug_Update>;
};

export type PostsFields_SlugLock = {
  readonly __typename?: 'PostsFields_slugLock';
  readonly create: Maybe<PostsFields_SlugLock_Create>;
  readonly delete: Maybe<PostsFields_SlugLock_Delete>;
  readonly read: Maybe<PostsFields_SlugLock_Read>;
  readonly update: Maybe<PostsFields_SlugLock_Update>;
};

export type PostsFields_SlugLock_Create = {
  readonly __typename?: 'PostsFields_slugLock_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type PostsFields_SlugLock_Delete = {
  readonly __typename?: 'PostsFields_slugLock_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type PostsFields_SlugLock_Read = {
  readonly __typename?: 'PostsFields_slugLock_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type PostsFields_SlugLock_Update = {
  readonly __typename?: 'PostsFields_slugLock_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type PostsFields_Slug_Create = {
  readonly __typename?: 'PostsFields_slug_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type PostsFields_Slug_Delete = {
  readonly __typename?: 'PostsFields_slug_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type PostsFields_Slug_Read = {
  readonly __typename?: 'PostsFields_slug_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type PostsFields_Slug_Update = {
  readonly __typename?: 'PostsFields_slug_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type PostsFields_Title = {
  readonly __typename?: 'PostsFields_title';
  readonly create: Maybe<PostsFields_Title_Create>;
  readonly delete: Maybe<PostsFields_Title_Delete>;
  readonly read: Maybe<PostsFields_Title_Read>;
  readonly update: Maybe<PostsFields_Title_Update>;
};

export type PostsFields_Title_Create = {
  readonly __typename?: 'PostsFields_title_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type PostsFields_Title_Delete = {
  readonly __typename?: 'PostsFields_title_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type PostsFields_Title_Read = {
  readonly __typename?: 'PostsFields_title_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type PostsFields_Title_Update = {
  readonly __typename?: 'PostsFields_title_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type PostsFields_UpdatedAt = {
  readonly __typename?: 'PostsFields_updatedAt';
  readonly create: Maybe<PostsFields_UpdatedAt_Create>;
  readonly delete: Maybe<PostsFields_UpdatedAt_Delete>;
  readonly read: Maybe<PostsFields_UpdatedAt_Read>;
  readonly update: Maybe<PostsFields_UpdatedAt_Update>;
};

export type PostsFields_UpdatedAt_Create = {
  readonly __typename?: 'PostsFields_updatedAt_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type PostsFields_UpdatedAt_Delete = {
  readonly __typename?: 'PostsFields_updatedAt_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type PostsFields_UpdatedAt_Read = {
  readonly __typename?: 'PostsFields_updatedAt_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type PostsFields_UpdatedAt_Update = {
  readonly __typename?: 'PostsFields_updatedAt_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type PostsReadAccess = {
  readonly __typename?: 'PostsReadAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where: Maybe<Scalars['JSONObject']['output']>;
};

export type PostsReadDocAccess = {
  readonly __typename?: 'PostsReadDocAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where: Maybe<Scalars['JSONObject']['output']>;
};

export type PostsReadVersionsAccess = {
  readonly __typename?: 'PostsReadVersionsAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where: Maybe<Scalars['JSONObject']['output']>;
};

export type PostsReadVersionsDocAccess = {
  readonly __typename?: 'PostsReadVersionsDocAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where: Maybe<Scalars['JSONObject']['output']>;
};

export type PostsUpdateAccess = {
  readonly __typename?: 'PostsUpdateAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where: Maybe<Scalars['JSONObject']['output']>;
};

export type PostsUpdateDocAccess = {
  readonly __typename?: 'PostsUpdateDocAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where: Maybe<Scalars['JSONObject']['output']>;
};

export type Purchase = {
  readonly __typename?: 'Purchase';
  readonly course: Course;
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly expiresAt: Maybe<Scalars['DateTime']['output']>;
  readonly id: Scalars['Int']['output'];
  readonly pricePaid: Scalars['Float']['output'];
  readonly purchasedAt: Maybe<Scalars['DateTime']['output']>;
  readonly status: Maybe<Purchase_Status>;
  readonly tariff: Tariff;
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
  readonly user: User;
};


export type PurchaseCourseArgs = {
  fallbackLocale: InputMaybe<FallbackLocaleInputType>;
  locale: InputMaybe<LocaleInputType>;
};


export type PurchaseTariffArgs = {
  fallbackLocale: InputMaybe<FallbackLocaleInputType>;
  locale: InputMaybe<LocaleInputType>;
};


export type PurchaseUserArgs = {
  fallbackLocale: InputMaybe<FallbackLocaleInputType>;
  locale: InputMaybe<LocaleInputType>;
};

export type PurchaseUpdate_Status_MutationInput =
  | 'active'
  | 'inactive';

export type Purchase_Course_Operator = {
  readonly all: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']['input']>>>;
  readonly equals: InputMaybe<Scalars['JSON']['input']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']['input']>>>;
  readonly not_equals: InputMaybe<Scalars['JSON']['input']>;
  readonly not_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']['input']>>>;
};

export type Purchase_CreatedAt_Operator = {
  readonly equals: InputMaybe<Scalars['DateTime']['input']>;
  readonly exists: InputMaybe<Scalars['Boolean']['input']>;
  readonly greater_than: InputMaybe<Scalars['DateTime']['input']>;
  readonly greater_than_equal: InputMaybe<Scalars['DateTime']['input']>;
  readonly less_than: InputMaybe<Scalars['DateTime']['input']>;
  readonly less_than_equal: InputMaybe<Scalars['DateTime']['input']>;
  readonly like: InputMaybe<Scalars['DateTime']['input']>;
  readonly not_equals: InputMaybe<Scalars['DateTime']['input']>;
};

export type Purchase_ExpiresAt_Operator = {
  readonly equals: InputMaybe<Scalars['DateTime']['input']>;
  readonly exists: InputMaybe<Scalars['Boolean']['input']>;
  readonly greater_than: InputMaybe<Scalars['DateTime']['input']>;
  readonly greater_than_equal: InputMaybe<Scalars['DateTime']['input']>;
  readonly less_than: InputMaybe<Scalars['DateTime']['input']>;
  readonly less_than_equal: InputMaybe<Scalars['DateTime']['input']>;
  readonly like: InputMaybe<Scalars['DateTime']['input']>;
  readonly not_equals: InputMaybe<Scalars['DateTime']['input']>;
};

export type Purchase_Id_Operator = {
  readonly equals: InputMaybe<Scalars['Int']['input']>;
  readonly exists: InputMaybe<Scalars['Boolean']['input']>;
  readonly greater_than: InputMaybe<Scalars['Int']['input']>;
  readonly greater_than_equal: InputMaybe<Scalars['Int']['input']>;
  readonly less_than: InputMaybe<Scalars['Int']['input']>;
  readonly less_than_equal: InputMaybe<Scalars['Int']['input']>;
  readonly not_equals: InputMaybe<Scalars['Int']['input']>;
};

export type Purchase_PricePaid_Operator = {
  readonly equals: InputMaybe<Scalars['Float']['input']>;
  readonly greater_than: InputMaybe<Scalars['Float']['input']>;
  readonly greater_than_equal: InputMaybe<Scalars['Float']['input']>;
  readonly less_than: InputMaybe<Scalars['Float']['input']>;
  readonly less_than_equal: InputMaybe<Scalars['Float']['input']>;
  readonly not_equals: InputMaybe<Scalars['Float']['input']>;
};

export type Purchase_PurchasedAt_Operator = {
  readonly equals: InputMaybe<Scalars['DateTime']['input']>;
  readonly exists: InputMaybe<Scalars['Boolean']['input']>;
  readonly greater_than: InputMaybe<Scalars['DateTime']['input']>;
  readonly greater_than_equal: InputMaybe<Scalars['DateTime']['input']>;
  readonly less_than: InputMaybe<Scalars['DateTime']['input']>;
  readonly less_than_equal: InputMaybe<Scalars['DateTime']['input']>;
  readonly like: InputMaybe<Scalars['DateTime']['input']>;
  readonly not_equals: InputMaybe<Scalars['DateTime']['input']>;
};

export type Purchase_Status =
  | 'active'
  | 'inactive';

export type Purchase_Status_Input =
  | 'active'
  | 'inactive';

export type Purchase_Status_MutationInput =
  | 'active'
  | 'inactive';

export type Purchase_Status_Operator = {
  readonly all: InputMaybe<ReadonlyArray<InputMaybe<Purchase_Status_Input>>>;
  readonly equals: InputMaybe<Purchase_Status_Input>;
  readonly exists: InputMaybe<Scalars['Boolean']['input']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Purchase_Status_Input>>>;
  readonly not_equals: InputMaybe<Purchase_Status_Input>;
  readonly not_in: InputMaybe<ReadonlyArray<InputMaybe<Purchase_Status_Input>>>;
};

export type Purchase_Tariff_Operator = {
  readonly all: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']['input']>>>;
  readonly equals: InputMaybe<Scalars['JSON']['input']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']['input']>>>;
  readonly not_equals: InputMaybe<Scalars['JSON']['input']>;
  readonly not_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']['input']>>>;
};

export type Purchase_UpdatedAt_Operator = {
  readonly equals: InputMaybe<Scalars['DateTime']['input']>;
  readonly exists: InputMaybe<Scalars['Boolean']['input']>;
  readonly greater_than: InputMaybe<Scalars['DateTime']['input']>;
  readonly greater_than_equal: InputMaybe<Scalars['DateTime']['input']>;
  readonly less_than: InputMaybe<Scalars['DateTime']['input']>;
  readonly less_than_equal: InputMaybe<Scalars['DateTime']['input']>;
  readonly like: InputMaybe<Scalars['DateTime']['input']>;
  readonly not_equals: InputMaybe<Scalars['DateTime']['input']>;
};

export type Purchase_User_Operator = {
  readonly all: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']['input']>>>;
  readonly equals: InputMaybe<Scalars['JSON']['input']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']['input']>>>;
  readonly not_equals: InputMaybe<Scalars['JSON']['input']>;
  readonly not_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']['input']>>>;
};

export type Purchase_Where = {
  readonly AND: InputMaybe<ReadonlyArray<InputMaybe<Purchase_Where_And>>>;
  readonly OR: InputMaybe<ReadonlyArray<InputMaybe<Purchase_Where_Or>>>;
  readonly course: InputMaybe<Purchase_Course_Operator>;
  readonly createdAt: InputMaybe<Purchase_CreatedAt_Operator>;
  readonly expiresAt: InputMaybe<Purchase_ExpiresAt_Operator>;
  readonly id: InputMaybe<Purchase_Id_Operator>;
  readonly pricePaid: InputMaybe<Purchase_PricePaid_Operator>;
  readonly purchasedAt: InputMaybe<Purchase_PurchasedAt_Operator>;
  readonly status: InputMaybe<Purchase_Status_Operator>;
  readonly tariff: InputMaybe<Purchase_Tariff_Operator>;
  readonly updatedAt: InputMaybe<Purchase_UpdatedAt_Operator>;
  readonly user: InputMaybe<Purchase_User_Operator>;
};

export type Purchase_Where_And = {
  readonly AND: InputMaybe<ReadonlyArray<InputMaybe<Purchase_Where_And>>>;
  readonly OR: InputMaybe<ReadonlyArray<InputMaybe<Purchase_Where_Or>>>;
  readonly course: InputMaybe<Purchase_Course_Operator>;
  readonly createdAt: InputMaybe<Purchase_CreatedAt_Operator>;
  readonly expiresAt: InputMaybe<Purchase_ExpiresAt_Operator>;
  readonly id: InputMaybe<Purchase_Id_Operator>;
  readonly pricePaid: InputMaybe<Purchase_PricePaid_Operator>;
  readonly purchasedAt: InputMaybe<Purchase_PurchasedAt_Operator>;
  readonly status: InputMaybe<Purchase_Status_Operator>;
  readonly tariff: InputMaybe<Purchase_Tariff_Operator>;
  readonly updatedAt: InputMaybe<Purchase_UpdatedAt_Operator>;
  readonly user: InputMaybe<Purchase_User_Operator>;
};

export type Purchase_Where_Or = {
  readonly AND: InputMaybe<ReadonlyArray<InputMaybe<Purchase_Where_And>>>;
  readonly OR: InputMaybe<ReadonlyArray<InputMaybe<Purchase_Where_Or>>>;
  readonly course: InputMaybe<Purchase_Course_Operator>;
  readonly createdAt: InputMaybe<Purchase_CreatedAt_Operator>;
  readonly expiresAt: InputMaybe<Purchase_ExpiresAt_Operator>;
  readonly id: InputMaybe<Purchase_Id_Operator>;
  readonly pricePaid: InputMaybe<Purchase_PricePaid_Operator>;
  readonly purchasedAt: InputMaybe<Purchase_PurchasedAt_Operator>;
  readonly status: InputMaybe<Purchase_Status_Operator>;
  readonly tariff: InputMaybe<Purchase_Tariff_Operator>;
  readonly updatedAt: InputMaybe<Purchase_UpdatedAt_Operator>;
  readonly user: InputMaybe<Purchase_User_Operator>;
};

export type Purchases = {
  readonly __typename?: 'Purchases';
  readonly docs: ReadonlyArray<Purchase>;
  readonly hasNextPage: Scalars['Boolean']['output'];
  readonly hasPrevPage: Scalars['Boolean']['output'];
  readonly limit: Scalars['Int']['output'];
  readonly nextPage: Maybe<Scalars['Int']['output']>;
  readonly offset: Maybe<Scalars['Int']['output']>;
  readonly page: Scalars['Int']['output'];
  readonly pagingCounter: Scalars['Int']['output'];
  readonly prevPage: Maybe<Scalars['Int']['output']>;
  readonly totalDocs: Scalars['Int']['output'];
  readonly totalPages: Scalars['Int']['output'];
};

export type PurchasesCreateAccess = {
  readonly __typename?: 'PurchasesCreateAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where: Maybe<Scalars['JSONObject']['output']>;
};

export type PurchasesCreateDocAccess = {
  readonly __typename?: 'PurchasesCreateDocAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where: Maybe<Scalars['JSONObject']['output']>;
};

export type PurchasesDeleteAccess = {
  readonly __typename?: 'PurchasesDeleteAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where: Maybe<Scalars['JSONObject']['output']>;
};

export type PurchasesDeleteDocAccess = {
  readonly __typename?: 'PurchasesDeleteDocAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where: Maybe<Scalars['JSONObject']['output']>;
};

export type PurchasesDocAccessFields = {
  readonly __typename?: 'PurchasesDocAccessFields';
  readonly course: Maybe<PurchasesDocAccessFields_Course>;
  readonly createdAt: Maybe<PurchasesDocAccessFields_CreatedAt>;
  readonly expiresAt: Maybe<PurchasesDocAccessFields_ExpiresAt>;
  readonly pricePaid: Maybe<PurchasesDocAccessFields_PricePaid>;
  readonly purchasedAt: Maybe<PurchasesDocAccessFields_PurchasedAt>;
  readonly status: Maybe<PurchasesDocAccessFields_Status>;
  readonly tariff: Maybe<PurchasesDocAccessFields_Tariff>;
  readonly updatedAt: Maybe<PurchasesDocAccessFields_UpdatedAt>;
  readonly user: Maybe<PurchasesDocAccessFields_User>;
};

export type PurchasesDocAccessFields_Course = {
  readonly __typename?: 'PurchasesDocAccessFields_course';
  readonly create: Maybe<PurchasesDocAccessFields_Course_Create>;
  readonly delete: Maybe<PurchasesDocAccessFields_Course_Delete>;
  readonly read: Maybe<PurchasesDocAccessFields_Course_Read>;
  readonly update: Maybe<PurchasesDocAccessFields_Course_Update>;
};

export type PurchasesDocAccessFields_Course_Create = {
  readonly __typename?: 'PurchasesDocAccessFields_course_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type PurchasesDocAccessFields_Course_Delete = {
  readonly __typename?: 'PurchasesDocAccessFields_course_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type PurchasesDocAccessFields_Course_Read = {
  readonly __typename?: 'PurchasesDocAccessFields_course_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type PurchasesDocAccessFields_Course_Update = {
  readonly __typename?: 'PurchasesDocAccessFields_course_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type PurchasesDocAccessFields_CreatedAt = {
  readonly __typename?: 'PurchasesDocAccessFields_createdAt';
  readonly create: Maybe<PurchasesDocAccessFields_CreatedAt_Create>;
  readonly delete: Maybe<PurchasesDocAccessFields_CreatedAt_Delete>;
  readonly read: Maybe<PurchasesDocAccessFields_CreatedAt_Read>;
  readonly update: Maybe<PurchasesDocAccessFields_CreatedAt_Update>;
};

export type PurchasesDocAccessFields_CreatedAt_Create = {
  readonly __typename?: 'PurchasesDocAccessFields_createdAt_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type PurchasesDocAccessFields_CreatedAt_Delete = {
  readonly __typename?: 'PurchasesDocAccessFields_createdAt_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type PurchasesDocAccessFields_CreatedAt_Read = {
  readonly __typename?: 'PurchasesDocAccessFields_createdAt_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type PurchasesDocAccessFields_CreatedAt_Update = {
  readonly __typename?: 'PurchasesDocAccessFields_createdAt_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type PurchasesDocAccessFields_ExpiresAt = {
  readonly __typename?: 'PurchasesDocAccessFields_expiresAt';
  readonly create: Maybe<PurchasesDocAccessFields_ExpiresAt_Create>;
  readonly delete: Maybe<PurchasesDocAccessFields_ExpiresAt_Delete>;
  readonly read: Maybe<PurchasesDocAccessFields_ExpiresAt_Read>;
  readonly update: Maybe<PurchasesDocAccessFields_ExpiresAt_Update>;
};

export type PurchasesDocAccessFields_ExpiresAt_Create = {
  readonly __typename?: 'PurchasesDocAccessFields_expiresAt_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type PurchasesDocAccessFields_ExpiresAt_Delete = {
  readonly __typename?: 'PurchasesDocAccessFields_expiresAt_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type PurchasesDocAccessFields_ExpiresAt_Read = {
  readonly __typename?: 'PurchasesDocAccessFields_expiresAt_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type PurchasesDocAccessFields_ExpiresAt_Update = {
  readonly __typename?: 'PurchasesDocAccessFields_expiresAt_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type PurchasesDocAccessFields_PricePaid = {
  readonly __typename?: 'PurchasesDocAccessFields_pricePaid';
  readonly create: Maybe<PurchasesDocAccessFields_PricePaid_Create>;
  readonly delete: Maybe<PurchasesDocAccessFields_PricePaid_Delete>;
  readonly read: Maybe<PurchasesDocAccessFields_PricePaid_Read>;
  readonly update: Maybe<PurchasesDocAccessFields_PricePaid_Update>;
};

export type PurchasesDocAccessFields_PricePaid_Create = {
  readonly __typename?: 'PurchasesDocAccessFields_pricePaid_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type PurchasesDocAccessFields_PricePaid_Delete = {
  readonly __typename?: 'PurchasesDocAccessFields_pricePaid_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type PurchasesDocAccessFields_PricePaid_Read = {
  readonly __typename?: 'PurchasesDocAccessFields_pricePaid_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type PurchasesDocAccessFields_PricePaid_Update = {
  readonly __typename?: 'PurchasesDocAccessFields_pricePaid_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type PurchasesDocAccessFields_PurchasedAt = {
  readonly __typename?: 'PurchasesDocAccessFields_purchasedAt';
  readonly create: Maybe<PurchasesDocAccessFields_PurchasedAt_Create>;
  readonly delete: Maybe<PurchasesDocAccessFields_PurchasedAt_Delete>;
  readonly read: Maybe<PurchasesDocAccessFields_PurchasedAt_Read>;
  readonly update: Maybe<PurchasesDocAccessFields_PurchasedAt_Update>;
};

export type PurchasesDocAccessFields_PurchasedAt_Create = {
  readonly __typename?: 'PurchasesDocAccessFields_purchasedAt_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type PurchasesDocAccessFields_PurchasedAt_Delete = {
  readonly __typename?: 'PurchasesDocAccessFields_purchasedAt_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type PurchasesDocAccessFields_PurchasedAt_Read = {
  readonly __typename?: 'PurchasesDocAccessFields_purchasedAt_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type PurchasesDocAccessFields_PurchasedAt_Update = {
  readonly __typename?: 'PurchasesDocAccessFields_purchasedAt_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type PurchasesDocAccessFields_Status = {
  readonly __typename?: 'PurchasesDocAccessFields_status';
  readonly create: Maybe<PurchasesDocAccessFields_Status_Create>;
  readonly delete: Maybe<PurchasesDocAccessFields_Status_Delete>;
  readonly read: Maybe<PurchasesDocAccessFields_Status_Read>;
  readonly update: Maybe<PurchasesDocAccessFields_Status_Update>;
};

export type PurchasesDocAccessFields_Status_Create = {
  readonly __typename?: 'PurchasesDocAccessFields_status_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type PurchasesDocAccessFields_Status_Delete = {
  readonly __typename?: 'PurchasesDocAccessFields_status_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type PurchasesDocAccessFields_Status_Read = {
  readonly __typename?: 'PurchasesDocAccessFields_status_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type PurchasesDocAccessFields_Status_Update = {
  readonly __typename?: 'PurchasesDocAccessFields_status_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type PurchasesDocAccessFields_Tariff = {
  readonly __typename?: 'PurchasesDocAccessFields_tariff';
  readonly create: Maybe<PurchasesDocAccessFields_Tariff_Create>;
  readonly delete: Maybe<PurchasesDocAccessFields_Tariff_Delete>;
  readonly read: Maybe<PurchasesDocAccessFields_Tariff_Read>;
  readonly update: Maybe<PurchasesDocAccessFields_Tariff_Update>;
};

export type PurchasesDocAccessFields_Tariff_Create = {
  readonly __typename?: 'PurchasesDocAccessFields_tariff_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type PurchasesDocAccessFields_Tariff_Delete = {
  readonly __typename?: 'PurchasesDocAccessFields_tariff_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type PurchasesDocAccessFields_Tariff_Read = {
  readonly __typename?: 'PurchasesDocAccessFields_tariff_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type PurchasesDocAccessFields_Tariff_Update = {
  readonly __typename?: 'PurchasesDocAccessFields_tariff_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type PurchasesDocAccessFields_UpdatedAt = {
  readonly __typename?: 'PurchasesDocAccessFields_updatedAt';
  readonly create: Maybe<PurchasesDocAccessFields_UpdatedAt_Create>;
  readonly delete: Maybe<PurchasesDocAccessFields_UpdatedAt_Delete>;
  readonly read: Maybe<PurchasesDocAccessFields_UpdatedAt_Read>;
  readonly update: Maybe<PurchasesDocAccessFields_UpdatedAt_Update>;
};

export type PurchasesDocAccessFields_UpdatedAt_Create = {
  readonly __typename?: 'PurchasesDocAccessFields_updatedAt_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type PurchasesDocAccessFields_UpdatedAt_Delete = {
  readonly __typename?: 'PurchasesDocAccessFields_updatedAt_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type PurchasesDocAccessFields_UpdatedAt_Read = {
  readonly __typename?: 'PurchasesDocAccessFields_updatedAt_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type PurchasesDocAccessFields_UpdatedAt_Update = {
  readonly __typename?: 'PurchasesDocAccessFields_updatedAt_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type PurchasesDocAccessFields_User = {
  readonly __typename?: 'PurchasesDocAccessFields_user';
  readonly create: Maybe<PurchasesDocAccessFields_User_Create>;
  readonly delete: Maybe<PurchasesDocAccessFields_User_Delete>;
  readonly read: Maybe<PurchasesDocAccessFields_User_Read>;
  readonly update: Maybe<PurchasesDocAccessFields_User_Update>;
};

export type PurchasesDocAccessFields_User_Create = {
  readonly __typename?: 'PurchasesDocAccessFields_user_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type PurchasesDocAccessFields_User_Delete = {
  readonly __typename?: 'PurchasesDocAccessFields_user_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type PurchasesDocAccessFields_User_Read = {
  readonly __typename?: 'PurchasesDocAccessFields_user_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type PurchasesDocAccessFields_User_Update = {
  readonly __typename?: 'PurchasesDocAccessFields_user_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type PurchasesFields = {
  readonly __typename?: 'PurchasesFields';
  readonly course: Maybe<PurchasesFields_Course>;
  readonly createdAt: Maybe<PurchasesFields_CreatedAt>;
  readonly expiresAt: Maybe<PurchasesFields_ExpiresAt>;
  readonly pricePaid: Maybe<PurchasesFields_PricePaid>;
  readonly purchasedAt: Maybe<PurchasesFields_PurchasedAt>;
  readonly status: Maybe<PurchasesFields_Status>;
  readonly tariff: Maybe<PurchasesFields_Tariff>;
  readonly updatedAt: Maybe<PurchasesFields_UpdatedAt>;
  readonly user: Maybe<PurchasesFields_User>;
};

export type PurchasesFields_Course = {
  readonly __typename?: 'PurchasesFields_course';
  readonly create: Maybe<PurchasesFields_Course_Create>;
  readonly delete: Maybe<PurchasesFields_Course_Delete>;
  readonly read: Maybe<PurchasesFields_Course_Read>;
  readonly update: Maybe<PurchasesFields_Course_Update>;
};

export type PurchasesFields_Course_Create = {
  readonly __typename?: 'PurchasesFields_course_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type PurchasesFields_Course_Delete = {
  readonly __typename?: 'PurchasesFields_course_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type PurchasesFields_Course_Read = {
  readonly __typename?: 'PurchasesFields_course_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type PurchasesFields_Course_Update = {
  readonly __typename?: 'PurchasesFields_course_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type PurchasesFields_CreatedAt = {
  readonly __typename?: 'PurchasesFields_createdAt';
  readonly create: Maybe<PurchasesFields_CreatedAt_Create>;
  readonly delete: Maybe<PurchasesFields_CreatedAt_Delete>;
  readonly read: Maybe<PurchasesFields_CreatedAt_Read>;
  readonly update: Maybe<PurchasesFields_CreatedAt_Update>;
};

export type PurchasesFields_CreatedAt_Create = {
  readonly __typename?: 'PurchasesFields_createdAt_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type PurchasesFields_CreatedAt_Delete = {
  readonly __typename?: 'PurchasesFields_createdAt_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type PurchasesFields_CreatedAt_Read = {
  readonly __typename?: 'PurchasesFields_createdAt_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type PurchasesFields_CreatedAt_Update = {
  readonly __typename?: 'PurchasesFields_createdAt_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type PurchasesFields_ExpiresAt = {
  readonly __typename?: 'PurchasesFields_expiresAt';
  readonly create: Maybe<PurchasesFields_ExpiresAt_Create>;
  readonly delete: Maybe<PurchasesFields_ExpiresAt_Delete>;
  readonly read: Maybe<PurchasesFields_ExpiresAt_Read>;
  readonly update: Maybe<PurchasesFields_ExpiresAt_Update>;
};

export type PurchasesFields_ExpiresAt_Create = {
  readonly __typename?: 'PurchasesFields_expiresAt_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type PurchasesFields_ExpiresAt_Delete = {
  readonly __typename?: 'PurchasesFields_expiresAt_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type PurchasesFields_ExpiresAt_Read = {
  readonly __typename?: 'PurchasesFields_expiresAt_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type PurchasesFields_ExpiresAt_Update = {
  readonly __typename?: 'PurchasesFields_expiresAt_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type PurchasesFields_PricePaid = {
  readonly __typename?: 'PurchasesFields_pricePaid';
  readonly create: Maybe<PurchasesFields_PricePaid_Create>;
  readonly delete: Maybe<PurchasesFields_PricePaid_Delete>;
  readonly read: Maybe<PurchasesFields_PricePaid_Read>;
  readonly update: Maybe<PurchasesFields_PricePaid_Update>;
};

export type PurchasesFields_PricePaid_Create = {
  readonly __typename?: 'PurchasesFields_pricePaid_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type PurchasesFields_PricePaid_Delete = {
  readonly __typename?: 'PurchasesFields_pricePaid_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type PurchasesFields_PricePaid_Read = {
  readonly __typename?: 'PurchasesFields_pricePaid_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type PurchasesFields_PricePaid_Update = {
  readonly __typename?: 'PurchasesFields_pricePaid_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type PurchasesFields_PurchasedAt = {
  readonly __typename?: 'PurchasesFields_purchasedAt';
  readonly create: Maybe<PurchasesFields_PurchasedAt_Create>;
  readonly delete: Maybe<PurchasesFields_PurchasedAt_Delete>;
  readonly read: Maybe<PurchasesFields_PurchasedAt_Read>;
  readonly update: Maybe<PurchasesFields_PurchasedAt_Update>;
};

export type PurchasesFields_PurchasedAt_Create = {
  readonly __typename?: 'PurchasesFields_purchasedAt_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type PurchasesFields_PurchasedAt_Delete = {
  readonly __typename?: 'PurchasesFields_purchasedAt_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type PurchasesFields_PurchasedAt_Read = {
  readonly __typename?: 'PurchasesFields_purchasedAt_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type PurchasesFields_PurchasedAt_Update = {
  readonly __typename?: 'PurchasesFields_purchasedAt_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type PurchasesFields_Status = {
  readonly __typename?: 'PurchasesFields_status';
  readonly create: Maybe<PurchasesFields_Status_Create>;
  readonly delete: Maybe<PurchasesFields_Status_Delete>;
  readonly read: Maybe<PurchasesFields_Status_Read>;
  readonly update: Maybe<PurchasesFields_Status_Update>;
};

export type PurchasesFields_Status_Create = {
  readonly __typename?: 'PurchasesFields_status_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type PurchasesFields_Status_Delete = {
  readonly __typename?: 'PurchasesFields_status_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type PurchasesFields_Status_Read = {
  readonly __typename?: 'PurchasesFields_status_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type PurchasesFields_Status_Update = {
  readonly __typename?: 'PurchasesFields_status_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type PurchasesFields_Tariff = {
  readonly __typename?: 'PurchasesFields_tariff';
  readonly create: Maybe<PurchasesFields_Tariff_Create>;
  readonly delete: Maybe<PurchasesFields_Tariff_Delete>;
  readonly read: Maybe<PurchasesFields_Tariff_Read>;
  readonly update: Maybe<PurchasesFields_Tariff_Update>;
};

export type PurchasesFields_Tariff_Create = {
  readonly __typename?: 'PurchasesFields_tariff_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type PurchasesFields_Tariff_Delete = {
  readonly __typename?: 'PurchasesFields_tariff_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type PurchasesFields_Tariff_Read = {
  readonly __typename?: 'PurchasesFields_tariff_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type PurchasesFields_Tariff_Update = {
  readonly __typename?: 'PurchasesFields_tariff_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type PurchasesFields_UpdatedAt = {
  readonly __typename?: 'PurchasesFields_updatedAt';
  readonly create: Maybe<PurchasesFields_UpdatedAt_Create>;
  readonly delete: Maybe<PurchasesFields_UpdatedAt_Delete>;
  readonly read: Maybe<PurchasesFields_UpdatedAt_Read>;
  readonly update: Maybe<PurchasesFields_UpdatedAt_Update>;
};

export type PurchasesFields_UpdatedAt_Create = {
  readonly __typename?: 'PurchasesFields_updatedAt_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type PurchasesFields_UpdatedAt_Delete = {
  readonly __typename?: 'PurchasesFields_updatedAt_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type PurchasesFields_UpdatedAt_Read = {
  readonly __typename?: 'PurchasesFields_updatedAt_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type PurchasesFields_UpdatedAt_Update = {
  readonly __typename?: 'PurchasesFields_updatedAt_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type PurchasesFields_User = {
  readonly __typename?: 'PurchasesFields_user';
  readonly create: Maybe<PurchasesFields_User_Create>;
  readonly delete: Maybe<PurchasesFields_User_Delete>;
  readonly read: Maybe<PurchasesFields_User_Read>;
  readonly update: Maybe<PurchasesFields_User_Update>;
};

export type PurchasesFields_User_Create = {
  readonly __typename?: 'PurchasesFields_user_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type PurchasesFields_User_Delete = {
  readonly __typename?: 'PurchasesFields_user_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type PurchasesFields_User_Read = {
  readonly __typename?: 'PurchasesFields_user_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type PurchasesFields_User_Update = {
  readonly __typename?: 'PurchasesFields_user_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type PurchasesReadAccess = {
  readonly __typename?: 'PurchasesReadAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where: Maybe<Scalars['JSONObject']['output']>;
};

export type PurchasesReadDocAccess = {
  readonly __typename?: 'PurchasesReadDocAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where: Maybe<Scalars['JSONObject']['output']>;
};

export type PurchasesUpdateAccess = {
  readonly __typename?: 'PurchasesUpdateAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where: Maybe<Scalars['JSONObject']['output']>;
};

export type PurchasesUpdateDocAccess = {
  readonly __typename?: 'PurchasesUpdateDocAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where: Maybe<Scalars['JSONObject']['output']>;
};

export type Query = {
  readonly __typename?: 'Query';
  readonly Access: Maybe<Access>;
  readonly Admin: Maybe<Admin>;
  readonly Admins: Maybe<Admins>;
  readonly Course: Maybe<Course>;
  readonly Courses: Maybe<Courses>;
  readonly Exam: Maybe<Exam>;
  readonly Exams: Maybe<Exams>;
  readonly Faq: Maybe<Faq>;
  readonly Faqs: Maybe<Faqs>;
  readonly GetUserRecommendations: Maybe<ReadonlyArray<Maybe<Recommendation>>>;
  readonly GetUserTests: Maybe<PaginatedTestsWithStatus>;
  readonly HomePage: Maybe<HomePage>;
  readonly Media: Maybe<Media>;
  readonly PayloadLockedDocument: Maybe<PayloadLockedDocument>;
  readonly PayloadLockedDocuments: Maybe<PayloadLockedDocuments>;
  readonly PayloadPreference: Maybe<PayloadPreference>;
  readonly PayloadPreferences: Maybe<PayloadPreferences>;
  readonly Post: Maybe<Post>;
  readonly Posts: Maybe<Posts>;
  readonly Purchase: Maybe<Purchase>;
  readonly Purchases: Maybe<Purchases>;
  readonly Question: Maybe<Question>;
  readonly Questions: Maybe<Questions>;
  readonly Recomendation: Maybe<Recomendation>;
  readonly Recomendations: Maybe<Recomendations>;
  readonly Subject: Maybe<Subject>;
  readonly Subjects: Maybe<Subjects>;
  readonly Tariff: Maybe<Tariff>;
  readonly Tariffs: Maybe<Tariffs>;
  readonly Test: Maybe<Test>;
  readonly TestResult: Maybe<TestResult>;
  readonly TestResults: Maybe<TestResults>;
  readonly Tests: Maybe<Tests>;
  readonly User: Maybe<User>;
  readonly Users: Maybe<Users>;
  readonly allMedia: Maybe<AllMedia>;
  readonly countAdmins: Maybe<CountAdmins>;
  readonly countCourses: Maybe<CountCourses>;
  readonly countExams: Maybe<CountExams>;
  readonly countFaqs: Maybe<CountFaqs>;
  readonly countPayloadLockedDocuments: Maybe<CountPayloadLockedDocuments>;
  readonly countPayloadPreferences: Maybe<CountPayloadPreferences>;
  readonly countPosts: Maybe<CountPosts>;
  readonly countPurchases: Maybe<CountPurchases>;
  readonly countQuestions: Maybe<CountQuestions>;
  readonly countRecomendations: Maybe<CountRecomendations>;
  readonly countSubjects: Maybe<CountSubjects>;
  readonly countTariffs: Maybe<CountTariffs>;
  readonly countTestResults: Maybe<CountTestResults>;
  readonly countTests: Maybe<CountTests>;
  readonly countUsers: Maybe<CountUsers>;
  readonly countallMedia: Maybe<CountallMedia>;
  readonly docAccessAdmin: Maybe<AdminsDocAccess>;
  readonly docAccessCourse: Maybe<CoursesDocAccess>;
  readonly docAccessExam: Maybe<ExamsDocAccess>;
  readonly docAccessFaq: Maybe<FaqsDocAccess>;
  readonly docAccessHomePage: Maybe<HomePageDocAccess>;
  readonly docAccessMedia: Maybe<MediaDocAccess>;
  readonly docAccessPayloadLockedDocument: Maybe<Payload_Locked_DocumentsDocAccess>;
  readonly docAccessPayloadPreference: Maybe<Payload_PreferencesDocAccess>;
  readonly docAccessPost: Maybe<PostsDocAccess>;
  readonly docAccessPurchase: Maybe<PurchasesDocAccess>;
  readonly docAccessQuestion: Maybe<QuestionsDocAccess>;
  readonly docAccessRecomendation: Maybe<RecomendationsDocAccess>;
  readonly docAccessSubject: Maybe<SubjectsDocAccess>;
  readonly docAccessTariff: Maybe<TariffsDocAccess>;
  readonly docAccessTest: Maybe<TestsDocAccess>;
  readonly docAccessTestResult: Maybe<TestResultsDocAccess>;
  readonly docAccessUser: Maybe<UsersDocAccess>;
  readonly initializedAdmin: Maybe<Scalars['Boolean']['output']>;
  readonly meAdmin: Maybe<AdminsMe>;
  readonly versionPost: Maybe<PostVersion>;
  readonly versionsPosts: Maybe<VersionsPosts>;
};


export type QueryAdminArgs = {
  draft: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale: InputMaybe<FallbackLocaleInputType>;
  id: Scalars['Int']['input'];
  locale: InputMaybe<LocaleInputType>;
};


export type QueryAdminsArgs = {
  draft: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale: InputMaybe<FallbackLocaleInputType>;
  limit: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<LocaleInputType>;
  page: InputMaybe<Scalars['Int']['input']>;
  pagination: InputMaybe<Scalars['Boolean']['input']>;
  sort: InputMaybe<Scalars['String']['input']>;
  where: InputMaybe<Admin_Where>;
};


export type QueryCourseArgs = {
  draft: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale: InputMaybe<FallbackLocaleInputType>;
  id: Scalars['Int']['input'];
  locale: InputMaybe<LocaleInputType>;
};


export type QueryCoursesArgs = {
  draft: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale: InputMaybe<FallbackLocaleInputType>;
  limit: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<LocaleInputType>;
  page: InputMaybe<Scalars['Int']['input']>;
  pagination: InputMaybe<Scalars['Boolean']['input']>;
  sort: InputMaybe<Scalars['String']['input']>;
  where: InputMaybe<Course_Where>;
};


export type QueryExamArgs = {
  draft: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale: InputMaybe<FallbackLocaleInputType>;
  id: Scalars['Int']['input'];
  locale: InputMaybe<LocaleInputType>;
};


export type QueryExamsArgs = {
  draft: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale: InputMaybe<FallbackLocaleInputType>;
  limit: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<LocaleInputType>;
  page: InputMaybe<Scalars['Int']['input']>;
  pagination: InputMaybe<Scalars['Boolean']['input']>;
  sort: InputMaybe<Scalars['String']['input']>;
  where: InputMaybe<Exam_Where>;
};


export type QueryFaqArgs = {
  draft: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale: InputMaybe<FallbackLocaleInputType>;
  id: Scalars['Int']['input'];
  locale: InputMaybe<LocaleInputType>;
};


export type QueryFaqsArgs = {
  draft: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale: InputMaybe<FallbackLocaleInputType>;
  limit: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<LocaleInputType>;
  page: InputMaybe<Scalars['Int']['input']>;
  pagination: InputMaybe<Scalars['Boolean']['input']>;
  sort: InputMaybe<Scalars['String']['input']>;
  where: InputMaybe<Faq_Where>;
};


export type QueryGetUserRecommendationsArgs = {
  userId: Scalars['Int']['input'];
};


export type QueryGetUserTestsArgs = {
  examId: InputMaybe<Scalars['Int']['input']>;
  limit: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  status: InputMaybe<TestResult_Status_All>;
  subjectId: InputMaybe<Scalars['Int']['input']>;
  userId: InputMaybe<Scalars['Int']['input']>;
};


export type QueryHomePageArgs = {
  draft: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale: InputMaybe<FallbackLocaleInputType>;
  locale: InputMaybe<LocaleInputType>;
};


export type QueryMediaArgs = {
  draft: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale: InputMaybe<FallbackLocaleInputType>;
  id: Scalars['Int']['input'];
  locale: InputMaybe<LocaleInputType>;
};


export type QueryPayloadLockedDocumentArgs = {
  draft: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale: InputMaybe<FallbackLocaleInputType>;
  id: Scalars['Int']['input'];
  locale: InputMaybe<LocaleInputType>;
};


export type QueryPayloadLockedDocumentsArgs = {
  draft: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale: InputMaybe<FallbackLocaleInputType>;
  limit: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<LocaleInputType>;
  page: InputMaybe<Scalars['Int']['input']>;
  pagination: InputMaybe<Scalars['Boolean']['input']>;
  sort: InputMaybe<Scalars['String']['input']>;
  where: InputMaybe<PayloadLockedDocument_Where>;
};


export type QueryPayloadPreferenceArgs = {
  draft: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale: InputMaybe<FallbackLocaleInputType>;
  id: Scalars['Int']['input'];
  locale: InputMaybe<LocaleInputType>;
};


export type QueryPayloadPreferencesArgs = {
  draft: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale: InputMaybe<FallbackLocaleInputType>;
  limit: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<LocaleInputType>;
  page: InputMaybe<Scalars['Int']['input']>;
  pagination: InputMaybe<Scalars['Boolean']['input']>;
  sort: InputMaybe<Scalars['String']['input']>;
  where: InputMaybe<PayloadPreference_Where>;
};


export type QueryPostArgs = {
  draft: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale: InputMaybe<FallbackLocaleInputType>;
  id: Scalars['Int']['input'];
  locale: InputMaybe<LocaleInputType>;
};


export type QueryPostsArgs = {
  draft: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale: InputMaybe<FallbackLocaleInputType>;
  limit: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<LocaleInputType>;
  page: InputMaybe<Scalars['Int']['input']>;
  pagination: InputMaybe<Scalars['Boolean']['input']>;
  sort: InputMaybe<Scalars['String']['input']>;
  where: InputMaybe<Post_Where>;
};


export type QueryPurchaseArgs = {
  draft: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale: InputMaybe<FallbackLocaleInputType>;
  id: Scalars['Int']['input'];
  locale: InputMaybe<LocaleInputType>;
};


export type QueryPurchasesArgs = {
  draft: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale: InputMaybe<FallbackLocaleInputType>;
  limit: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<LocaleInputType>;
  page: InputMaybe<Scalars['Int']['input']>;
  pagination: InputMaybe<Scalars['Boolean']['input']>;
  sort: InputMaybe<Scalars['String']['input']>;
  where: InputMaybe<Purchase_Where>;
};


export type QueryQuestionArgs = {
  draft: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale: InputMaybe<FallbackLocaleInputType>;
  id: Scalars['Int']['input'];
  locale: InputMaybe<LocaleInputType>;
};


export type QueryQuestionsArgs = {
  draft: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale: InputMaybe<FallbackLocaleInputType>;
  limit: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<LocaleInputType>;
  page: InputMaybe<Scalars['Int']['input']>;
  pagination: InputMaybe<Scalars['Boolean']['input']>;
  sort: InputMaybe<Scalars['String']['input']>;
  where: InputMaybe<Question_Where>;
};


export type QueryRecomendationArgs = {
  draft: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale: InputMaybe<FallbackLocaleInputType>;
  id: Scalars['Int']['input'];
  locale: InputMaybe<LocaleInputType>;
};


export type QueryRecomendationsArgs = {
  draft: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale: InputMaybe<FallbackLocaleInputType>;
  limit: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<LocaleInputType>;
  page: InputMaybe<Scalars['Int']['input']>;
  pagination: InputMaybe<Scalars['Boolean']['input']>;
  sort: InputMaybe<Scalars['String']['input']>;
  where: InputMaybe<Recomendation_Where>;
};


export type QuerySubjectArgs = {
  draft: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale: InputMaybe<FallbackLocaleInputType>;
  id: Scalars['Int']['input'];
  locale: InputMaybe<LocaleInputType>;
};


export type QuerySubjectsArgs = {
  draft: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale: InputMaybe<FallbackLocaleInputType>;
  limit: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<LocaleInputType>;
  page: InputMaybe<Scalars['Int']['input']>;
  pagination: InputMaybe<Scalars['Boolean']['input']>;
  sort: InputMaybe<Scalars['String']['input']>;
  where: InputMaybe<Subject_Where>;
};


export type QueryTariffArgs = {
  draft: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale: InputMaybe<FallbackLocaleInputType>;
  id: Scalars['Int']['input'];
  locale: InputMaybe<LocaleInputType>;
};


export type QueryTariffsArgs = {
  draft: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale: InputMaybe<FallbackLocaleInputType>;
  limit: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<LocaleInputType>;
  page: InputMaybe<Scalars['Int']['input']>;
  pagination: InputMaybe<Scalars['Boolean']['input']>;
  sort: InputMaybe<Scalars['String']['input']>;
  where: InputMaybe<Tariff_Where>;
};


export type QueryTestArgs = {
  draft: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale: InputMaybe<FallbackLocaleInputType>;
  id: Scalars['Int']['input'];
  locale: InputMaybe<LocaleInputType>;
};


export type QueryTestResultArgs = {
  draft: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale: InputMaybe<FallbackLocaleInputType>;
  id: Scalars['Int']['input'];
  locale: InputMaybe<LocaleInputType>;
};


export type QueryTestResultsArgs = {
  draft: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale: InputMaybe<FallbackLocaleInputType>;
  limit: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<LocaleInputType>;
  page: InputMaybe<Scalars['Int']['input']>;
  pagination: InputMaybe<Scalars['Boolean']['input']>;
  sort: InputMaybe<Scalars['String']['input']>;
  where: InputMaybe<TestResult_Where>;
};


export type QueryTestsArgs = {
  draft: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale: InputMaybe<FallbackLocaleInputType>;
  limit: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<LocaleInputType>;
  page: InputMaybe<Scalars['Int']['input']>;
  pagination: InputMaybe<Scalars['Boolean']['input']>;
  sort: InputMaybe<Scalars['String']['input']>;
  where: InputMaybe<Test_Where>;
};


export type QueryUserArgs = {
  draft: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale: InputMaybe<FallbackLocaleInputType>;
  id: Scalars['Int']['input'];
  locale: InputMaybe<LocaleInputType>;
};


export type QueryUsersArgs = {
  draft: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale: InputMaybe<FallbackLocaleInputType>;
  limit: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<LocaleInputType>;
  page: InputMaybe<Scalars['Int']['input']>;
  pagination: InputMaybe<Scalars['Boolean']['input']>;
  sort: InputMaybe<Scalars['String']['input']>;
  where: InputMaybe<User_Where>;
};


export type QueryAllMediaArgs = {
  draft: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale: InputMaybe<FallbackLocaleInputType>;
  limit: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<LocaleInputType>;
  page: InputMaybe<Scalars['Int']['input']>;
  pagination: InputMaybe<Scalars['Boolean']['input']>;
  sort: InputMaybe<Scalars['String']['input']>;
  where: InputMaybe<Media_Where>;
};


export type QueryCountAdminsArgs = {
  draft: InputMaybe<Scalars['Boolean']['input']>;
  locale: InputMaybe<LocaleInputType>;
  where: InputMaybe<Admin_Where>;
};


export type QueryCountCoursesArgs = {
  draft: InputMaybe<Scalars['Boolean']['input']>;
  locale: InputMaybe<LocaleInputType>;
  where: InputMaybe<Course_Where>;
};


export type QueryCountExamsArgs = {
  draft: InputMaybe<Scalars['Boolean']['input']>;
  locale: InputMaybe<LocaleInputType>;
  where: InputMaybe<Exam_Where>;
};


export type QueryCountFaqsArgs = {
  draft: InputMaybe<Scalars['Boolean']['input']>;
  locale: InputMaybe<LocaleInputType>;
  where: InputMaybe<Faq_Where>;
};


export type QueryCountPayloadLockedDocumentsArgs = {
  draft: InputMaybe<Scalars['Boolean']['input']>;
  locale: InputMaybe<LocaleInputType>;
  where: InputMaybe<PayloadLockedDocument_Where>;
};


export type QueryCountPayloadPreferencesArgs = {
  draft: InputMaybe<Scalars['Boolean']['input']>;
  locale: InputMaybe<LocaleInputType>;
  where: InputMaybe<PayloadPreference_Where>;
};


export type QueryCountPostsArgs = {
  draft: InputMaybe<Scalars['Boolean']['input']>;
  locale: InputMaybe<LocaleInputType>;
  where: InputMaybe<Post_Where>;
};


export type QueryCountPurchasesArgs = {
  draft: InputMaybe<Scalars['Boolean']['input']>;
  locale: InputMaybe<LocaleInputType>;
  where: InputMaybe<Purchase_Where>;
};


export type QueryCountQuestionsArgs = {
  draft: InputMaybe<Scalars['Boolean']['input']>;
  locale: InputMaybe<LocaleInputType>;
  where: InputMaybe<Question_Where>;
};


export type QueryCountRecomendationsArgs = {
  draft: InputMaybe<Scalars['Boolean']['input']>;
  locale: InputMaybe<LocaleInputType>;
  where: InputMaybe<Recomendation_Where>;
};


export type QueryCountSubjectsArgs = {
  draft: InputMaybe<Scalars['Boolean']['input']>;
  locale: InputMaybe<LocaleInputType>;
  where: InputMaybe<Subject_Where>;
};


export type QueryCountTariffsArgs = {
  draft: InputMaybe<Scalars['Boolean']['input']>;
  locale: InputMaybe<LocaleInputType>;
  where: InputMaybe<Tariff_Where>;
};


export type QueryCountTestResultsArgs = {
  draft: InputMaybe<Scalars['Boolean']['input']>;
  locale: InputMaybe<LocaleInputType>;
  where: InputMaybe<TestResult_Where>;
};


export type QueryCountTestsArgs = {
  draft: InputMaybe<Scalars['Boolean']['input']>;
  locale: InputMaybe<LocaleInputType>;
  where: InputMaybe<Test_Where>;
};


export type QueryCountUsersArgs = {
  draft: InputMaybe<Scalars['Boolean']['input']>;
  locale: InputMaybe<LocaleInputType>;
  where: InputMaybe<User_Where>;
};


export type QueryCountallMediaArgs = {
  draft: InputMaybe<Scalars['Boolean']['input']>;
  locale: InputMaybe<LocaleInputType>;
  where: InputMaybe<Media_Where>;
};


export type QueryDocAccessAdminArgs = {
  id: Scalars['Int']['input'];
};


export type QueryDocAccessCourseArgs = {
  id: Scalars['Int']['input'];
};


export type QueryDocAccessExamArgs = {
  id: Scalars['Int']['input'];
};


export type QueryDocAccessFaqArgs = {
  id: Scalars['Int']['input'];
};


export type QueryDocAccessMediaArgs = {
  id: Scalars['Int']['input'];
};


export type QueryDocAccessPayloadLockedDocumentArgs = {
  id: Scalars['Int']['input'];
};


export type QueryDocAccessPayloadPreferenceArgs = {
  id: Scalars['Int']['input'];
};


export type QueryDocAccessPostArgs = {
  id: Scalars['Int']['input'];
};


export type QueryDocAccessPurchaseArgs = {
  id: Scalars['Int']['input'];
};


export type QueryDocAccessQuestionArgs = {
  id: Scalars['Int']['input'];
};


export type QueryDocAccessRecomendationArgs = {
  id: Scalars['Int']['input'];
};


export type QueryDocAccessSubjectArgs = {
  id: Scalars['Int']['input'];
};


export type QueryDocAccessTariffArgs = {
  id: Scalars['Int']['input'];
};


export type QueryDocAccessTestArgs = {
  id: Scalars['Int']['input'];
};


export type QueryDocAccessTestResultArgs = {
  id: Scalars['Int']['input'];
};


export type QueryDocAccessUserArgs = {
  id: Scalars['Int']['input'];
};


export type QueryVersionPostArgs = {
  fallbackLocale: InputMaybe<FallbackLocaleInputType>;
  id: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<LocaleInputType>;
};


export type QueryVersionsPostsArgs = {
  fallbackLocale: InputMaybe<FallbackLocaleInputType>;
  limit: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<LocaleInputType>;
  page: InputMaybe<Scalars['Int']['input']>;
  pagination: InputMaybe<Scalars['Boolean']['input']>;
  sort: InputMaybe<Scalars['String']['input']>;
  where: InputMaybe<VersionsPost_Where>;
};

export type Question = {
  readonly __typename?: 'Question';
  readonly answers: Maybe<ReadonlyArray<Question_Answers>>;
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly id: Scalars['Int']['output'];
  readonly matchingPairs: Maybe<ReadonlyArray<Question_MatchingPairs>>;
  readonly questionText: Scalars['String']['output'];
  readonly questionType: Question_QuestionType;
  readonly recommendation: Maybe<Recomendation>;
  readonly textAnswer: Maybe<Scalars['String']['output']>;
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
};


export type QuestionRecommendationArgs = {
  fallbackLocale: InputMaybe<FallbackLocaleInputType>;
  locale: InputMaybe<LocaleInputType>;
};

export type QuestionUpdate_QuestionType_MutationInput =
  | 'matching'
  | 'multiple_choice'
  | 'single_choice'
  | 'text_input';

export type Question_Answers = {
  readonly __typename?: 'Question_Answers';
  readonly id: Maybe<Scalars['String']['output']>;
  readonly isCorrect: Maybe<Scalars['Boolean']['output']>;
  readonly label: Maybe<Scalars['String']['output']>;
  readonly value: Maybe<Scalars['String']['output']>;
};

export type Question_MatchingPairs = {
  readonly __typename?: 'Question_MatchingPairs';
  readonly id: Maybe<Scalars['String']['output']>;
  readonly left: Maybe<Scalars['String']['output']>;
  readonly right: Maybe<Scalars['String']['output']>;
};

export type Question_Answers__Id_Operator = {
  readonly all: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly contains: InputMaybe<Scalars['String']['input']>;
  readonly equals: InputMaybe<Scalars['String']['input']>;
  readonly exists: InputMaybe<Scalars['Boolean']['input']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly like: InputMaybe<Scalars['String']['input']>;
  readonly not_equals: InputMaybe<Scalars['String']['input']>;
  readonly not_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type Question_Answers__IsCorrect_Operator = {
  readonly equals: InputMaybe<Scalars['Boolean']['input']>;
  readonly exists: InputMaybe<Scalars['Boolean']['input']>;
  readonly not_equals: InputMaybe<Scalars['Boolean']['input']>;
};

export type Question_Answers__Label_Operator = {
  readonly all: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly contains: InputMaybe<Scalars['String']['input']>;
  readonly equals: InputMaybe<Scalars['String']['input']>;
  readonly exists: InputMaybe<Scalars['Boolean']['input']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly like: InputMaybe<Scalars['String']['input']>;
  readonly not_equals: InputMaybe<Scalars['String']['input']>;
  readonly not_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type Question_Answers__Value_Operator = {
  readonly all: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly contains: InputMaybe<Scalars['String']['input']>;
  readonly equals: InputMaybe<Scalars['String']['input']>;
  readonly exists: InputMaybe<Scalars['Boolean']['input']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly like: InputMaybe<Scalars['String']['input']>;
  readonly not_equals: InputMaybe<Scalars['String']['input']>;
  readonly not_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type Question_CreatedAt_Operator = {
  readonly equals: InputMaybe<Scalars['DateTime']['input']>;
  readonly exists: InputMaybe<Scalars['Boolean']['input']>;
  readonly greater_than: InputMaybe<Scalars['DateTime']['input']>;
  readonly greater_than_equal: InputMaybe<Scalars['DateTime']['input']>;
  readonly less_than: InputMaybe<Scalars['DateTime']['input']>;
  readonly less_than_equal: InputMaybe<Scalars['DateTime']['input']>;
  readonly like: InputMaybe<Scalars['DateTime']['input']>;
  readonly not_equals: InputMaybe<Scalars['DateTime']['input']>;
};

export type Question_Id_Operator = {
  readonly equals: InputMaybe<Scalars['Int']['input']>;
  readonly exists: InputMaybe<Scalars['Boolean']['input']>;
  readonly greater_than: InputMaybe<Scalars['Int']['input']>;
  readonly greater_than_equal: InputMaybe<Scalars['Int']['input']>;
  readonly less_than: InputMaybe<Scalars['Int']['input']>;
  readonly less_than_equal: InputMaybe<Scalars['Int']['input']>;
  readonly not_equals: InputMaybe<Scalars['Int']['input']>;
};

export type Question_MatchingPairs__Id_Operator = {
  readonly all: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly contains: InputMaybe<Scalars['String']['input']>;
  readonly equals: InputMaybe<Scalars['String']['input']>;
  readonly exists: InputMaybe<Scalars['Boolean']['input']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly like: InputMaybe<Scalars['String']['input']>;
  readonly not_equals: InputMaybe<Scalars['String']['input']>;
  readonly not_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type Question_MatchingPairs__Left_Operator = {
  readonly all: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly contains: InputMaybe<Scalars['String']['input']>;
  readonly equals: InputMaybe<Scalars['String']['input']>;
  readonly exists: InputMaybe<Scalars['Boolean']['input']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly like: InputMaybe<Scalars['String']['input']>;
  readonly not_equals: InputMaybe<Scalars['String']['input']>;
  readonly not_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type Question_MatchingPairs__Right_Operator = {
  readonly all: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly contains: InputMaybe<Scalars['String']['input']>;
  readonly equals: InputMaybe<Scalars['String']['input']>;
  readonly exists: InputMaybe<Scalars['Boolean']['input']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly like: InputMaybe<Scalars['String']['input']>;
  readonly not_equals: InputMaybe<Scalars['String']['input']>;
  readonly not_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type Question_QuestionText_Operator = {
  readonly all: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly contains: InputMaybe<Scalars['String']['input']>;
  readonly equals: InputMaybe<Scalars['String']['input']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly like: InputMaybe<Scalars['String']['input']>;
  readonly not_equals: InputMaybe<Scalars['String']['input']>;
  readonly not_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type Question_QuestionType =
  | 'matching'
  | 'multiple_choice'
  | 'single_choice'
  | 'text_input';

export type Question_QuestionType_Input =
  | 'matching'
  | 'multiple_choice'
  | 'single_choice'
  | 'text_input';

export type Question_QuestionType_MutationInput =
  | 'matching'
  | 'multiple_choice'
  | 'single_choice'
  | 'text_input';

export type Question_QuestionType_Operator = {
  readonly all: InputMaybe<ReadonlyArray<InputMaybe<Question_QuestionType_Input>>>;
  readonly equals: InputMaybe<Question_QuestionType_Input>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Question_QuestionType_Input>>>;
  readonly not_equals: InputMaybe<Question_QuestionType_Input>;
  readonly not_in: InputMaybe<ReadonlyArray<InputMaybe<Question_QuestionType_Input>>>;
};

export type Question_Recommendation_Operator = {
  readonly all: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']['input']>>>;
  readonly equals: InputMaybe<Scalars['JSON']['input']>;
  readonly exists: InputMaybe<Scalars['Boolean']['input']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']['input']>>>;
  readonly not_equals: InputMaybe<Scalars['JSON']['input']>;
  readonly not_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']['input']>>>;
};

export type Question_TextAnswer_Operator = {
  readonly all: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly contains: InputMaybe<Scalars['String']['input']>;
  readonly equals: InputMaybe<Scalars['String']['input']>;
  readonly exists: InputMaybe<Scalars['Boolean']['input']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly like: InputMaybe<Scalars['String']['input']>;
  readonly not_equals: InputMaybe<Scalars['String']['input']>;
  readonly not_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type Question_UpdatedAt_Operator = {
  readonly equals: InputMaybe<Scalars['DateTime']['input']>;
  readonly exists: InputMaybe<Scalars['Boolean']['input']>;
  readonly greater_than: InputMaybe<Scalars['DateTime']['input']>;
  readonly greater_than_equal: InputMaybe<Scalars['DateTime']['input']>;
  readonly less_than: InputMaybe<Scalars['DateTime']['input']>;
  readonly less_than_equal: InputMaybe<Scalars['DateTime']['input']>;
  readonly like: InputMaybe<Scalars['DateTime']['input']>;
  readonly not_equals: InputMaybe<Scalars['DateTime']['input']>;
};

export type Question_Where = {
  readonly AND: InputMaybe<ReadonlyArray<InputMaybe<Question_Where_And>>>;
  readonly OR: InputMaybe<ReadonlyArray<InputMaybe<Question_Where_Or>>>;
  readonly answers__id: InputMaybe<Question_Answers__Id_Operator>;
  readonly answers__isCorrect: InputMaybe<Question_Answers__IsCorrect_Operator>;
  readonly answers__label: InputMaybe<Question_Answers__Label_Operator>;
  readonly answers__value: InputMaybe<Question_Answers__Value_Operator>;
  readonly createdAt: InputMaybe<Question_CreatedAt_Operator>;
  readonly id: InputMaybe<Question_Id_Operator>;
  readonly matchingPairs__id: InputMaybe<Question_MatchingPairs__Id_Operator>;
  readonly matchingPairs__left: InputMaybe<Question_MatchingPairs__Left_Operator>;
  readonly matchingPairs__right: InputMaybe<Question_MatchingPairs__Right_Operator>;
  readonly questionText: InputMaybe<Question_QuestionText_Operator>;
  readonly questionType: InputMaybe<Question_QuestionType_Operator>;
  readonly recommendation: InputMaybe<Question_Recommendation_Operator>;
  readonly textAnswer: InputMaybe<Question_TextAnswer_Operator>;
  readonly updatedAt: InputMaybe<Question_UpdatedAt_Operator>;
};

export type Question_Where_And = {
  readonly AND: InputMaybe<ReadonlyArray<InputMaybe<Question_Where_And>>>;
  readonly OR: InputMaybe<ReadonlyArray<InputMaybe<Question_Where_Or>>>;
  readonly answers__id: InputMaybe<Question_Answers__Id_Operator>;
  readonly answers__isCorrect: InputMaybe<Question_Answers__IsCorrect_Operator>;
  readonly answers__label: InputMaybe<Question_Answers__Label_Operator>;
  readonly answers__value: InputMaybe<Question_Answers__Value_Operator>;
  readonly createdAt: InputMaybe<Question_CreatedAt_Operator>;
  readonly id: InputMaybe<Question_Id_Operator>;
  readonly matchingPairs__id: InputMaybe<Question_MatchingPairs__Id_Operator>;
  readonly matchingPairs__left: InputMaybe<Question_MatchingPairs__Left_Operator>;
  readonly matchingPairs__right: InputMaybe<Question_MatchingPairs__Right_Operator>;
  readonly questionText: InputMaybe<Question_QuestionText_Operator>;
  readonly questionType: InputMaybe<Question_QuestionType_Operator>;
  readonly recommendation: InputMaybe<Question_Recommendation_Operator>;
  readonly textAnswer: InputMaybe<Question_TextAnswer_Operator>;
  readonly updatedAt: InputMaybe<Question_UpdatedAt_Operator>;
};

export type Question_Where_Or = {
  readonly AND: InputMaybe<ReadonlyArray<InputMaybe<Question_Where_And>>>;
  readonly OR: InputMaybe<ReadonlyArray<InputMaybe<Question_Where_Or>>>;
  readonly answers__id: InputMaybe<Question_Answers__Id_Operator>;
  readonly answers__isCorrect: InputMaybe<Question_Answers__IsCorrect_Operator>;
  readonly answers__label: InputMaybe<Question_Answers__Label_Operator>;
  readonly answers__value: InputMaybe<Question_Answers__Value_Operator>;
  readonly createdAt: InputMaybe<Question_CreatedAt_Operator>;
  readonly id: InputMaybe<Question_Id_Operator>;
  readonly matchingPairs__id: InputMaybe<Question_MatchingPairs__Id_Operator>;
  readonly matchingPairs__left: InputMaybe<Question_MatchingPairs__Left_Operator>;
  readonly matchingPairs__right: InputMaybe<Question_MatchingPairs__Right_Operator>;
  readonly questionText: InputMaybe<Question_QuestionText_Operator>;
  readonly questionType: InputMaybe<Question_QuestionType_Operator>;
  readonly recommendation: InputMaybe<Question_Recommendation_Operator>;
  readonly textAnswer: InputMaybe<Question_TextAnswer_Operator>;
  readonly updatedAt: InputMaybe<Question_UpdatedAt_Operator>;
};

export type Questions = {
  readonly __typename?: 'Questions';
  readonly docs: ReadonlyArray<Question>;
  readonly hasNextPage: Scalars['Boolean']['output'];
  readonly hasPrevPage: Scalars['Boolean']['output'];
  readonly limit: Scalars['Int']['output'];
  readonly nextPage: Maybe<Scalars['Int']['output']>;
  readonly offset: Maybe<Scalars['Int']['output']>;
  readonly page: Scalars['Int']['output'];
  readonly pagingCounter: Scalars['Int']['output'];
  readonly prevPage: Maybe<Scalars['Int']['output']>;
  readonly totalDocs: Scalars['Int']['output'];
  readonly totalPages: Scalars['Int']['output'];
};

export type QuestionsCreateAccess = {
  readonly __typename?: 'QuestionsCreateAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where: Maybe<Scalars['JSONObject']['output']>;
};

export type QuestionsCreateDocAccess = {
  readonly __typename?: 'QuestionsCreateDocAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where: Maybe<Scalars['JSONObject']['output']>;
};

export type QuestionsDeleteAccess = {
  readonly __typename?: 'QuestionsDeleteAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where: Maybe<Scalars['JSONObject']['output']>;
};

export type QuestionsDeleteDocAccess = {
  readonly __typename?: 'QuestionsDeleteDocAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where: Maybe<Scalars['JSONObject']['output']>;
};

export type QuestionsDocAccessFields = {
  readonly __typename?: 'QuestionsDocAccessFields';
  readonly answers: Maybe<QuestionsDocAccessFields_Answers>;
  readonly createdAt: Maybe<QuestionsDocAccessFields_CreatedAt>;
  readonly matchingPairs: Maybe<QuestionsDocAccessFields_MatchingPairs>;
  readonly questionText: Maybe<QuestionsDocAccessFields_QuestionText>;
  readonly questionType: Maybe<QuestionsDocAccessFields_QuestionType>;
  readonly recommendation: Maybe<QuestionsDocAccessFields_Recommendation>;
  readonly textAnswer: Maybe<QuestionsDocAccessFields_TextAnswer>;
  readonly updatedAt: Maybe<QuestionsDocAccessFields_UpdatedAt>;
};

export type QuestionsDocAccessFields_Answers = {
  readonly __typename?: 'QuestionsDocAccessFields_answers';
  readonly create: Maybe<QuestionsDocAccessFields_Answers_Create>;
  readonly delete: Maybe<QuestionsDocAccessFields_Answers_Delete>;
  readonly fields: Maybe<QuestionsDocAccessFields_Answers_Fields>;
  readonly read: Maybe<QuestionsDocAccessFields_Answers_Read>;
  readonly update: Maybe<QuestionsDocAccessFields_Answers_Update>;
};

export type QuestionsDocAccessFields_Answers_Create = {
  readonly __typename?: 'QuestionsDocAccessFields_answers_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type QuestionsDocAccessFields_Answers_Delete = {
  readonly __typename?: 'QuestionsDocAccessFields_answers_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type QuestionsDocAccessFields_Answers_Fields = {
  readonly __typename?: 'QuestionsDocAccessFields_answers_Fields';
  readonly id: Maybe<QuestionsDocAccessFields_Answers_Id>;
  readonly isCorrect: Maybe<QuestionsDocAccessFields_Answers_IsCorrect>;
  readonly label: Maybe<QuestionsDocAccessFields_Answers_Label>;
  readonly value: Maybe<QuestionsDocAccessFields_Answers_Value>;
};

export type QuestionsDocAccessFields_Answers_Read = {
  readonly __typename?: 'QuestionsDocAccessFields_answers_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type QuestionsDocAccessFields_Answers_Update = {
  readonly __typename?: 'QuestionsDocAccessFields_answers_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type QuestionsDocAccessFields_Answers_Id = {
  readonly __typename?: 'QuestionsDocAccessFields_answers_id';
  readonly create: Maybe<QuestionsDocAccessFields_Answers_Id_Create>;
  readonly delete: Maybe<QuestionsDocAccessFields_Answers_Id_Delete>;
  readonly read: Maybe<QuestionsDocAccessFields_Answers_Id_Read>;
  readonly update: Maybe<QuestionsDocAccessFields_Answers_Id_Update>;
};

export type QuestionsDocAccessFields_Answers_Id_Create = {
  readonly __typename?: 'QuestionsDocAccessFields_answers_id_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type QuestionsDocAccessFields_Answers_Id_Delete = {
  readonly __typename?: 'QuestionsDocAccessFields_answers_id_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type QuestionsDocAccessFields_Answers_Id_Read = {
  readonly __typename?: 'QuestionsDocAccessFields_answers_id_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type QuestionsDocAccessFields_Answers_Id_Update = {
  readonly __typename?: 'QuestionsDocAccessFields_answers_id_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type QuestionsDocAccessFields_Answers_IsCorrect = {
  readonly __typename?: 'QuestionsDocAccessFields_answers_isCorrect';
  readonly create: Maybe<QuestionsDocAccessFields_Answers_IsCorrect_Create>;
  readonly delete: Maybe<QuestionsDocAccessFields_Answers_IsCorrect_Delete>;
  readonly read: Maybe<QuestionsDocAccessFields_Answers_IsCorrect_Read>;
  readonly update: Maybe<QuestionsDocAccessFields_Answers_IsCorrect_Update>;
};

export type QuestionsDocAccessFields_Answers_IsCorrect_Create = {
  readonly __typename?: 'QuestionsDocAccessFields_answers_isCorrect_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type QuestionsDocAccessFields_Answers_IsCorrect_Delete = {
  readonly __typename?: 'QuestionsDocAccessFields_answers_isCorrect_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type QuestionsDocAccessFields_Answers_IsCorrect_Read = {
  readonly __typename?: 'QuestionsDocAccessFields_answers_isCorrect_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type QuestionsDocAccessFields_Answers_IsCorrect_Update = {
  readonly __typename?: 'QuestionsDocAccessFields_answers_isCorrect_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type QuestionsDocAccessFields_Answers_Label = {
  readonly __typename?: 'QuestionsDocAccessFields_answers_label';
  readonly create: Maybe<QuestionsDocAccessFields_Answers_Label_Create>;
  readonly delete: Maybe<QuestionsDocAccessFields_Answers_Label_Delete>;
  readonly read: Maybe<QuestionsDocAccessFields_Answers_Label_Read>;
  readonly update: Maybe<QuestionsDocAccessFields_Answers_Label_Update>;
};

export type QuestionsDocAccessFields_Answers_Label_Create = {
  readonly __typename?: 'QuestionsDocAccessFields_answers_label_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type QuestionsDocAccessFields_Answers_Label_Delete = {
  readonly __typename?: 'QuestionsDocAccessFields_answers_label_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type QuestionsDocAccessFields_Answers_Label_Read = {
  readonly __typename?: 'QuestionsDocAccessFields_answers_label_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type QuestionsDocAccessFields_Answers_Label_Update = {
  readonly __typename?: 'QuestionsDocAccessFields_answers_label_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type QuestionsDocAccessFields_Answers_Value = {
  readonly __typename?: 'QuestionsDocAccessFields_answers_value';
  readonly create: Maybe<QuestionsDocAccessFields_Answers_Value_Create>;
  readonly delete: Maybe<QuestionsDocAccessFields_Answers_Value_Delete>;
  readonly read: Maybe<QuestionsDocAccessFields_Answers_Value_Read>;
  readonly update: Maybe<QuestionsDocAccessFields_Answers_Value_Update>;
};

export type QuestionsDocAccessFields_Answers_Value_Create = {
  readonly __typename?: 'QuestionsDocAccessFields_answers_value_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type QuestionsDocAccessFields_Answers_Value_Delete = {
  readonly __typename?: 'QuestionsDocAccessFields_answers_value_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type QuestionsDocAccessFields_Answers_Value_Read = {
  readonly __typename?: 'QuestionsDocAccessFields_answers_value_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type QuestionsDocAccessFields_Answers_Value_Update = {
  readonly __typename?: 'QuestionsDocAccessFields_answers_value_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type QuestionsDocAccessFields_CreatedAt = {
  readonly __typename?: 'QuestionsDocAccessFields_createdAt';
  readonly create: Maybe<QuestionsDocAccessFields_CreatedAt_Create>;
  readonly delete: Maybe<QuestionsDocAccessFields_CreatedAt_Delete>;
  readonly read: Maybe<QuestionsDocAccessFields_CreatedAt_Read>;
  readonly update: Maybe<QuestionsDocAccessFields_CreatedAt_Update>;
};

export type QuestionsDocAccessFields_CreatedAt_Create = {
  readonly __typename?: 'QuestionsDocAccessFields_createdAt_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type QuestionsDocAccessFields_CreatedAt_Delete = {
  readonly __typename?: 'QuestionsDocAccessFields_createdAt_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type QuestionsDocAccessFields_CreatedAt_Read = {
  readonly __typename?: 'QuestionsDocAccessFields_createdAt_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type QuestionsDocAccessFields_CreatedAt_Update = {
  readonly __typename?: 'QuestionsDocAccessFields_createdAt_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type QuestionsDocAccessFields_MatchingPairs = {
  readonly __typename?: 'QuestionsDocAccessFields_matchingPairs';
  readonly create: Maybe<QuestionsDocAccessFields_MatchingPairs_Create>;
  readonly delete: Maybe<QuestionsDocAccessFields_MatchingPairs_Delete>;
  readonly fields: Maybe<QuestionsDocAccessFields_MatchingPairs_Fields>;
  readonly read: Maybe<QuestionsDocAccessFields_MatchingPairs_Read>;
  readonly update: Maybe<QuestionsDocAccessFields_MatchingPairs_Update>;
};

export type QuestionsDocAccessFields_MatchingPairs_Create = {
  readonly __typename?: 'QuestionsDocAccessFields_matchingPairs_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type QuestionsDocAccessFields_MatchingPairs_Delete = {
  readonly __typename?: 'QuestionsDocAccessFields_matchingPairs_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type QuestionsDocAccessFields_MatchingPairs_Fields = {
  readonly __typename?: 'QuestionsDocAccessFields_matchingPairs_Fields';
  readonly id: Maybe<QuestionsDocAccessFields_MatchingPairs_Id>;
  readonly left: Maybe<QuestionsDocAccessFields_MatchingPairs_Left>;
  readonly right: Maybe<QuestionsDocAccessFields_MatchingPairs_Right>;
};

export type QuestionsDocAccessFields_MatchingPairs_Read = {
  readonly __typename?: 'QuestionsDocAccessFields_matchingPairs_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type QuestionsDocAccessFields_MatchingPairs_Update = {
  readonly __typename?: 'QuestionsDocAccessFields_matchingPairs_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type QuestionsDocAccessFields_MatchingPairs_Id = {
  readonly __typename?: 'QuestionsDocAccessFields_matchingPairs_id';
  readonly create: Maybe<QuestionsDocAccessFields_MatchingPairs_Id_Create>;
  readonly delete: Maybe<QuestionsDocAccessFields_MatchingPairs_Id_Delete>;
  readonly read: Maybe<QuestionsDocAccessFields_MatchingPairs_Id_Read>;
  readonly update: Maybe<QuestionsDocAccessFields_MatchingPairs_Id_Update>;
};

export type QuestionsDocAccessFields_MatchingPairs_Id_Create = {
  readonly __typename?: 'QuestionsDocAccessFields_matchingPairs_id_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type QuestionsDocAccessFields_MatchingPairs_Id_Delete = {
  readonly __typename?: 'QuestionsDocAccessFields_matchingPairs_id_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type QuestionsDocAccessFields_MatchingPairs_Id_Read = {
  readonly __typename?: 'QuestionsDocAccessFields_matchingPairs_id_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type QuestionsDocAccessFields_MatchingPairs_Id_Update = {
  readonly __typename?: 'QuestionsDocAccessFields_matchingPairs_id_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type QuestionsDocAccessFields_MatchingPairs_Left = {
  readonly __typename?: 'QuestionsDocAccessFields_matchingPairs_left';
  readonly create: Maybe<QuestionsDocAccessFields_MatchingPairs_Left_Create>;
  readonly delete: Maybe<QuestionsDocAccessFields_MatchingPairs_Left_Delete>;
  readonly read: Maybe<QuestionsDocAccessFields_MatchingPairs_Left_Read>;
  readonly update: Maybe<QuestionsDocAccessFields_MatchingPairs_Left_Update>;
};

export type QuestionsDocAccessFields_MatchingPairs_Left_Create = {
  readonly __typename?: 'QuestionsDocAccessFields_matchingPairs_left_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type QuestionsDocAccessFields_MatchingPairs_Left_Delete = {
  readonly __typename?: 'QuestionsDocAccessFields_matchingPairs_left_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type QuestionsDocAccessFields_MatchingPairs_Left_Read = {
  readonly __typename?: 'QuestionsDocAccessFields_matchingPairs_left_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type QuestionsDocAccessFields_MatchingPairs_Left_Update = {
  readonly __typename?: 'QuestionsDocAccessFields_matchingPairs_left_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type QuestionsDocAccessFields_MatchingPairs_Right = {
  readonly __typename?: 'QuestionsDocAccessFields_matchingPairs_right';
  readonly create: Maybe<QuestionsDocAccessFields_MatchingPairs_Right_Create>;
  readonly delete: Maybe<QuestionsDocAccessFields_MatchingPairs_Right_Delete>;
  readonly read: Maybe<QuestionsDocAccessFields_MatchingPairs_Right_Read>;
  readonly update: Maybe<QuestionsDocAccessFields_MatchingPairs_Right_Update>;
};

export type QuestionsDocAccessFields_MatchingPairs_Right_Create = {
  readonly __typename?: 'QuestionsDocAccessFields_matchingPairs_right_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type QuestionsDocAccessFields_MatchingPairs_Right_Delete = {
  readonly __typename?: 'QuestionsDocAccessFields_matchingPairs_right_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type QuestionsDocAccessFields_MatchingPairs_Right_Read = {
  readonly __typename?: 'QuestionsDocAccessFields_matchingPairs_right_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type QuestionsDocAccessFields_MatchingPairs_Right_Update = {
  readonly __typename?: 'QuestionsDocAccessFields_matchingPairs_right_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type QuestionsDocAccessFields_QuestionText = {
  readonly __typename?: 'QuestionsDocAccessFields_questionText';
  readonly create: Maybe<QuestionsDocAccessFields_QuestionText_Create>;
  readonly delete: Maybe<QuestionsDocAccessFields_QuestionText_Delete>;
  readonly read: Maybe<QuestionsDocAccessFields_QuestionText_Read>;
  readonly update: Maybe<QuestionsDocAccessFields_QuestionText_Update>;
};

export type QuestionsDocAccessFields_QuestionText_Create = {
  readonly __typename?: 'QuestionsDocAccessFields_questionText_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type QuestionsDocAccessFields_QuestionText_Delete = {
  readonly __typename?: 'QuestionsDocAccessFields_questionText_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type QuestionsDocAccessFields_QuestionText_Read = {
  readonly __typename?: 'QuestionsDocAccessFields_questionText_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type QuestionsDocAccessFields_QuestionText_Update = {
  readonly __typename?: 'QuestionsDocAccessFields_questionText_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type QuestionsDocAccessFields_QuestionType = {
  readonly __typename?: 'QuestionsDocAccessFields_questionType';
  readonly create: Maybe<QuestionsDocAccessFields_QuestionType_Create>;
  readonly delete: Maybe<QuestionsDocAccessFields_QuestionType_Delete>;
  readonly read: Maybe<QuestionsDocAccessFields_QuestionType_Read>;
  readonly update: Maybe<QuestionsDocAccessFields_QuestionType_Update>;
};

export type QuestionsDocAccessFields_QuestionType_Create = {
  readonly __typename?: 'QuestionsDocAccessFields_questionType_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type QuestionsDocAccessFields_QuestionType_Delete = {
  readonly __typename?: 'QuestionsDocAccessFields_questionType_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type QuestionsDocAccessFields_QuestionType_Read = {
  readonly __typename?: 'QuestionsDocAccessFields_questionType_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type QuestionsDocAccessFields_QuestionType_Update = {
  readonly __typename?: 'QuestionsDocAccessFields_questionType_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type QuestionsDocAccessFields_Recommendation = {
  readonly __typename?: 'QuestionsDocAccessFields_recommendation';
  readonly create: Maybe<QuestionsDocAccessFields_Recommendation_Create>;
  readonly delete: Maybe<QuestionsDocAccessFields_Recommendation_Delete>;
  readonly read: Maybe<QuestionsDocAccessFields_Recommendation_Read>;
  readonly update: Maybe<QuestionsDocAccessFields_Recommendation_Update>;
};

export type QuestionsDocAccessFields_Recommendation_Create = {
  readonly __typename?: 'QuestionsDocAccessFields_recommendation_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type QuestionsDocAccessFields_Recommendation_Delete = {
  readonly __typename?: 'QuestionsDocAccessFields_recommendation_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type QuestionsDocAccessFields_Recommendation_Read = {
  readonly __typename?: 'QuestionsDocAccessFields_recommendation_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type QuestionsDocAccessFields_Recommendation_Update = {
  readonly __typename?: 'QuestionsDocAccessFields_recommendation_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type QuestionsDocAccessFields_TextAnswer = {
  readonly __typename?: 'QuestionsDocAccessFields_textAnswer';
  readonly create: Maybe<QuestionsDocAccessFields_TextAnswer_Create>;
  readonly delete: Maybe<QuestionsDocAccessFields_TextAnswer_Delete>;
  readonly read: Maybe<QuestionsDocAccessFields_TextAnswer_Read>;
  readonly update: Maybe<QuestionsDocAccessFields_TextAnswer_Update>;
};

export type QuestionsDocAccessFields_TextAnswer_Create = {
  readonly __typename?: 'QuestionsDocAccessFields_textAnswer_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type QuestionsDocAccessFields_TextAnswer_Delete = {
  readonly __typename?: 'QuestionsDocAccessFields_textAnswer_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type QuestionsDocAccessFields_TextAnswer_Read = {
  readonly __typename?: 'QuestionsDocAccessFields_textAnswer_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type QuestionsDocAccessFields_TextAnswer_Update = {
  readonly __typename?: 'QuestionsDocAccessFields_textAnswer_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type QuestionsDocAccessFields_UpdatedAt = {
  readonly __typename?: 'QuestionsDocAccessFields_updatedAt';
  readonly create: Maybe<QuestionsDocAccessFields_UpdatedAt_Create>;
  readonly delete: Maybe<QuestionsDocAccessFields_UpdatedAt_Delete>;
  readonly read: Maybe<QuestionsDocAccessFields_UpdatedAt_Read>;
  readonly update: Maybe<QuestionsDocAccessFields_UpdatedAt_Update>;
};

export type QuestionsDocAccessFields_UpdatedAt_Create = {
  readonly __typename?: 'QuestionsDocAccessFields_updatedAt_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type QuestionsDocAccessFields_UpdatedAt_Delete = {
  readonly __typename?: 'QuestionsDocAccessFields_updatedAt_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type QuestionsDocAccessFields_UpdatedAt_Read = {
  readonly __typename?: 'QuestionsDocAccessFields_updatedAt_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type QuestionsDocAccessFields_UpdatedAt_Update = {
  readonly __typename?: 'QuestionsDocAccessFields_updatedAt_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type QuestionsFields = {
  readonly __typename?: 'QuestionsFields';
  readonly answers: Maybe<QuestionsFields_Answers>;
  readonly createdAt: Maybe<QuestionsFields_CreatedAt>;
  readonly matchingPairs: Maybe<QuestionsFields_MatchingPairs>;
  readonly questionText: Maybe<QuestionsFields_QuestionText>;
  readonly questionType: Maybe<QuestionsFields_QuestionType>;
  readonly recommendation: Maybe<QuestionsFields_Recommendation>;
  readonly textAnswer: Maybe<QuestionsFields_TextAnswer>;
  readonly updatedAt: Maybe<QuestionsFields_UpdatedAt>;
};

export type QuestionsFields_Answers = {
  readonly __typename?: 'QuestionsFields_answers';
  readonly create: Maybe<QuestionsFields_Answers_Create>;
  readonly delete: Maybe<QuestionsFields_Answers_Delete>;
  readonly fields: Maybe<QuestionsFields_Answers_Fields>;
  readonly read: Maybe<QuestionsFields_Answers_Read>;
  readonly update: Maybe<QuestionsFields_Answers_Update>;
};

export type QuestionsFields_Answers_Create = {
  readonly __typename?: 'QuestionsFields_answers_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type QuestionsFields_Answers_Delete = {
  readonly __typename?: 'QuestionsFields_answers_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type QuestionsFields_Answers_Fields = {
  readonly __typename?: 'QuestionsFields_answers_Fields';
  readonly id: Maybe<QuestionsFields_Answers_Id>;
  readonly isCorrect: Maybe<QuestionsFields_Answers_IsCorrect>;
  readonly label: Maybe<QuestionsFields_Answers_Label>;
  readonly value: Maybe<QuestionsFields_Answers_Value>;
};

export type QuestionsFields_Answers_Read = {
  readonly __typename?: 'QuestionsFields_answers_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type QuestionsFields_Answers_Update = {
  readonly __typename?: 'QuestionsFields_answers_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type QuestionsFields_Answers_Id = {
  readonly __typename?: 'QuestionsFields_answers_id';
  readonly create: Maybe<QuestionsFields_Answers_Id_Create>;
  readonly delete: Maybe<QuestionsFields_Answers_Id_Delete>;
  readonly read: Maybe<QuestionsFields_Answers_Id_Read>;
  readonly update: Maybe<QuestionsFields_Answers_Id_Update>;
};

export type QuestionsFields_Answers_Id_Create = {
  readonly __typename?: 'QuestionsFields_answers_id_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type QuestionsFields_Answers_Id_Delete = {
  readonly __typename?: 'QuestionsFields_answers_id_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type QuestionsFields_Answers_Id_Read = {
  readonly __typename?: 'QuestionsFields_answers_id_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type QuestionsFields_Answers_Id_Update = {
  readonly __typename?: 'QuestionsFields_answers_id_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type QuestionsFields_Answers_IsCorrect = {
  readonly __typename?: 'QuestionsFields_answers_isCorrect';
  readonly create: Maybe<QuestionsFields_Answers_IsCorrect_Create>;
  readonly delete: Maybe<QuestionsFields_Answers_IsCorrect_Delete>;
  readonly read: Maybe<QuestionsFields_Answers_IsCorrect_Read>;
  readonly update: Maybe<QuestionsFields_Answers_IsCorrect_Update>;
};

export type QuestionsFields_Answers_IsCorrect_Create = {
  readonly __typename?: 'QuestionsFields_answers_isCorrect_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type QuestionsFields_Answers_IsCorrect_Delete = {
  readonly __typename?: 'QuestionsFields_answers_isCorrect_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type QuestionsFields_Answers_IsCorrect_Read = {
  readonly __typename?: 'QuestionsFields_answers_isCorrect_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type QuestionsFields_Answers_IsCorrect_Update = {
  readonly __typename?: 'QuestionsFields_answers_isCorrect_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type QuestionsFields_Answers_Label = {
  readonly __typename?: 'QuestionsFields_answers_label';
  readonly create: Maybe<QuestionsFields_Answers_Label_Create>;
  readonly delete: Maybe<QuestionsFields_Answers_Label_Delete>;
  readonly read: Maybe<QuestionsFields_Answers_Label_Read>;
  readonly update: Maybe<QuestionsFields_Answers_Label_Update>;
};

export type QuestionsFields_Answers_Label_Create = {
  readonly __typename?: 'QuestionsFields_answers_label_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type QuestionsFields_Answers_Label_Delete = {
  readonly __typename?: 'QuestionsFields_answers_label_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type QuestionsFields_Answers_Label_Read = {
  readonly __typename?: 'QuestionsFields_answers_label_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type QuestionsFields_Answers_Label_Update = {
  readonly __typename?: 'QuestionsFields_answers_label_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type QuestionsFields_Answers_Value = {
  readonly __typename?: 'QuestionsFields_answers_value';
  readonly create: Maybe<QuestionsFields_Answers_Value_Create>;
  readonly delete: Maybe<QuestionsFields_Answers_Value_Delete>;
  readonly read: Maybe<QuestionsFields_Answers_Value_Read>;
  readonly update: Maybe<QuestionsFields_Answers_Value_Update>;
};

export type QuestionsFields_Answers_Value_Create = {
  readonly __typename?: 'QuestionsFields_answers_value_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type QuestionsFields_Answers_Value_Delete = {
  readonly __typename?: 'QuestionsFields_answers_value_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type QuestionsFields_Answers_Value_Read = {
  readonly __typename?: 'QuestionsFields_answers_value_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type QuestionsFields_Answers_Value_Update = {
  readonly __typename?: 'QuestionsFields_answers_value_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type QuestionsFields_CreatedAt = {
  readonly __typename?: 'QuestionsFields_createdAt';
  readonly create: Maybe<QuestionsFields_CreatedAt_Create>;
  readonly delete: Maybe<QuestionsFields_CreatedAt_Delete>;
  readonly read: Maybe<QuestionsFields_CreatedAt_Read>;
  readonly update: Maybe<QuestionsFields_CreatedAt_Update>;
};

export type QuestionsFields_CreatedAt_Create = {
  readonly __typename?: 'QuestionsFields_createdAt_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type QuestionsFields_CreatedAt_Delete = {
  readonly __typename?: 'QuestionsFields_createdAt_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type QuestionsFields_CreatedAt_Read = {
  readonly __typename?: 'QuestionsFields_createdAt_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type QuestionsFields_CreatedAt_Update = {
  readonly __typename?: 'QuestionsFields_createdAt_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type QuestionsFields_MatchingPairs = {
  readonly __typename?: 'QuestionsFields_matchingPairs';
  readonly create: Maybe<QuestionsFields_MatchingPairs_Create>;
  readonly delete: Maybe<QuestionsFields_MatchingPairs_Delete>;
  readonly fields: Maybe<QuestionsFields_MatchingPairs_Fields>;
  readonly read: Maybe<QuestionsFields_MatchingPairs_Read>;
  readonly update: Maybe<QuestionsFields_MatchingPairs_Update>;
};

export type QuestionsFields_MatchingPairs_Create = {
  readonly __typename?: 'QuestionsFields_matchingPairs_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type QuestionsFields_MatchingPairs_Delete = {
  readonly __typename?: 'QuestionsFields_matchingPairs_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type QuestionsFields_MatchingPairs_Fields = {
  readonly __typename?: 'QuestionsFields_matchingPairs_Fields';
  readonly id: Maybe<QuestionsFields_MatchingPairs_Id>;
  readonly left: Maybe<QuestionsFields_MatchingPairs_Left>;
  readonly right: Maybe<QuestionsFields_MatchingPairs_Right>;
};

export type QuestionsFields_MatchingPairs_Read = {
  readonly __typename?: 'QuestionsFields_matchingPairs_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type QuestionsFields_MatchingPairs_Update = {
  readonly __typename?: 'QuestionsFields_matchingPairs_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type QuestionsFields_MatchingPairs_Id = {
  readonly __typename?: 'QuestionsFields_matchingPairs_id';
  readonly create: Maybe<QuestionsFields_MatchingPairs_Id_Create>;
  readonly delete: Maybe<QuestionsFields_MatchingPairs_Id_Delete>;
  readonly read: Maybe<QuestionsFields_MatchingPairs_Id_Read>;
  readonly update: Maybe<QuestionsFields_MatchingPairs_Id_Update>;
};

export type QuestionsFields_MatchingPairs_Id_Create = {
  readonly __typename?: 'QuestionsFields_matchingPairs_id_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type QuestionsFields_MatchingPairs_Id_Delete = {
  readonly __typename?: 'QuestionsFields_matchingPairs_id_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type QuestionsFields_MatchingPairs_Id_Read = {
  readonly __typename?: 'QuestionsFields_matchingPairs_id_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type QuestionsFields_MatchingPairs_Id_Update = {
  readonly __typename?: 'QuestionsFields_matchingPairs_id_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type QuestionsFields_MatchingPairs_Left = {
  readonly __typename?: 'QuestionsFields_matchingPairs_left';
  readonly create: Maybe<QuestionsFields_MatchingPairs_Left_Create>;
  readonly delete: Maybe<QuestionsFields_MatchingPairs_Left_Delete>;
  readonly read: Maybe<QuestionsFields_MatchingPairs_Left_Read>;
  readonly update: Maybe<QuestionsFields_MatchingPairs_Left_Update>;
};

export type QuestionsFields_MatchingPairs_Left_Create = {
  readonly __typename?: 'QuestionsFields_matchingPairs_left_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type QuestionsFields_MatchingPairs_Left_Delete = {
  readonly __typename?: 'QuestionsFields_matchingPairs_left_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type QuestionsFields_MatchingPairs_Left_Read = {
  readonly __typename?: 'QuestionsFields_matchingPairs_left_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type QuestionsFields_MatchingPairs_Left_Update = {
  readonly __typename?: 'QuestionsFields_matchingPairs_left_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type QuestionsFields_MatchingPairs_Right = {
  readonly __typename?: 'QuestionsFields_matchingPairs_right';
  readonly create: Maybe<QuestionsFields_MatchingPairs_Right_Create>;
  readonly delete: Maybe<QuestionsFields_MatchingPairs_Right_Delete>;
  readonly read: Maybe<QuestionsFields_MatchingPairs_Right_Read>;
  readonly update: Maybe<QuestionsFields_MatchingPairs_Right_Update>;
};

export type QuestionsFields_MatchingPairs_Right_Create = {
  readonly __typename?: 'QuestionsFields_matchingPairs_right_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type QuestionsFields_MatchingPairs_Right_Delete = {
  readonly __typename?: 'QuestionsFields_matchingPairs_right_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type QuestionsFields_MatchingPairs_Right_Read = {
  readonly __typename?: 'QuestionsFields_matchingPairs_right_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type QuestionsFields_MatchingPairs_Right_Update = {
  readonly __typename?: 'QuestionsFields_matchingPairs_right_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type QuestionsFields_QuestionText = {
  readonly __typename?: 'QuestionsFields_questionText';
  readonly create: Maybe<QuestionsFields_QuestionText_Create>;
  readonly delete: Maybe<QuestionsFields_QuestionText_Delete>;
  readonly read: Maybe<QuestionsFields_QuestionText_Read>;
  readonly update: Maybe<QuestionsFields_QuestionText_Update>;
};

export type QuestionsFields_QuestionText_Create = {
  readonly __typename?: 'QuestionsFields_questionText_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type QuestionsFields_QuestionText_Delete = {
  readonly __typename?: 'QuestionsFields_questionText_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type QuestionsFields_QuestionText_Read = {
  readonly __typename?: 'QuestionsFields_questionText_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type QuestionsFields_QuestionText_Update = {
  readonly __typename?: 'QuestionsFields_questionText_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type QuestionsFields_QuestionType = {
  readonly __typename?: 'QuestionsFields_questionType';
  readonly create: Maybe<QuestionsFields_QuestionType_Create>;
  readonly delete: Maybe<QuestionsFields_QuestionType_Delete>;
  readonly read: Maybe<QuestionsFields_QuestionType_Read>;
  readonly update: Maybe<QuestionsFields_QuestionType_Update>;
};

export type QuestionsFields_QuestionType_Create = {
  readonly __typename?: 'QuestionsFields_questionType_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type QuestionsFields_QuestionType_Delete = {
  readonly __typename?: 'QuestionsFields_questionType_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type QuestionsFields_QuestionType_Read = {
  readonly __typename?: 'QuestionsFields_questionType_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type QuestionsFields_QuestionType_Update = {
  readonly __typename?: 'QuestionsFields_questionType_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type QuestionsFields_Recommendation = {
  readonly __typename?: 'QuestionsFields_recommendation';
  readonly create: Maybe<QuestionsFields_Recommendation_Create>;
  readonly delete: Maybe<QuestionsFields_Recommendation_Delete>;
  readonly read: Maybe<QuestionsFields_Recommendation_Read>;
  readonly update: Maybe<QuestionsFields_Recommendation_Update>;
};

export type QuestionsFields_Recommendation_Create = {
  readonly __typename?: 'QuestionsFields_recommendation_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type QuestionsFields_Recommendation_Delete = {
  readonly __typename?: 'QuestionsFields_recommendation_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type QuestionsFields_Recommendation_Read = {
  readonly __typename?: 'QuestionsFields_recommendation_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type QuestionsFields_Recommendation_Update = {
  readonly __typename?: 'QuestionsFields_recommendation_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type QuestionsFields_TextAnswer = {
  readonly __typename?: 'QuestionsFields_textAnswer';
  readonly create: Maybe<QuestionsFields_TextAnswer_Create>;
  readonly delete: Maybe<QuestionsFields_TextAnswer_Delete>;
  readonly read: Maybe<QuestionsFields_TextAnswer_Read>;
  readonly update: Maybe<QuestionsFields_TextAnswer_Update>;
};

export type QuestionsFields_TextAnswer_Create = {
  readonly __typename?: 'QuestionsFields_textAnswer_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type QuestionsFields_TextAnswer_Delete = {
  readonly __typename?: 'QuestionsFields_textAnswer_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type QuestionsFields_TextAnswer_Read = {
  readonly __typename?: 'QuestionsFields_textAnswer_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type QuestionsFields_TextAnswer_Update = {
  readonly __typename?: 'QuestionsFields_textAnswer_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type QuestionsFields_UpdatedAt = {
  readonly __typename?: 'QuestionsFields_updatedAt';
  readonly create: Maybe<QuestionsFields_UpdatedAt_Create>;
  readonly delete: Maybe<QuestionsFields_UpdatedAt_Delete>;
  readonly read: Maybe<QuestionsFields_UpdatedAt_Read>;
  readonly update: Maybe<QuestionsFields_UpdatedAt_Update>;
};

export type QuestionsFields_UpdatedAt_Create = {
  readonly __typename?: 'QuestionsFields_updatedAt_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type QuestionsFields_UpdatedAt_Delete = {
  readonly __typename?: 'QuestionsFields_updatedAt_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type QuestionsFields_UpdatedAt_Read = {
  readonly __typename?: 'QuestionsFields_updatedAt_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type QuestionsFields_UpdatedAt_Update = {
  readonly __typename?: 'QuestionsFields_updatedAt_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type QuestionsReadAccess = {
  readonly __typename?: 'QuestionsReadAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where: Maybe<Scalars['JSONObject']['output']>;
};

export type QuestionsReadDocAccess = {
  readonly __typename?: 'QuestionsReadDocAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where: Maybe<Scalars['JSONObject']['output']>;
};

export type QuestionsUpdateAccess = {
  readonly __typename?: 'QuestionsUpdateAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where: Maybe<Scalars['JSONObject']['output']>;
};

export type QuestionsUpdateDocAccess = {
  readonly __typename?: 'QuestionsUpdateDocAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where: Maybe<Scalars['JSONObject']['output']>;
};

export type Recomendation = {
  readonly __typename?: 'Recomendation';
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly description: Scalars['JSON']['output'];
  readonly id: Scalars['Int']['output'];
  readonly title: Scalars['String']['output'];
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
};


export type RecomendationDescriptionArgs = {
  depth: InputMaybe<Scalars['Int']['input']>;
};

export type Recomendation_CreatedAt_Operator = {
  readonly equals: InputMaybe<Scalars['DateTime']['input']>;
  readonly exists: InputMaybe<Scalars['Boolean']['input']>;
  readonly greater_than: InputMaybe<Scalars['DateTime']['input']>;
  readonly greater_than_equal: InputMaybe<Scalars['DateTime']['input']>;
  readonly less_than: InputMaybe<Scalars['DateTime']['input']>;
  readonly less_than_equal: InputMaybe<Scalars['DateTime']['input']>;
  readonly like: InputMaybe<Scalars['DateTime']['input']>;
  readonly not_equals: InputMaybe<Scalars['DateTime']['input']>;
};

export type Recomendation_Description_Operator = {
  readonly contains: InputMaybe<Scalars['JSON']['input']>;
  readonly equals: InputMaybe<Scalars['JSON']['input']>;
  readonly like: InputMaybe<Scalars['JSON']['input']>;
  readonly not_equals: InputMaybe<Scalars['JSON']['input']>;
};

export type Recomendation_Id_Operator = {
  readonly equals: InputMaybe<Scalars['Int']['input']>;
  readonly exists: InputMaybe<Scalars['Boolean']['input']>;
  readonly greater_than: InputMaybe<Scalars['Int']['input']>;
  readonly greater_than_equal: InputMaybe<Scalars['Int']['input']>;
  readonly less_than: InputMaybe<Scalars['Int']['input']>;
  readonly less_than_equal: InputMaybe<Scalars['Int']['input']>;
  readonly not_equals: InputMaybe<Scalars['Int']['input']>;
};

export type Recomendation_Title_Operator = {
  readonly all: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly contains: InputMaybe<Scalars['String']['input']>;
  readonly equals: InputMaybe<Scalars['String']['input']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly like: InputMaybe<Scalars['String']['input']>;
  readonly not_equals: InputMaybe<Scalars['String']['input']>;
  readonly not_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type Recomendation_UpdatedAt_Operator = {
  readonly equals: InputMaybe<Scalars['DateTime']['input']>;
  readonly exists: InputMaybe<Scalars['Boolean']['input']>;
  readonly greater_than: InputMaybe<Scalars['DateTime']['input']>;
  readonly greater_than_equal: InputMaybe<Scalars['DateTime']['input']>;
  readonly less_than: InputMaybe<Scalars['DateTime']['input']>;
  readonly less_than_equal: InputMaybe<Scalars['DateTime']['input']>;
  readonly like: InputMaybe<Scalars['DateTime']['input']>;
  readonly not_equals: InputMaybe<Scalars['DateTime']['input']>;
};

export type Recomendation_Where = {
  readonly AND: InputMaybe<ReadonlyArray<InputMaybe<Recomendation_Where_And>>>;
  readonly OR: InputMaybe<ReadonlyArray<InputMaybe<Recomendation_Where_Or>>>;
  readonly createdAt: InputMaybe<Recomendation_CreatedAt_Operator>;
  readonly description: InputMaybe<Recomendation_Description_Operator>;
  readonly id: InputMaybe<Recomendation_Id_Operator>;
  readonly title: InputMaybe<Recomendation_Title_Operator>;
  readonly updatedAt: InputMaybe<Recomendation_UpdatedAt_Operator>;
};

export type Recomendation_Where_And = {
  readonly AND: InputMaybe<ReadonlyArray<InputMaybe<Recomendation_Where_And>>>;
  readonly OR: InputMaybe<ReadonlyArray<InputMaybe<Recomendation_Where_Or>>>;
  readonly createdAt: InputMaybe<Recomendation_CreatedAt_Operator>;
  readonly description: InputMaybe<Recomendation_Description_Operator>;
  readonly id: InputMaybe<Recomendation_Id_Operator>;
  readonly title: InputMaybe<Recomendation_Title_Operator>;
  readonly updatedAt: InputMaybe<Recomendation_UpdatedAt_Operator>;
};

export type Recomendation_Where_Or = {
  readonly AND: InputMaybe<ReadonlyArray<InputMaybe<Recomendation_Where_And>>>;
  readonly OR: InputMaybe<ReadonlyArray<InputMaybe<Recomendation_Where_Or>>>;
  readonly createdAt: InputMaybe<Recomendation_CreatedAt_Operator>;
  readonly description: InputMaybe<Recomendation_Description_Operator>;
  readonly id: InputMaybe<Recomendation_Id_Operator>;
  readonly title: InputMaybe<Recomendation_Title_Operator>;
  readonly updatedAt: InputMaybe<Recomendation_UpdatedAt_Operator>;
};

export type Recomendations = {
  readonly __typename?: 'Recomendations';
  readonly docs: ReadonlyArray<Recomendation>;
  readonly hasNextPage: Scalars['Boolean']['output'];
  readonly hasPrevPage: Scalars['Boolean']['output'];
  readonly limit: Scalars['Int']['output'];
  readonly nextPage: Maybe<Scalars['Int']['output']>;
  readonly offset: Maybe<Scalars['Int']['output']>;
  readonly page: Scalars['Int']['output'];
  readonly pagingCounter: Scalars['Int']['output'];
  readonly prevPage: Maybe<Scalars['Int']['output']>;
  readonly totalDocs: Scalars['Int']['output'];
  readonly totalPages: Scalars['Int']['output'];
};

export type RecomendationsCreateAccess = {
  readonly __typename?: 'RecomendationsCreateAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where: Maybe<Scalars['JSONObject']['output']>;
};

export type RecomendationsCreateDocAccess = {
  readonly __typename?: 'RecomendationsCreateDocAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where: Maybe<Scalars['JSONObject']['output']>;
};

export type RecomendationsDeleteAccess = {
  readonly __typename?: 'RecomendationsDeleteAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where: Maybe<Scalars['JSONObject']['output']>;
};

export type RecomendationsDeleteDocAccess = {
  readonly __typename?: 'RecomendationsDeleteDocAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where: Maybe<Scalars['JSONObject']['output']>;
};

export type RecomendationsDocAccessFields = {
  readonly __typename?: 'RecomendationsDocAccessFields';
  readonly createdAt: Maybe<RecomendationsDocAccessFields_CreatedAt>;
  readonly description: Maybe<RecomendationsDocAccessFields_Description>;
  readonly title: Maybe<RecomendationsDocAccessFields_Title>;
  readonly updatedAt: Maybe<RecomendationsDocAccessFields_UpdatedAt>;
};

export type RecomendationsDocAccessFields_CreatedAt = {
  readonly __typename?: 'RecomendationsDocAccessFields_createdAt';
  readonly create: Maybe<RecomendationsDocAccessFields_CreatedAt_Create>;
  readonly delete: Maybe<RecomendationsDocAccessFields_CreatedAt_Delete>;
  readonly read: Maybe<RecomendationsDocAccessFields_CreatedAt_Read>;
  readonly update: Maybe<RecomendationsDocAccessFields_CreatedAt_Update>;
};

export type RecomendationsDocAccessFields_CreatedAt_Create = {
  readonly __typename?: 'RecomendationsDocAccessFields_createdAt_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type RecomendationsDocAccessFields_CreatedAt_Delete = {
  readonly __typename?: 'RecomendationsDocAccessFields_createdAt_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type RecomendationsDocAccessFields_CreatedAt_Read = {
  readonly __typename?: 'RecomendationsDocAccessFields_createdAt_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type RecomendationsDocAccessFields_CreatedAt_Update = {
  readonly __typename?: 'RecomendationsDocAccessFields_createdAt_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type RecomendationsDocAccessFields_Description = {
  readonly __typename?: 'RecomendationsDocAccessFields_description';
  readonly create: Maybe<RecomendationsDocAccessFields_Description_Create>;
  readonly delete: Maybe<RecomendationsDocAccessFields_Description_Delete>;
  readonly read: Maybe<RecomendationsDocAccessFields_Description_Read>;
  readonly update: Maybe<RecomendationsDocAccessFields_Description_Update>;
};

export type RecomendationsDocAccessFields_Description_Create = {
  readonly __typename?: 'RecomendationsDocAccessFields_description_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type RecomendationsDocAccessFields_Description_Delete = {
  readonly __typename?: 'RecomendationsDocAccessFields_description_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type RecomendationsDocAccessFields_Description_Read = {
  readonly __typename?: 'RecomendationsDocAccessFields_description_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type RecomendationsDocAccessFields_Description_Update = {
  readonly __typename?: 'RecomendationsDocAccessFields_description_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type RecomendationsDocAccessFields_Title = {
  readonly __typename?: 'RecomendationsDocAccessFields_title';
  readonly create: Maybe<RecomendationsDocAccessFields_Title_Create>;
  readonly delete: Maybe<RecomendationsDocAccessFields_Title_Delete>;
  readonly read: Maybe<RecomendationsDocAccessFields_Title_Read>;
  readonly update: Maybe<RecomendationsDocAccessFields_Title_Update>;
};

export type RecomendationsDocAccessFields_Title_Create = {
  readonly __typename?: 'RecomendationsDocAccessFields_title_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type RecomendationsDocAccessFields_Title_Delete = {
  readonly __typename?: 'RecomendationsDocAccessFields_title_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type RecomendationsDocAccessFields_Title_Read = {
  readonly __typename?: 'RecomendationsDocAccessFields_title_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type RecomendationsDocAccessFields_Title_Update = {
  readonly __typename?: 'RecomendationsDocAccessFields_title_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type RecomendationsDocAccessFields_UpdatedAt = {
  readonly __typename?: 'RecomendationsDocAccessFields_updatedAt';
  readonly create: Maybe<RecomendationsDocAccessFields_UpdatedAt_Create>;
  readonly delete: Maybe<RecomendationsDocAccessFields_UpdatedAt_Delete>;
  readonly read: Maybe<RecomendationsDocAccessFields_UpdatedAt_Read>;
  readonly update: Maybe<RecomendationsDocAccessFields_UpdatedAt_Update>;
};

export type RecomendationsDocAccessFields_UpdatedAt_Create = {
  readonly __typename?: 'RecomendationsDocAccessFields_updatedAt_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type RecomendationsDocAccessFields_UpdatedAt_Delete = {
  readonly __typename?: 'RecomendationsDocAccessFields_updatedAt_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type RecomendationsDocAccessFields_UpdatedAt_Read = {
  readonly __typename?: 'RecomendationsDocAccessFields_updatedAt_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type RecomendationsDocAccessFields_UpdatedAt_Update = {
  readonly __typename?: 'RecomendationsDocAccessFields_updatedAt_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type RecomendationsFields = {
  readonly __typename?: 'RecomendationsFields';
  readonly createdAt: Maybe<RecomendationsFields_CreatedAt>;
  readonly description: Maybe<RecomendationsFields_Description>;
  readonly title: Maybe<RecomendationsFields_Title>;
  readonly updatedAt: Maybe<RecomendationsFields_UpdatedAt>;
};

export type RecomendationsFields_CreatedAt = {
  readonly __typename?: 'RecomendationsFields_createdAt';
  readonly create: Maybe<RecomendationsFields_CreatedAt_Create>;
  readonly delete: Maybe<RecomendationsFields_CreatedAt_Delete>;
  readonly read: Maybe<RecomendationsFields_CreatedAt_Read>;
  readonly update: Maybe<RecomendationsFields_CreatedAt_Update>;
};

export type RecomendationsFields_CreatedAt_Create = {
  readonly __typename?: 'RecomendationsFields_createdAt_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type RecomendationsFields_CreatedAt_Delete = {
  readonly __typename?: 'RecomendationsFields_createdAt_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type RecomendationsFields_CreatedAt_Read = {
  readonly __typename?: 'RecomendationsFields_createdAt_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type RecomendationsFields_CreatedAt_Update = {
  readonly __typename?: 'RecomendationsFields_createdAt_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type RecomendationsFields_Description = {
  readonly __typename?: 'RecomendationsFields_description';
  readonly create: Maybe<RecomendationsFields_Description_Create>;
  readonly delete: Maybe<RecomendationsFields_Description_Delete>;
  readonly read: Maybe<RecomendationsFields_Description_Read>;
  readonly update: Maybe<RecomendationsFields_Description_Update>;
};

export type RecomendationsFields_Description_Create = {
  readonly __typename?: 'RecomendationsFields_description_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type RecomendationsFields_Description_Delete = {
  readonly __typename?: 'RecomendationsFields_description_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type RecomendationsFields_Description_Read = {
  readonly __typename?: 'RecomendationsFields_description_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type RecomendationsFields_Description_Update = {
  readonly __typename?: 'RecomendationsFields_description_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type RecomendationsFields_Title = {
  readonly __typename?: 'RecomendationsFields_title';
  readonly create: Maybe<RecomendationsFields_Title_Create>;
  readonly delete: Maybe<RecomendationsFields_Title_Delete>;
  readonly read: Maybe<RecomendationsFields_Title_Read>;
  readonly update: Maybe<RecomendationsFields_Title_Update>;
};

export type RecomendationsFields_Title_Create = {
  readonly __typename?: 'RecomendationsFields_title_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type RecomendationsFields_Title_Delete = {
  readonly __typename?: 'RecomendationsFields_title_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type RecomendationsFields_Title_Read = {
  readonly __typename?: 'RecomendationsFields_title_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type RecomendationsFields_Title_Update = {
  readonly __typename?: 'RecomendationsFields_title_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type RecomendationsFields_UpdatedAt = {
  readonly __typename?: 'RecomendationsFields_updatedAt';
  readonly create: Maybe<RecomendationsFields_UpdatedAt_Create>;
  readonly delete: Maybe<RecomendationsFields_UpdatedAt_Delete>;
  readonly read: Maybe<RecomendationsFields_UpdatedAt_Read>;
  readonly update: Maybe<RecomendationsFields_UpdatedAt_Update>;
};

export type RecomendationsFields_UpdatedAt_Create = {
  readonly __typename?: 'RecomendationsFields_updatedAt_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type RecomendationsFields_UpdatedAt_Delete = {
  readonly __typename?: 'RecomendationsFields_updatedAt_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type RecomendationsFields_UpdatedAt_Read = {
  readonly __typename?: 'RecomendationsFields_updatedAt_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type RecomendationsFields_UpdatedAt_Update = {
  readonly __typename?: 'RecomendationsFields_updatedAt_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type RecomendationsReadAccess = {
  readonly __typename?: 'RecomendationsReadAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where: Maybe<Scalars['JSONObject']['output']>;
};

export type RecomendationsReadDocAccess = {
  readonly __typename?: 'RecomendationsReadDocAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where: Maybe<Scalars['JSONObject']['output']>;
};

export type RecomendationsUpdateAccess = {
  readonly __typename?: 'RecomendationsUpdateAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where: Maybe<Scalars['JSONObject']['output']>;
};

export type RecomendationsUpdateDocAccess = {
  readonly __typename?: 'RecomendationsUpdateDocAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where: Maybe<Scalars['JSONObject']['output']>;
};

export type Recommendation = {
  readonly __typename?: 'Recommendation';
  readonly description: Maybe<Scalars['String']['output']>;
  readonly id: Maybe<Scalars['ID']['output']>;
  readonly title: Maybe<Scalars['String']['output']>;
};

export type Subject = {
  readonly __typename?: 'Subject';
  readonly code: Scalars['String']['output'];
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly id: Scalars['Int']['output'];
  readonly title: Scalars['String']['output'];
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
};

export type Subject_Code_Operator = {
  readonly all: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly contains: InputMaybe<Scalars['String']['input']>;
  readonly equals: InputMaybe<Scalars['String']['input']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly like: InputMaybe<Scalars['String']['input']>;
  readonly not_equals: InputMaybe<Scalars['String']['input']>;
  readonly not_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type Subject_CreatedAt_Operator = {
  readonly equals: InputMaybe<Scalars['DateTime']['input']>;
  readonly exists: InputMaybe<Scalars['Boolean']['input']>;
  readonly greater_than: InputMaybe<Scalars['DateTime']['input']>;
  readonly greater_than_equal: InputMaybe<Scalars['DateTime']['input']>;
  readonly less_than: InputMaybe<Scalars['DateTime']['input']>;
  readonly less_than_equal: InputMaybe<Scalars['DateTime']['input']>;
  readonly like: InputMaybe<Scalars['DateTime']['input']>;
  readonly not_equals: InputMaybe<Scalars['DateTime']['input']>;
};

export type Subject_Id_Operator = {
  readonly equals: InputMaybe<Scalars['Int']['input']>;
  readonly exists: InputMaybe<Scalars['Boolean']['input']>;
  readonly greater_than: InputMaybe<Scalars['Int']['input']>;
  readonly greater_than_equal: InputMaybe<Scalars['Int']['input']>;
  readonly less_than: InputMaybe<Scalars['Int']['input']>;
  readonly less_than_equal: InputMaybe<Scalars['Int']['input']>;
  readonly not_equals: InputMaybe<Scalars['Int']['input']>;
};

export type Subject_Title_Operator = {
  readonly all: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly contains: InputMaybe<Scalars['String']['input']>;
  readonly equals: InputMaybe<Scalars['String']['input']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly like: InputMaybe<Scalars['String']['input']>;
  readonly not_equals: InputMaybe<Scalars['String']['input']>;
  readonly not_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type Subject_UpdatedAt_Operator = {
  readonly equals: InputMaybe<Scalars['DateTime']['input']>;
  readonly exists: InputMaybe<Scalars['Boolean']['input']>;
  readonly greater_than: InputMaybe<Scalars['DateTime']['input']>;
  readonly greater_than_equal: InputMaybe<Scalars['DateTime']['input']>;
  readonly less_than: InputMaybe<Scalars['DateTime']['input']>;
  readonly less_than_equal: InputMaybe<Scalars['DateTime']['input']>;
  readonly like: InputMaybe<Scalars['DateTime']['input']>;
  readonly not_equals: InputMaybe<Scalars['DateTime']['input']>;
};

export type Subject_Where = {
  readonly AND: InputMaybe<ReadonlyArray<InputMaybe<Subject_Where_And>>>;
  readonly OR: InputMaybe<ReadonlyArray<InputMaybe<Subject_Where_Or>>>;
  readonly code: InputMaybe<Subject_Code_Operator>;
  readonly createdAt: InputMaybe<Subject_CreatedAt_Operator>;
  readonly id: InputMaybe<Subject_Id_Operator>;
  readonly title: InputMaybe<Subject_Title_Operator>;
  readonly updatedAt: InputMaybe<Subject_UpdatedAt_Operator>;
};

export type Subject_Where_And = {
  readonly AND: InputMaybe<ReadonlyArray<InputMaybe<Subject_Where_And>>>;
  readonly OR: InputMaybe<ReadonlyArray<InputMaybe<Subject_Where_Or>>>;
  readonly code: InputMaybe<Subject_Code_Operator>;
  readonly createdAt: InputMaybe<Subject_CreatedAt_Operator>;
  readonly id: InputMaybe<Subject_Id_Operator>;
  readonly title: InputMaybe<Subject_Title_Operator>;
  readonly updatedAt: InputMaybe<Subject_UpdatedAt_Operator>;
};

export type Subject_Where_Or = {
  readonly AND: InputMaybe<ReadonlyArray<InputMaybe<Subject_Where_And>>>;
  readonly OR: InputMaybe<ReadonlyArray<InputMaybe<Subject_Where_Or>>>;
  readonly code: InputMaybe<Subject_Code_Operator>;
  readonly createdAt: InputMaybe<Subject_CreatedAt_Operator>;
  readonly id: InputMaybe<Subject_Id_Operator>;
  readonly title: InputMaybe<Subject_Title_Operator>;
  readonly updatedAt: InputMaybe<Subject_UpdatedAt_Operator>;
};

export type Subjects = {
  readonly __typename?: 'Subjects';
  readonly docs: ReadonlyArray<Subject>;
  readonly hasNextPage: Scalars['Boolean']['output'];
  readonly hasPrevPage: Scalars['Boolean']['output'];
  readonly limit: Scalars['Int']['output'];
  readonly nextPage: Maybe<Scalars['Int']['output']>;
  readonly offset: Maybe<Scalars['Int']['output']>;
  readonly page: Scalars['Int']['output'];
  readonly pagingCounter: Scalars['Int']['output'];
  readonly prevPage: Maybe<Scalars['Int']['output']>;
  readonly totalDocs: Scalars['Int']['output'];
  readonly totalPages: Scalars['Int']['output'];
};

export type SubjectsCreateAccess = {
  readonly __typename?: 'SubjectsCreateAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where: Maybe<Scalars['JSONObject']['output']>;
};

export type SubjectsCreateDocAccess = {
  readonly __typename?: 'SubjectsCreateDocAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where: Maybe<Scalars['JSONObject']['output']>;
};

export type SubjectsDeleteAccess = {
  readonly __typename?: 'SubjectsDeleteAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where: Maybe<Scalars['JSONObject']['output']>;
};

export type SubjectsDeleteDocAccess = {
  readonly __typename?: 'SubjectsDeleteDocAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where: Maybe<Scalars['JSONObject']['output']>;
};

export type SubjectsDocAccessFields = {
  readonly __typename?: 'SubjectsDocAccessFields';
  readonly code: Maybe<SubjectsDocAccessFields_Code>;
  readonly createdAt: Maybe<SubjectsDocAccessFields_CreatedAt>;
  readonly title: Maybe<SubjectsDocAccessFields_Title>;
  readonly updatedAt: Maybe<SubjectsDocAccessFields_UpdatedAt>;
};

export type SubjectsDocAccessFields_Code = {
  readonly __typename?: 'SubjectsDocAccessFields_code';
  readonly create: Maybe<SubjectsDocAccessFields_Code_Create>;
  readonly delete: Maybe<SubjectsDocAccessFields_Code_Delete>;
  readonly read: Maybe<SubjectsDocAccessFields_Code_Read>;
  readonly update: Maybe<SubjectsDocAccessFields_Code_Update>;
};

export type SubjectsDocAccessFields_Code_Create = {
  readonly __typename?: 'SubjectsDocAccessFields_code_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type SubjectsDocAccessFields_Code_Delete = {
  readonly __typename?: 'SubjectsDocAccessFields_code_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type SubjectsDocAccessFields_Code_Read = {
  readonly __typename?: 'SubjectsDocAccessFields_code_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type SubjectsDocAccessFields_Code_Update = {
  readonly __typename?: 'SubjectsDocAccessFields_code_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type SubjectsDocAccessFields_CreatedAt = {
  readonly __typename?: 'SubjectsDocAccessFields_createdAt';
  readonly create: Maybe<SubjectsDocAccessFields_CreatedAt_Create>;
  readonly delete: Maybe<SubjectsDocAccessFields_CreatedAt_Delete>;
  readonly read: Maybe<SubjectsDocAccessFields_CreatedAt_Read>;
  readonly update: Maybe<SubjectsDocAccessFields_CreatedAt_Update>;
};

export type SubjectsDocAccessFields_CreatedAt_Create = {
  readonly __typename?: 'SubjectsDocAccessFields_createdAt_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type SubjectsDocAccessFields_CreatedAt_Delete = {
  readonly __typename?: 'SubjectsDocAccessFields_createdAt_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type SubjectsDocAccessFields_CreatedAt_Read = {
  readonly __typename?: 'SubjectsDocAccessFields_createdAt_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type SubjectsDocAccessFields_CreatedAt_Update = {
  readonly __typename?: 'SubjectsDocAccessFields_createdAt_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type SubjectsDocAccessFields_Title = {
  readonly __typename?: 'SubjectsDocAccessFields_title';
  readonly create: Maybe<SubjectsDocAccessFields_Title_Create>;
  readonly delete: Maybe<SubjectsDocAccessFields_Title_Delete>;
  readonly read: Maybe<SubjectsDocAccessFields_Title_Read>;
  readonly update: Maybe<SubjectsDocAccessFields_Title_Update>;
};

export type SubjectsDocAccessFields_Title_Create = {
  readonly __typename?: 'SubjectsDocAccessFields_title_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type SubjectsDocAccessFields_Title_Delete = {
  readonly __typename?: 'SubjectsDocAccessFields_title_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type SubjectsDocAccessFields_Title_Read = {
  readonly __typename?: 'SubjectsDocAccessFields_title_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type SubjectsDocAccessFields_Title_Update = {
  readonly __typename?: 'SubjectsDocAccessFields_title_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type SubjectsDocAccessFields_UpdatedAt = {
  readonly __typename?: 'SubjectsDocAccessFields_updatedAt';
  readonly create: Maybe<SubjectsDocAccessFields_UpdatedAt_Create>;
  readonly delete: Maybe<SubjectsDocAccessFields_UpdatedAt_Delete>;
  readonly read: Maybe<SubjectsDocAccessFields_UpdatedAt_Read>;
  readonly update: Maybe<SubjectsDocAccessFields_UpdatedAt_Update>;
};

export type SubjectsDocAccessFields_UpdatedAt_Create = {
  readonly __typename?: 'SubjectsDocAccessFields_updatedAt_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type SubjectsDocAccessFields_UpdatedAt_Delete = {
  readonly __typename?: 'SubjectsDocAccessFields_updatedAt_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type SubjectsDocAccessFields_UpdatedAt_Read = {
  readonly __typename?: 'SubjectsDocAccessFields_updatedAt_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type SubjectsDocAccessFields_UpdatedAt_Update = {
  readonly __typename?: 'SubjectsDocAccessFields_updatedAt_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type SubjectsFields = {
  readonly __typename?: 'SubjectsFields';
  readonly code: Maybe<SubjectsFields_Code>;
  readonly createdAt: Maybe<SubjectsFields_CreatedAt>;
  readonly title: Maybe<SubjectsFields_Title>;
  readonly updatedAt: Maybe<SubjectsFields_UpdatedAt>;
};

export type SubjectsFields_Code = {
  readonly __typename?: 'SubjectsFields_code';
  readonly create: Maybe<SubjectsFields_Code_Create>;
  readonly delete: Maybe<SubjectsFields_Code_Delete>;
  readonly read: Maybe<SubjectsFields_Code_Read>;
  readonly update: Maybe<SubjectsFields_Code_Update>;
};

export type SubjectsFields_Code_Create = {
  readonly __typename?: 'SubjectsFields_code_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type SubjectsFields_Code_Delete = {
  readonly __typename?: 'SubjectsFields_code_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type SubjectsFields_Code_Read = {
  readonly __typename?: 'SubjectsFields_code_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type SubjectsFields_Code_Update = {
  readonly __typename?: 'SubjectsFields_code_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type SubjectsFields_CreatedAt = {
  readonly __typename?: 'SubjectsFields_createdAt';
  readonly create: Maybe<SubjectsFields_CreatedAt_Create>;
  readonly delete: Maybe<SubjectsFields_CreatedAt_Delete>;
  readonly read: Maybe<SubjectsFields_CreatedAt_Read>;
  readonly update: Maybe<SubjectsFields_CreatedAt_Update>;
};

export type SubjectsFields_CreatedAt_Create = {
  readonly __typename?: 'SubjectsFields_createdAt_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type SubjectsFields_CreatedAt_Delete = {
  readonly __typename?: 'SubjectsFields_createdAt_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type SubjectsFields_CreatedAt_Read = {
  readonly __typename?: 'SubjectsFields_createdAt_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type SubjectsFields_CreatedAt_Update = {
  readonly __typename?: 'SubjectsFields_createdAt_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type SubjectsFields_Title = {
  readonly __typename?: 'SubjectsFields_title';
  readonly create: Maybe<SubjectsFields_Title_Create>;
  readonly delete: Maybe<SubjectsFields_Title_Delete>;
  readonly read: Maybe<SubjectsFields_Title_Read>;
  readonly update: Maybe<SubjectsFields_Title_Update>;
};

export type SubjectsFields_Title_Create = {
  readonly __typename?: 'SubjectsFields_title_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type SubjectsFields_Title_Delete = {
  readonly __typename?: 'SubjectsFields_title_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type SubjectsFields_Title_Read = {
  readonly __typename?: 'SubjectsFields_title_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type SubjectsFields_Title_Update = {
  readonly __typename?: 'SubjectsFields_title_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type SubjectsFields_UpdatedAt = {
  readonly __typename?: 'SubjectsFields_updatedAt';
  readonly create: Maybe<SubjectsFields_UpdatedAt_Create>;
  readonly delete: Maybe<SubjectsFields_UpdatedAt_Delete>;
  readonly read: Maybe<SubjectsFields_UpdatedAt_Read>;
  readonly update: Maybe<SubjectsFields_UpdatedAt_Update>;
};

export type SubjectsFields_UpdatedAt_Create = {
  readonly __typename?: 'SubjectsFields_updatedAt_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type SubjectsFields_UpdatedAt_Delete = {
  readonly __typename?: 'SubjectsFields_updatedAt_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type SubjectsFields_UpdatedAt_Read = {
  readonly __typename?: 'SubjectsFields_updatedAt_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type SubjectsFields_UpdatedAt_Update = {
  readonly __typename?: 'SubjectsFields_updatedAt_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type SubjectsReadAccess = {
  readonly __typename?: 'SubjectsReadAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where: Maybe<Scalars['JSONObject']['output']>;
};

export type SubjectsReadDocAccess = {
  readonly __typename?: 'SubjectsReadDocAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where: Maybe<Scalars['JSONObject']['output']>;
};

export type SubjectsUpdateAccess = {
  readonly __typename?: 'SubjectsUpdateAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where: Maybe<Scalars['JSONObject']['output']>;
};

export type SubjectsUpdateDocAccess = {
  readonly __typename?: 'SubjectsUpdateDocAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where: Maybe<Scalars['JSONObject']['output']>;
};

export type Tariff = {
  readonly __typename?: 'Tariff';
  readonly benefits: ReadonlyArray<Tariff_Benefits>;
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly description: Scalars['String']['output'];
  readonly id: Scalars['Int']['output'];
  readonly price: Scalars['Float']['output'];
  readonly title: Scalars['String']['output'];
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
};

export type Tariff_Benefits = {
  readonly __typename?: 'Tariff_Benefits';
  readonly id: Maybe<Scalars['String']['output']>;
  readonly value: Maybe<Scalars['String']['output']>;
};

export type Tariff_Benefits__Id_Operator = {
  readonly all: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly contains: InputMaybe<Scalars['String']['input']>;
  readonly equals: InputMaybe<Scalars['String']['input']>;
  readonly exists: InputMaybe<Scalars['Boolean']['input']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly like: InputMaybe<Scalars['String']['input']>;
  readonly not_equals: InputMaybe<Scalars['String']['input']>;
  readonly not_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type Tariff_Benefits__Value_Operator = {
  readonly all: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly contains: InputMaybe<Scalars['String']['input']>;
  readonly equals: InputMaybe<Scalars['String']['input']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly like: InputMaybe<Scalars['String']['input']>;
  readonly not_equals: InputMaybe<Scalars['String']['input']>;
  readonly not_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type Tariff_CreatedAt_Operator = {
  readonly equals: InputMaybe<Scalars['DateTime']['input']>;
  readonly exists: InputMaybe<Scalars['Boolean']['input']>;
  readonly greater_than: InputMaybe<Scalars['DateTime']['input']>;
  readonly greater_than_equal: InputMaybe<Scalars['DateTime']['input']>;
  readonly less_than: InputMaybe<Scalars['DateTime']['input']>;
  readonly less_than_equal: InputMaybe<Scalars['DateTime']['input']>;
  readonly like: InputMaybe<Scalars['DateTime']['input']>;
  readonly not_equals: InputMaybe<Scalars['DateTime']['input']>;
};

export type Tariff_Description_Operator = {
  readonly contains: InputMaybe<Scalars['String']['input']>;
  readonly equals: InputMaybe<Scalars['String']['input']>;
  readonly like: InputMaybe<Scalars['String']['input']>;
  readonly not_equals: InputMaybe<Scalars['String']['input']>;
};

export type Tariff_Id_Operator = {
  readonly equals: InputMaybe<Scalars['Int']['input']>;
  readonly exists: InputMaybe<Scalars['Boolean']['input']>;
  readonly greater_than: InputMaybe<Scalars['Int']['input']>;
  readonly greater_than_equal: InputMaybe<Scalars['Int']['input']>;
  readonly less_than: InputMaybe<Scalars['Int']['input']>;
  readonly less_than_equal: InputMaybe<Scalars['Int']['input']>;
  readonly not_equals: InputMaybe<Scalars['Int']['input']>;
};

export type Tariff_Price_Operator = {
  readonly equals: InputMaybe<Scalars['Float']['input']>;
  readonly greater_than: InputMaybe<Scalars['Float']['input']>;
  readonly greater_than_equal: InputMaybe<Scalars['Float']['input']>;
  readonly less_than: InputMaybe<Scalars['Float']['input']>;
  readonly less_than_equal: InputMaybe<Scalars['Float']['input']>;
  readonly not_equals: InputMaybe<Scalars['Float']['input']>;
};

export type Tariff_Title_Operator = {
  readonly all: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly contains: InputMaybe<Scalars['String']['input']>;
  readonly equals: InputMaybe<Scalars['String']['input']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly like: InputMaybe<Scalars['String']['input']>;
  readonly not_equals: InputMaybe<Scalars['String']['input']>;
  readonly not_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type Tariff_UpdatedAt_Operator = {
  readonly equals: InputMaybe<Scalars['DateTime']['input']>;
  readonly exists: InputMaybe<Scalars['Boolean']['input']>;
  readonly greater_than: InputMaybe<Scalars['DateTime']['input']>;
  readonly greater_than_equal: InputMaybe<Scalars['DateTime']['input']>;
  readonly less_than: InputMaybe<Scalars['DateTime']['input']>;
  readonly less_than_equal: InputMaybe<Scalars['DateTime']['input']>;
  readonly like: InputMaybe<Scalars['DateTime']['input']>;
  readonly not_equals: InputMaybe<Scalars['DateTime']['input']>;
};

export type Tariff_Where = {
  readonly AND: InputMaybe<ReadonlyArray<InputMaybe<Tariff_Where_And>>>;
  readonly OR: InputMaybe<ReadonlyArray<InputMaybe<Tariff_Where_Or>>>;
  readonly benefits__id: InputMaybe<Tariff_Benefits__Id_Operator>;
  readonly benefits__value: InputMaybe<Tariff_Benefits__Value_Operator>;
  readonly createdAt: InputMaybe<Tariff_CreatedAt_Operator>;
  readonly description: InputMaybe<Tariff_Description_Operator>;
  readonly id: InputMaybe<Tariff_Id_Operator>;
  readonly price: InputMaybe<Tariff_Price_Operator>;
  readonly title: InputMaybe<Tariff_Title_Operator>;
  readonly updatedAt: InputMaybe<Tariff_UpdatedAt_Operator>;
};

export type Tariff_Where_And = {
  readonly AND: InputMaybe<ReadonlyArray<InputMaybe<Tariff_Where_And>>>;
  readonly OR: InputMaybe<ReadonlyArray<InputMaybe<Tariff_Where_Or>>>;
  readonly benefits__id: InputMaybe<Tariff_Benefits__Id_Operator>;
  readonly benefits__value: InputMaybe<Tariff_Benefits__Value_Operator>;
  readonly createdAt: InputMaybe<Tariff_CreatedAt_Operator>;
  readonly description: InputMaybe<Tariff_Description_Operator>;
  readonly id: InputMaybe<Tariff_Id_Operator>;
  readonly price: InputMaybe<Tariff_Price_Operator>;
  readonly title: InputMaybe<Tariff_Title_Operator>;
  readonly updatedAt: InputMaybe<Tariff_UpdatedAt_Operator>;
};

export type Tariff_Where_Or = {
  readonly AND: InputMaybe<ReadonlyArray<InputMaybe<Tariff_Where_And>>>;
  readonly OR: InputMaybe<ReadonlyArray<InputMaybe<Tariff_Where_Or>>>;
  readonly benefits__id: InputMaybe<Tariff_Benefits__Id_Operator>;
  readonly benefits__value: InputMaybe<Tariff_Benefits__Value_Operator>;
  readonly createdAt: InputMaybe<Tariff_CreatedAt_Operator>;
  readonly description: InputMaybe<Tariff_Description_Operator>;
  readonly id: InputMaybe<Tariff_Id_Operator>;
  readonly price: InputMaybe<Tariff_Price_Operator>;
  readonly title: InputMaybe<Tariff_Title_Operator>;
  readonly updatedAt: InputMaybe<Tariff_UpdatedAt_Operator>;
};

export type Tariffs = {
  readonly __typename?: 'Tariffs';
  readonly docs: ReadonlyArray<Tariff>;
  readonly hasNextPage: Scalars['Boolean']['output'];
  readonly hasPrevPage: Scalars['Boolean']['output'];
  readonly limit: Scalars['Int']['output'];
  readonly nextPage: Maybe<Scalars['Int']['output']>;
  readonly offset: Maybe<Scalars['Int']['output']>;
  readonly page: Scalars['Int']['output'];
  readonly pagingCounter: Scalars['Int']['output'];
  readonly prevPage: Maybe<Scalars['Int']['output']>;
  readonly totalDocs: Scalars['Int']['output'];
  readonly totalPages: Scalars['Int']['output'];
};

export type TariffsCreateAccess = {
  readonly __typename?: 'TariffsCreateAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where: Maybe<Scalars['JSONObject']['output']>;
};

export type TariffsCreateDocAccess = {
  readonly __typename?: 'TariffsCreateDocAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where: Maybe<Scalars['JSONObject']['output']>;
};

export type TariffsDeleteAccess = {
  readonly __typename?: 'TariffsDeleteAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where: Maybe<Scalars['JSONObject']['output']>;
};

export type TariffsDeleteDocAccess = {
  readonly __typename?: 'TariffsDeleteDocAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where: Maybe<Scalars['JSONObject']['output']>;
};

export type TariffsDocAccessFields = {
  readonly __typename?: 'TariffsDocAccessFields';
  readonly benefits: Maybe<TariffsDocAccessFields_Benefits>;
  readonly createdAt: Maybe<TariffsDocAccessFields_CreatedAt>;
  readonly description: Maybe<TariffsDocAccessFields_Description>;
  readonly price: Maybe<TariffsDocAccessFields_Price>;
  readonly title: Maybe<TariffsDocAccessFields_Title>;
  readonly updatedAt: Maybe<TariffsDocAccessFields_UpdatedAt>;
};

export type TariffsDocAccessFields_Benefits = {
  readonly __typename?: 'TariffsDocAccessFields_benefits';
  readonly create: Maybe<TariffsDocAccessFields_Benefits_Create>;
  readonly delete: Maybe<TariffsDocAccessFields_Benefits_Delete>;
  readonly fields: Maybe<TariffsDocAccessFields_Benefits_Fields>;
  readonly read: Maybe<TariffsDocAccessFields_Benefits_Read>;
  readonly update: Maybe<TariffsDocAccessFields_Benefits_Update>;
};

export type TariffsDocAccessFields_Benefits_Create = {
  readonly __typename?: 'TariffsDocAccessFields_benefits_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type TariffsDocAccessFields_Benefits_Delete = {
  readonly __typename?: 'TariffsDocAccessFields_benefits_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type TariffsDocAccessFields_Benefits_Fields = {
  readonly __typename?: 'TariffsDocAccessFields_benefits_Fields';
  readonly id: Maybe<TariffsDocAccessFields_Benefits_Id>;
  readonly value: Maybe<TariffsDocAccessFields_Benefits_Value>;
};

export type TariffsDocAccessFields_Benefits_Read = {
  readonly __typename?: 'TariffsDocAccessFields_benefits_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type TariffsDocAccessFields_Benefits_Update = {
  readonly __typename?: 'TariffsDocAccessFields_benefits_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type TariffsDocAccessFields_Benefits_Id = {
  readonly __typename?: 'TariffsDocAccessFields_benefits_id';
  readonly create: Maybe<TariffsDocAccessFields_Benefits_Id_Create>;
  readonly delete: Maybe<TariffsDocAccessFields_Benefits_Id_Delete>;
  readonly read: Maybe<TariffsDocAccessFields_Benefits_Id_Read>;
  readonly update: Maybe<TariffsDocAccessFields_Benefits_Id_Update>;
};

export type TariffsDocAccessFields_Benefits_Id_Create = {
  readonly __typename?: 'TariffsDocAccessFields_benefits_id_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type TariffsDocAccessFields_Benefits_Id_Delete = {
  readonly __typename?: 'TariffsDocAccessFields_benefits_id_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type TariffsDocAccessFields_Benefits_Id_Read = {
  readonly __typename?: 'TariffsDocAccessFields_benefits_id_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type TariffsDocAccessFields_Benefits_Id_Update = {
  readonly __typename?: 'TariffsDocAccessFields_benefits_id_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type TariffsDocAccessFields_Benefits_Value = {
  readonly __typename?: 'TariffsDocAccessFields_benefits_value';
  readonly create: Maybe<TariffsDocAccessFields_Benefits_Value_Create>;
  readonly delete: Maybe<TariffsDocAccessFields_Benefits_Value_Delete>;
  readonly read: Maybe<TariffsDocAccessFields_Benefits_Value_Read>;
  readonly update: Maybe<TariffsDocAccessFields_Benefits_Value_Update>;
};

export type TariffsDocAccessFields_Benefits_Value_Create = {
  readonly __typename?: 'TariffsDocAccessFields_benefits_value_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type TariffsDocAccessFields_Benefits_Value_Delete = {
  readonly __typename?: 'TariffsDocAccessFields_benefits_value_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type TariffsDocAccessFields_Benefits_Value_Read = {
  readonly __typename?: 'TariffsDocAccessFields_benefits_value_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type TariffsDocAccessFields_Benefits_Value_Update = {
  readonly __typename?: 'TariffsDocAccessFields_benefits_value_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type TariffsDocAccessFields_CreatedAt = {
  readonly __typename?: 'TariffsDocAccessFields_createdAt';
  readonly create: Maybe<TariffsDocAccessFields_CreatedAt_Create>;
  readonly delete: Maybe<TariffsDocAccessFields_CreatedAt_Delete>;
  readonly read: Maybe<TariffsDocAccessFields_CreatedAt_Read>;
  readonly update: Maybe<TariffsDocAccessFields_CreatedAt_Update>;
};

export type TariffsDocAccessFields_CreatedAt_Create = {
  readonly __typename?: 'TariffsDocAccessFields_createdAt_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type TariffsDocAccessFields_CreatedAt_Delete = {
  readonly __typename?: 'TariffsDocAccessFields_createdAt_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type TariffsDocAccessFields_CreatedAt_Read = {
  readonly __typename?: 'TariffsDocAccessFields_createdAt_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type TariffsDocAccessFields_CreatedAt_Update = {
  readonly __typename?: 'TariffsDocAccessFields_createdAt_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type TariffsDocAccessFields_Description = {
  readonly __typename?: 'TariffsDocAccessFields_description';
  readonly create: Maybe<TariffsDocAccessFields_Description_Create>;
  readonly delete: Maybe<TariffsDocAccessFields_Description_Delete>;
  readonly read: Maybe<TariffsDocAccessFields_Description_Read>;
  readonly update: Maybe<TariffsDocAccessFields_Description_Update>;
};

export type TariffsDocAccessFields_Description_Create = {
  readonly __typename?: 'TariffsDocAccessFields_description_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type TariffsDocAccessFields_Description_Delete = {
  readonly __typename?: 'TariffsDocAccessFields_description_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type TariffsDocAccessFields_Description_Read = {
  readonly __typename?: 'TariffsDocAccessFields_description_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type TariffsDocAccessFields_Description_Update = {
  readonly __typename?: 'TariffsDocAccessFields_description_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type TariffsDocAccessFields_Price = {
  readonly __typename?: 'TariffsDocAccessFields_price';
  readonly create: Maybe<TariffsDocAccessFields_Price_Create>;
  readonly delete: Maybe<TariffsDocAccessFields_Price_Delete>;
  readonly read: Maybe<TariffsDocAccessFields_Price_Read>;
  readonly update: Maybe<TariffsDocAccessFields_Price_Update>;
};

export type TariffsDocAccessFields_Price_Create = {
  readonly __typename?: 'TariffsDocAccessFields_price_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type TariffsDocAccessFields_Price_Delete = {
  readonly __typename?: 'TariffsDocAccessFields_price_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type TariffsDocAccessFields_Price_Read = {
  readonly __typename?: 'TariffsDocAccessFields_price_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type TariffsDocAccessFields_Price_Update = {
  readonly __typename?: 'TariffsDocAccessFields_price_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type TariffsDocAccessFields_Title = {
  readonly __typename?: 'TariffsDocAccessFields_title';
  readonly create: Maybe<TariffsDocAccessFields_Title_Create>;
  readonly delete: Maybe<TariffsDocAccessFields_Title_Delete>;
  readonly read: Maybe<TariffsDocAccessFields_Title_Read>;
  readonly update: Maybe<TariffsDocAccessFields_Title_Update>;
};

export type TariffsDocAccessFields_Title_Create = {
  readonly __typename?: 'TariffsDocAccessFields_title_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type TariffsDocAccessFields_Title_Delete = {
  readonly __typename?: 'TariffsDocAccessFields_title_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type TariffsDocAccessFields_Title_Read = {
  readonly __typename?: 'TariffsDocAccessFields_title_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type TariffsDocAccessFields_Title_Update = {
  readonly __typename?: 'TariffsDocAccessFields_title_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type TariffsDocAccessFields_UpdatedAt = {
  readonly __typename?: 'TariffsDocAccessFields_updatedAt';
  readonly create: Maybe<TariffsDocAccessFields_UpdatedAt_Create>;
  readonly delete: Maybe<TariffsDocAccessFields_UpdatedAt_Delete>;
  readonly read: Maybe<TariffsDocAccessFields_UpdatedAt_Read>;
  readonly update: Maybe<TariffsDocAccessFields_UpdatedAt_Update>;
};

export type TariffsDocAccessFields_UpdatedAt_Create = {
  readonly __typename?: 'TariffsDocAccessFields_updatedAt_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type TariffsDocAccessFields_UpdatedAt_Delete = {
  readonly __typename?: 'TariffsDocAccessFields_updatedAt_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type TariffsDocAccessFields_UpdatedAt_Read = {
  readonly __typename?: 'TariffsDocAccessFields_updatedAt_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type TariffsDocAccessFields_UpdatedAt_Update = {
  readonly __typename?: 'TariffsDocAccessFields_updatedAt_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type TariffsFields = {
  readonly __typename?: 'TariffsFields';
  readonly benefits: Maybe<TariffsFields_Benefits>;
  readonly createdAt: Maybe<TariffsFields_CreatedAt>;
  readonly description: Maybe<TariffsFields_Description>;
  readonly price: Maybe<TariffsFields_Price>;
  readonly title: Maybe<TariffsFields_Title>;
  readonly updatedAt: Maybe<TariffsFields_UpdatedAt>;
};

export type TariffsFields_Benefits = {
  readonly __typename?: 'TariffsFields_benefits';
  readonly create: Maybe<TariffsFields_Benefits_Create>;
  readonly delete: Maybe<TariffsFields_Benefits_Delete>;
  readonly fields: Maybe<TariffsFields_Benefits_Fields>;
  readonly read: Maybe<TariffsFields_Benefits_Read>;
  readonly update: Maybe<TariffsFields_Benefits_Update>;
};

export type TariffsFields_Benefits_Create = {
  readonly __typename?: 'TariffsFields_benefits_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type TariffsFields_Benefits_Delete = {
  readonly __typename?: 'TariffsFields_benefits_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type TariffsFields_Benefits_Fields = {
  readonly __typename?: 'TariffsFields_benefits_Fields';
  readonly id: Maybe<TariffsFields_Benefits_Id>;
  readonly value: Maybe<TariffsFields_Benefits_Value>;
};

export type TariffsFields_Benefits_Read = {
  readonly __typename?: 'TariffsFields_benefits_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type TariffsFields_Benefits_Update = {
  readonly __typename?: 'TariffsFields_benefits_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type TariffsFields_Benefits_Id = {
  readonly __typename?: 'TariffsFields_benefits_id';
  readonly create: Maybe<TariffsFields_Benefits_Id_Create>;
  readonly delete: Maybe<TariffsFields_Benefits_Id_Delete>;
  readonly read: Maybe<TariffsFields_Benefits_Id_Read>;
  readonly update: Maybe<TariffsFields_Benefits_Id_Update>;
};

export type TariffsFields_Benefits_Id_Create = {
  readonly __typename?: 'TariffsFields_benefits_id_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type TariffsFields_Benefits_Id_Delete = {
  readonly __typename?: 'TariffsFields_benefits_id_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type TariffsFields_Benefits_Id_Read = {
  readonly __typename?: 'TariffsFields_benefits_id_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type TariffsFields_Benefits_Id_Update = {
  readonly __typename?: 'TariffsFields_benefits_id_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type TariffsFields_Benefits_Value = {
  readonly __typename?: 'TariffsFields_benefits_value';
  readonly create: Maybe<TariffsFields_Benefits_Value_Create>;
  readonly delete: Maybe<TariffsFields_Benefits_Value_Delete>;
  readonly read: Maybe<TariffsFields_Benefits_Value_Read>;
  readonly update: Maybe<TariffsFields_Benefits_Value_Update>;
};

export type TariffsFields_Benefits_Value_Create = {
  readonly __typename?: 'TariffsFields_benefits_value_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type TariffsFields_Benefits_Value_Delete = {
  readonly __typename?: 'TariffsFields_benefits_value_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type TariffsFields_Benefits_Value_Read = {
  readonly __typename?: 'TariffsFields_benefits_value_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type TariffsFields_Benefits_Value_Update = {
  readonly __typename?: 'TariffsFields_benefits_value_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type TariffsFields_CreatedAt = {
  readonly __typename?: 'TariffsFields_createdAt';
  readonly create: Maybe<TariffsFields_CreatedAt_Create>;
  readonly delete: Maybe<TariffsFields_CreatedAt_Delete>;
  readonly read: Maybe<TariffsFields_CreatedAt_Read>;
  readonly update: Maybe<TariffsFields_CreatedAt_Update>;
};

export type TariffsFields_CreatedAt_Create = {
  readonly __typename?: 'TariffsFields_createdAt_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type TariffsFields_CreatedAt_Delete = {
  readonly __typename?: 'TariffsFields_createdAt_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type TariffsFields_CreatedAt_Read = {
  readonly __typename?: 'TariffsFields_createdAt_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type TariffsFields_CreatedAt_Update = {
  readonly __typename?: 'TariffsFields_createdAt_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type TariffsFields_Description = {
  readonly __typename?: 'TariffsFields_description';
  readonly create: Maybe<TariffsFields_Description_Create>;
  readonly delete: Maybe<TariffsFields_Description_Delete>;
  readonly read: Maybe<TariffsFields_Description_Read>;
  readonly update: Maybe<TariffsFields_Description_Update>;
};

export type TariffsFields_Description_Create = {
  readonly __typename?: 'TariffsFields_description_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type TariffsFields_Description_Delete = {
  readonly __typename?: 'TariffsFields_description_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type TariffsFields_Description_Read = {
  readonly __typename?: 'TariffsFields_description_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type TariffsFields_Description_Update = {
  readonly __typename?: 'TariffsFields_description_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type TariffsFields_Price = {
  readonly __typename?: 'TariffsFields_price';
  readonly create: Maybe<TariffsFields_Price_Create>;
  readonly delete: Maybe<TariffsFields_Price_Delete>;
  readonly read: Maybe<TariffsFields_Price_Read>;
  readonly update: Maybe<TariffsFields_Price_Update>;
};

export type TariffsFields_Price_Create = {
  readonly __typename?: 'TariffsFields_price_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type TariffsFields_Price_Delete = {
  readonly __typename?: 'TariffsFields_price_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type TariffsFields_Price_Read = {
  readonly __typename?: 'TariffsFields_price_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type TariffsFields_Price_Update = {
  readonly __typename?: 'TariffsFields_price_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type TariffsFields_Title = {
  readonly __typename?: 'TariffsFields_title';
  readonly create: Maybe<TariffsFields_Title_Create>;
  readonly delete: Maybe<TariffsFields_Title_Delete>;
  readonly read: Maybe<TariffsFields_Title_Read>;
  readonly update: Maybe<TariffsFields_Title_Update>;
};

export type TariffsFields_Title_Create = {
  readonly __typename?: 'TariffsFields_title_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type TariffsFields_Title_Delete = {
  readonly __typename?: 'TariffsFields_title_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type TariffsFields_Title_Read = {
  readonly __typename?: 'TariffsFields_title_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type TariffsFields_Title_Update = {
  readonly __typename?: 'TariffsFields_title_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type TariffsFields_UpdatedAt = {
  readonly __typename?: 'TariffsFields_updatedAt';
  readonly create: Maybe<TariffsFields_UpdatedAt_Create>;
  readonly delete: Maybe<TariffsFields_UpdatedAt_Delete>;
  readonly read: Maybe<TariffsFields_UpdatedAt_Read>;
  readonly update: Maybe<TariffsFields_UpdatedAt_Update>;
};

export type TariffsFields_UpdatedAt_Create = {
  readonly __typename?: 'TariffsFields_updatedAt_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type TariffsFields_UpdatedAt_Delete = {
  readonly __typename?: 'TariffsFields_updatedAt_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type TariffsFields_UpdatedAt_Read = {
  readonly __typename?: 'TariffsFields_updatedAt_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type TariffsFields_UpdatedAt_Update = {
  readonly __typename?: 'TariffsFields_updatedAt_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type TariffsReadAccess = {
  readonly __typename?: 'TariffsReadAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where: Maybe<Scalars['JSONObject']['output']>;
};

export type TariffsReadDocAccess = {
  readonly __typename?: 'TariffsReadDocAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where: Maybe<Scalars['JSONObject']['output']>;
};

export type TariffsUpdateAccess = {
  readonly __typename?: 'TariffsUpdateAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where: Maybe<Scalars['JSONObject']['output']>;
};

export type TariffsUpdateDocAccess = {
  readonly __typename?: 'TariffsUpdateDocAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where: Maybe<Scalars['JSONObject']['output']>;
};

export type Test = {
  readonly __typename?: 'Test';
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly description: Maybe<Scalars['String']['output']>;
  readonly exam: Maybe<Exam>;
  readonly id: Scalars['Int']['output'];
  readonly questions: Maybe<ReadonlyArray<Question>>;
  readonly subjects: Maybe<ReadonlyArray<Subject>>;
  readonly title: Scalars['String']['output'];
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
};


export type TestExamArgs = {
  fallbackLocale: InputMaybe<FallbackLocaleInputType>;
  locale: InputMaybe<LocaleInputType>;
};


export type TestQuestionsArgs = {
  fallbackLocale: InputMaybe<FallbackLocaleInputType>;
  locale: InputMaybe<LocaleInputType>;
};


export type TestSubjectsArgs = {
  fallbackLocale: InputMaybe<FallbackLocaleInputType>;
  locale: InputMaybe<LocaleInputType>;
};

export type TestResult = {
  readonly __typename?: 'TestResult';
  readonly answers: Maybe<ReadonlyArray<TestResult_Answers>>;
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly id: Scalars['Int']['output'];
  readonly status: TestResult_Status;
  readonly test: Test;
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
  readonly user: User;
};


export type TestResultTestArgs = {
  fallbackLocale: InputMaybe<FallbackLocaleInputType>;
  locale: InputMaybe<LocaleInputType>;
};


export type TestResultUserArgs = {
  fallbackLocale: InputMaybe<FallbackLocaleInputType>;
  locale: InputMaybe<LocaleInputType>;
};

export type TestResultUpdate_Status_MutationInput =
  | 'completed'
  | 'in_progress';

export type TestResult_Answers = {
  readonly __typename?: 'TestResult_Answers';
  readonly id: Maybe<Scalars['String']['output']>;
  readonly isCorrect: Maybe<Scalars['Boolean']['output']>;
  readonly question: Maybe<Question>;
  readonly userAnswer: Maybe<Scalars['JSON']['output']>;
};


export type TestResult_AnswersQuestionArgs = {
  fallbackLocale: InputMaybe<FallbackLocaleInputType>;
  locale: InputMaybe<LocaleInputType>;
};

export type TestResult_Status_All =
  | 'completed'
  | 'in_progress'
  | 'not_started';

export type TestResult_Answers__Id_Operator = {
  readonly all: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly contains: InputMaybe<Scalars['String']['input']>;
  readonly equals: InputMaybe<Scalars['String']['input']>;
  readonly exists: InputMaybe<Scalars['Boolean']['input']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly like: InputMaybe<Scalars['String']['input']>;
  readonly not_equals: InputMaybe<Scalars['String']['input']>;
  readonly not_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type TestResult_Answers__IsCorrect_Operator = {
  readonly equals: InputMaybe<Scalars['Boolean']['input']>;
  readonly exists: InputMaybe<Scalars['Boolean']['input']>;
  readonly not_equals: InputMaybe<Scalars['Boolean']['input']>;
};

export type TestResult_Answers__Question_Operator = {
  readonly all: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']['input']>>>;
  readonly equals: InputMaybe<Scalars['JSON']['input']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']['input']>>>;
  readonly not_equals: InputMaybe<Scalars['JSON']['input']>;
  readonly not_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']['input']>>>;
};

export type TestResult_Answers__UserAnswer_Operator = {
  readonly contains: InputMaybe<Scalars['JSON']['input']>;
  readonly equals: InputMaybe<Scalars['JSON']['input']>;
  readonly intersects: InputMaybe<Scalars['JSON']['input']>;
  readonly like: InputMaybe<Scalars['JSON']['input']>;
  readonly not_equals: InputMaybe<Scalars['JSON']['input']>;
  readonly within: InputMaybe<Scalars['JSON']['input']>;
};

export type TestResult_CreatedAt_Operator = {
  readonly equals: InputMaybe<Scalars['DateTime']['input']>;
  readonly exists: InputMaybe<Scalars['Boolean']['input']>;
  readonly greater_than: InputMaybe<Scalars['DateTime']['input']>;
  readonly greater_than_equal: InputMaybe<Scalars['DateTime']['input']>;
  readonly less_than: InputMaybe<Scalars['DateTime']['input']>;
  readonly less_than_equal: InputMaybe<Scalars['DateTime']['input']>;
  readonly like: InputMaybe<Scalars['DateTime']['input']>;
  readonly not_equals: InputMaybe<Scalars['DateTime']['input']>;
};

export type TestResult_Id_Operator = {
  readonly equals: InputMaybe<Scalars['Int']['input']>;
  readonly exists: InputMaybe<Scalars['Boolean']['input']>;
  readonly greater_than: InputMaybe<Scalars['Int']['input']>;
  readonly greater_than_equal: InputMaybe<Scalars['Int']['input']>;
  readonly less_than: InputMaybe<Scalars['Int']['input']>;
  readonly less_than_equal: InputMaybe<Scalars['Int']['input']>;
  readonly not_equals: InputMaybe<Scalars['Int']['input']>;
};

export type TestResult_Status =
  | 'completed'
  | 'in_progress';

export type TestResult_Status_Input =
  | 'completed'
  | 'in_progress';

export type TestResult_Status_MutationInput =
  | 'completed'
  | 'in_progress';

export type TestResult_Status_Operator = {
  readonly all: InputMaybe<ReadonlyArray<InputMaybe<TestResult_Status_Input>>>;
  readonly equals: InputMaybe<TestResult_Status_Input>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<TestResult_Status_Input>>>;
  readonly not_equals: InputMaybe<TestResult_Status_Input>;
  readonly not_in: InputMaybe<ReadonlyArray<InputMaybe<TestResult_Status_Input>>>;
};

export type TestResult_Test_Operator = {
  readonly all: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']['input']>>>;
  readonly equals: InputMaybe<Scalars['JSON']['input']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']['input']>>>;
  readonly not_equals: InputMaybe<Scalars['JSON']['input']>;
  readonly not_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']['input']>>>;
};

export type TestResult_UpdatedAt_Operator = {
  readonly equals: InputMaybe<Scalars['DateTime']['input']>;
  readonly exists: InputMaybe<Scalars['Boolean']['input']>;
  readonly greater_than: InputMaybe<Scalars['DateTime']['input']>;
  readonly greater_than_equal: InputMaybe<Scalars['DateTime']['input']>;
  readonly less_than: InputMaybe<Scalars['DateTime']['input']>;
  readonly less_than_equal: InputMaybe<Scalars['DateTime']['input']>;
  readonly like: InputMaybe<Scalars['DateTime']['input']>;
  readonly not_equals: InputMaybe<Scalars['DateTime']['input']>;
};

export type TestResult_User_Operator = {
  readonly all: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']['input']>>>;
  readonly equals: InputMaybe<Scalars['JSON']['input']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']['input']>>>;
  readonly not_equals: InputMaybe<Scalars['JSON']['input']>;
  readonly not_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']['input']>>>;
};

export type TestResult_Where = {
  readonly AND: InputMaybe<ReadonlyArray<InputMaybe<TestResult_Where_And>>>;
  readonly OR: InputMaybe<ReadonlyArray<InputMaybe<TestResult_Where_Or>>>;
  readonly answers__id: InputMaybe<TestResult_Answers__Id_Operator>;
  readonly answers__isCorrect: InputMaybe<TestResult_Answers__IsCorrect_Operator>;
  readonly answers__question: InputMaybe<TestResult_Answers__Question_Operator>;
  readonly answers__userAnswer: InputMaybe<TestResult_Answers__UserAnswer_Operator>;
  readonly createdAt: InputMaybe<TestResult_CreatedAt_Operator>;
  readonly id: InputMaybe<TestResult_Id_Operator>;
  readonly status: InputMaybe<TestResult_Status_Operator>;
  readonly test: InputMaybe<TestResult_Test_Operator>;
  readonly updatedAt: InputMaybe<TestResult_UpdatedAt_Operator>;
  readonly user: InputMaybe<TestResult_User_Operator>;
};

export type TestResult_Where_And = {
  readonly AND: InputMaybe<ReadonlyArray<InputMaybe<TestResult_Where_And>>>;
  readonly OR: InputMaybe<ReadonlyArray<InputMaybe<TestResult_Where_Or>>>;
  readonly answers__id: InputMaybe<TestResult_Answers__Id_Operator>;
  readonly answers__isCorrect: InputMaybe<TestResult_Answers__IsCorrect_Operator>;
  readonly answers__question: InputMaybe<TestResult_Answers__Question_Operator>;
  readonly answers__userAnswer: InputMaybe<TestResult_Answers__UserAnswer_Operator>;
  readonly createdAt: InputMaybe<TestResult_CreatedAt_Operator>;
  readonly id: InputMaybe<TestResult_Id_Operator>;
  readonly status: InputMaybe<TestResult_Status_Operator>;
  readonly test: InputMaybe<TestResult_Test_Operator>;
  readonly updatedAt: InputMaybe<TestResult_UpdatedAt_Operator>;
  readonly user: InputMaybe<TestResult_User_Operator>;
};

export type TestResult_Where_Or = {
  readonly AND: InputMaybe<ReadonlyArray<InputMaybe<TestResult_Where_And>>>;
  readonly OR: InputMaybe<ReadonlyArray<InputMaybe<TestResult_Where_Or>>>;
  readonly answers__id: InputMaybe<TestResult_Answers__Id_Operator>;
  readonly answers__isCorrect: InputMaybe<TestResult_Answers__IsCorrect_Operator>;
  readonly answers__question: InputMaybe<TestResult_Answers__Question_Operator>;
  readonly answers__userAnswer: InputMaybe<TestResult_Answers__UserAnswer_Operator>;
  readonly createdAt: InputMaybe<TestResult_CreatedAt_Operator>;
  readonly id: InputMaybe<TestResult_Id_Operator>;
  readonly status: InputMaybe<TestResult_Status_Operator>;
  readonly test: InputMaybe<TestResult_Test_Operator>;
  readonly updatedAt: InputMaybe<TestResult_UpdatedAt_Operator>;
  readonly user: InputMaybe<TestResult_User_Operator>;
};

export type TestResults = {
  readonly __typename?: 'TestResults';
  readonly docs: ReadonlyArray<TestResult>;
  readonly hasNextPage: Scalars['Boolean']['output'];
  readonly hasPrevPage: Scalars['Boolean']['output'];
  readonly limit: Scalars['Int']['output'];
  readonly nextPage: Maybe<Scalars['Int']['output']>;
  readonly offset: Maybe<Scalars['Int']['output']>;
  readonly page: Scalars['Int']['output'];
  readonly pagingCounter: Scalars['Int']['output'];
  readonly prevPage: Maybe<Scalars['Int']['output']>;
  readonly totalDocs: Scalars['Int']['output'];
  readonly totalPages: Scalars['Int']['output'];
};

export type TestResultsCreateAccess = {
  readonly __typename?: 'TestResultsCreateAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where: Maybe<Scalars['JSONObject']['output']>;
};

export type TestResultsCreateDocAccess = {
  readonly __typename?: 'TestResultsCreateDocAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where: Maybe<Scalars['JSONObject']['output']>;
};

export type TestResultsDeleteAccess = {
  readonly __typename?: 'TestResultsDeleteAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where: Maybe<Scalars['JSONObject']['output']>;
};

export type TestResultsDeleteDocAccess = {
  readonly __typename?: 'TestResultsDeleteDocAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where: Maybe<Scalars['JSONObject']['output']>;
};

export type TestResultsDocAccessFields = {
  readonly __typename?: 'TestResultsDocAccessFields';
  readonly answers: Maybe<TestResultsDocAccessFields_Answers>;
  readonly createdAt: Maybe<TestResultsDocAccessFields_CreatedAt>;
  readonly status: Maybe<TestResultsDocAccessFields_Status>;
  readonly test: Maybe<TestResultsDocAccessFields_Test>;
  readonly updatedAt: Maybe<TestResultsDocAccessFields_UpdatedAt>;
  readonly user: Maybe<TestResultsDocAccessFields_User>;
};

export type TestResultsDocAccessFields_Answers = {
  readonly __typename?: 'TestResultsDocAccessFields_answers';
  readonly create: Maybe<TestResultsDocAccessFields_Answers_Create>;
  readonly delete: Maybe<TestResultsDocAccessFields_Answers_Delete>;
  readonly fields: Maybe<TestResultsDocAccessFields_Answers_Fields>;
  readonly read: Maybe<TestResultsDocAccessFields_Answers_Read>;
  readonly update: Maybe<TestResultsDocAccessFields_Answers_Update>;
};

export type TestResultsDocAccessFields_Answers_Create = {
  readonly __typename?: 'TestResultsDocAccessFields_answers_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type TestResultsDocAccessFields_Answers_Delete = {
  readonly __typename?: 'TestResultsDocAccessFields_answers_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type TestResultsDocAccessFields_Answers_Fields = {
  readonly __typename?: 'TestResultsDocAccessFields_answers_Fields';
  readonly id: Maybe<TestResultsDocAccessFields_Answers_Id>;
  readonly isCorrect: Maybe<TestResultsDocAccessFields_Answers_IsCorrect>;
  readonly question: Maybe<TestResultsDocAccessFields_Answers_Question>;
  readonly userAnswer: Maybe<TestResultsDocAccessFields_Answers_UserAnswer>;
};

export type TestResultsDocAccessFields_Answers_Read = {
  readonly __typename?: 'TestResultsDocAccessFields_answers_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type TestResultsDocAccessFields_Answers_Update = {
  readonly __typename?: 'TestResultsDocAccessFields_answers_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type TestResultsDocAccessFields_Answers_Id = {
  readonly __typename?: 'TestResultsDocAccessFields_answers_id';
  readonly create: Maybe<TestResultsDocAccessFields_Answers_Id_Create>;
  readonly delete: Maybe<TestResultsDocAccessFields_Answers_Id_Delete>;
  readonly read: Maybe<TestResultsDocAccessFields_Answers_Id_Read>;
  readonly update: Maybe<TestResultsDocAccessFields_Answers_Id_Update>;
};

export type TestResultsDocAccessFields_Answers_Id_Create = {
  readonly __typename?: 'TestResultsDocAccessFields_answers_id_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type TestResultsDocAccessFields_Answers_Id_Delete = {
  readonly __typename?: 'TestResultsDocAccessFields_answers_id_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type TestResultsDocAccessFields_Answers_Id_Read = {
  readonly __typename?: 'TestResultsDocAccessFields_answers_id_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type TestResultsDocAccessFields_Answers_Id_Update = {
  readonly __typename?: 'TestResultsDocAccessFields_answers_id_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type TestResultsDocAccessFields_Answers_IsCorrect = {
  readonly __typename?: 'TestResultsDocAccessFields_answers_isCorrect';
  readonly create: Maybe<TestResultsDocAccessFields_Answers_IsCorrect_Create>;
  readonly delete: Maybe<TestResultsDocAccessFields_Answers_IsCorrect_Delete>;
  readonly read: Maybe<TestResultsDocAccessFields_Answers_IsCorrect_Read>;
  readonly update: Maybe<TestResultsDocAccessFields_Answers_IsCorrect_Update>;
};

export type TestResultsDocAccessFields_Answers_IsCorrect_Create = {
  readonly __typename?: 'TestResultsDocAccessFields_answers_isCorrect_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type TestResultsDocAccessFields_Answers_IsCorrect_Delete = {
  readonly __typename?: 'TestResultsDocAccessFields_answers_isCorrect_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type TestResultsDocAccessFields_Answers_IsCorrect_Read = {
  readonly __typename?: 'TestResultsDocAccessFields_answers_isCorrect_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type TestResultsDocAccessFields_Answers_IsCorrect_Update = {
  readonly __typename?: 'TestResultsDocAccessFields_answers_isCorrect_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type TestResultsDocAccessFields_Answers_Question = {
  readonly __typename?: 'TestResultsDocAccessFields_answers_question';
  readonly create: Maybe<TestResultsDocAccessFields_Answers_Question_Create>;
  readonly delete: Maybe<TestResultsDocAccessFields_Answers_Question_Delete>;
  readonly read: Maybe<TestResultsDocAccessFields_Answers_Question_Read>;
  readonly update: Maybe<TestResultsDocAccessFields_Answers_Question_Update>;
};

export type TestResultsDocAccessFields_Answers_Question_Create = {
  readonly __typename?: 'TestResultsDocAccessFields_answers_question_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type TestResultsDocAccessFields_Answers_Question_Delete = {
  readonly __typename?: 'TestResultsDocAccessFields_answers_question_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type TestResultsDocAccessFields_Answers_Question_Read = {
  readonly __typename?: 'TestResultsDocAccessFields_answers_question_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type TestResultsDocAccessFields_Answers_Question_Update = {
  readonly __typename?: 'TestResultsDocAccessFields_answers_question_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type TestResultsDocAccessFields_Answers_UserAnswer = {
  readonly __typename?: 'TestResultsDocAccessFields_answers_userAnswer';
  readonly create: Maybe<TestResultsDocAccessFields_Answers_UserAnswer_Create>;
  readonly delete: Maybe<TestResultsDocAccessFields_Answers_UserAnswer_Delete>;
  readonly read: Maybe<TestResultsDocAccessFields_Answers_UserAnswer_Read>;
  readonly update: Maybe<TestResultsDocAccessFields_Answers_UserAnswer_Update>;
};

export type TestResultsDocAccessFields_Answers_UserAnswer_Create = {
  readonly __typename?: 'TestResultsDocAccessFields_answers_userAnswer_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type TestResultsDocAccessFields_Answers_UserAnswer_Delete = {
  readonly __typename?: 'TestResultsDocAccessFields_answers_userAnswer_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type TestResultsDocAccessFields_Answers_UserAnswer_Read = {
  readonly __typename?: 'TestResultsDocAccessFields_answers_userAnswer_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type TestResultsDocAccessFields_Answers_UserAnswer_Update = {
  readonly __typename?: 'TestResultsDocAccessFields_answers_userAnswer_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type TestResultsDocAccessFields_CreatedAt = {
  readonly __typename?: 'TestResultsDocAccessFields_createdAt';
  readonly create: Maybe<TestResultsDocAccessFields_CreatedAt_Create>;
  readonly delete: Maybe<TestResultsDocAccessFields_CreatedAt_Delete>;
  readonly read: Maybe<TestResultsDocAccessFields_CreatedAt_Read>;
  readonly update: Maybe<TestResultsDocAccessFields_CreatedAt_Update>;
};

export type TestResultsDocAccessFields_CreatedAt_Create = {
  readonly __typename?: 'TestResultsDocAccessFields_createdAt_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type TestResultsDocAccessFields_CreatedAt_Delete = {
  readonly __typename?: 'TestResultsDocAccessFields_createdAt_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type TestResultsDocAccessFields_CreatedAt_Read = {
  readonly __typename?: 'TestResultsDocAccessFields_createdAt_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type TestResultsDocAccessFields_CreatedAt_Update = {
  readonly __typename?: 'TestResultsDocAccessFields_createdAt_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type TestResultsDocAccessFields_Status = {
  readonly __typename?: 'TestResultsDocAccessFields_status';
  readonly create: Maybe<TestResultsDocAccessFields_Status_Create>;
  readonly delete: Maybe<TestResultsDocAccessFields_Status_Delete>;
  readonly read: Maybe<TestResultsDocAccessFields_Status_Read>;
  readonly update: Maybe<TestResultsDocAccessFields_Status_Update>;
};

export type TestResultsDocAccessFields_Status_Create = {
  readonly __typename?: 'TestResultsDocAccessFields_status_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type TestResultsDocAccessFields_Status_Delete = {
  readonly __typename?: 'TestResultsDocAccessFields_status_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type TestResultsDocAccessFields_Status_Read = {
  readonly __typename?: 'TestResultsDocAccessFields_status_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type TestResultsDocAccessFields_Status_Update = {
  readonly __typename?: 'TestResultsDocAccessFields_status_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type TestResultsDocAccessFields_Test = {
  readonly __typename?: 'TestResultsDocAccessFields_test';
  readonly create: Maybe<TestResultsDocAccessFields_Test_Create>;
  readonly delete: Maybe<TestResultsDocAccessFields_Test_Delete>;
  readonly read: Maybe<TestResultsDocAccessFields_Test_Read>;
  readonly update: Maybe<TestResultsDocAccessFields_Test_Update>;
};

export type TestResultsDocAccessFields_Test_Create = {
  readonly __typename?: 'TestResultsDocAccessFields_test_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type TestResultsDocAccessFields_Test_Delete = {
  readonly __typename?: 'TestResultsDocAccessFields_test_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type TestResultsDocAccessFields_Test_Read = {
  readonly __typename?: 'TestResultsDocAccessFields_test_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type TestResultsDocAccessFields_Test_Update = {
  readonly __typename?: 'TestResultsDocAccessFields_test_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type TestResultsDocAccessFields_UpdatedAt = {
  readonly __typename?: 'TestResultsDocAccessFields_updatedAt';
  readonly create: Maybe<TestResultsDocAccessFields_UpdatedAt_Create>;
  readonly delete: Maybe<TestResultsDocAccessFields_UpdatedAt_Delete>;
  readonly read: Maybe<TestResultsDocAccessFields_UpdatedAt_Read>;
  readonly update: Maybe<TestResultsDocAccessFields_UpdatedAt_Update>;
};

export type TestResultsDocAccessFields_UpdatedAt_Create = {
  readonly __typename?: 'TestResultsDocAccessFields_updatedAt_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type TestResultsDocAccessFields_UpdatedAt_Delete = {
  readonly __typename?: 'TestResultsDocAccessFields_updatedAt_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type TestResultsDocAccessFields_UpdatedAt_Read = {
  readonly __typename?: 'TestResultsDocAccessFields_updatedAt_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type TestResultsDocAccessFields_UpdatedAt_Update = {
  readonly __typename?: 'TestResultsDocAccessFields_updatedAt_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type TestResultsDocAccessFields_User = {
  readonly __typename?: 'TestResultsDocAccessFields_user';
  readonly create: Maybe<TestResultsDocAccessFields_User_Create>;
  readonly delete: Maybe<TestResultsDocAccessFields_User_Delete>;
  readonly read: Maybe<TestResultsDocAccessFields_User_Read>;
  readonly update: Maybe<TestResultsDocAccessFields_User_Update>;
};

export type TestResultsDocAccessFields_User_Create = {
  readonly __typename?: 'TestResultsDocAccessFields_user_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type TestResultsDocAccessFields_User_Delete = {
  readonly __typename?: 'TestResultsDocAccessFields_user_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type TestResultsDocAccessFields_User_Read = {
  readonly __typename?: 'TestResultsDocAccessFields_user_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type TestResultsDocAccessFields_User_Update = {
  readonly __typename?: 'TestResultsDocAccessFields_user_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type TestResultsFields = {
  readonly __typename?: 'TestResultsFields';
  readonly answers: Maybe<TestResultsFields_Answers>;
  readonly createdAt: Maybe<TestResultsFields_CreatedAt>;
  readonly status: Maybe<TestResultsFields_Status>;
  readonly test: Maybe<TestResultsFields_Test>;
  readonly updatedAt: Maybe<TestResultsFields_UpdatedAt>;
  readonly user: Maybe<TestResultsFields_User>;
};

export type TestResultsFields_Answers = {
  readonly __typename?: 'TestResultsFields_answers';
  readonly create: Maybe<TestResultsFields_Answers_Create>;
  readonly delete: Maybe<TestResultsFields_Answers_Delete>;
  readonly fields: Maybe<TestResultsFields_Answers_Fields>;
  readonly read: Maybe<TestResultsFields_Answers_Read>;
  readonly update: Maybe<TestResultsFields_Answers_Update>;
};

export type TestResultsFields_Answers_Create = {
  readonly __typename?: 'TestResultsFields_answers_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type TestResultsFields_Answers_Delete = {
  readonly __typename?: 'TestResultsFields_answers_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type TestResultsFields_Answers_Fields = {
  readonly __typename?: 'TestResultsFields_answers_Fields';
  readonly id: Maybe<TestResultsFields_Answers_Id>;
  readonly isCorrect: Maybe<TestResultsFields_Answers_IsCorrect>;
  readonly question: Maybe<TestResultsFields_Answers_Question>;
  readonly userAnswer: Maybe<TestResultsFields_Answers_UserAnswer>;
};

export type TestResultsFields_Answers_Read = {
  readonly __typename?: 'TestResultsFields_answers_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type TestResultsFields_Answers_Update = {
  readonly __typename?: 'TestResultsFields_answers_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type TestResultsFields_Answers_Id = {
  readonly __typename?: 'TestResultsFields_answers_id';
  readonly create: Maybe<TestResultsFields_Answers_Id_Create>;
  readonly delete: Maybe<TestResultsFields_Answers_Id_Delete>;
  readonly read: Maybe<TestResultsFields_Answers_Id_Read>;
  readonly update: Maybe<TestResultsFields_Answers_Id_Update>;
};

export type TestResultsFields_Answers_Id_Create = {
  readonly __typename?: 'TestResultsFields_answers_id_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type TestResultsFields_Answers_Id_Delete = {
  readonly __typename?: 'TestResultsFields_answers_id_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type TestResultsFields_Answers_Id_Read = {
  readonly __typename?: 'TestResultsFields_answers_id_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type TestResultsFields_Answers_Id_Update = {
  readonly __typename?: 'TestResultsFields_answers_id_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type TestResultsFields_Answers_IsCorrect = {
  readonly __typename?: 'TestResultsFields_answers_isCorrect';
  readonly create: Maybe<TestResultsFields_Answers_IsCorrect_Create>;
  readonly delete: Maybe<TestResultsFields_Answers_IsCorrect_Delete>;
  readonly read: Maybe<TestResultsFields_Answers_IsCorrect_Read>;
  readonly update: Maybe<TestResultsFields_Answers_IsCorrect_Update>;
};

export type TestResultsFields_Answers_IsCorrect_Create = {
  readonly __typename?: 'TestResultsFields_answers_isCorrect_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type TestResultsFields_Answers_IsCorrect_Delete = {
  readonly __typename?: 'TestResultsFields_answers_isCorrect_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type TestResultsFields_Answers_IsCorrect_Read = {
  readonly __typename?: 'TestResultsFields_answers_isCorrect_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type TestResultsFields_Answers_IsCorrect_Update = {
  readonly __typename?: 'TestResultsFields_answers_isCorrect_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type TestResultsFields_Answers_Question = {
  readonly __typename?: 'TestResultsFields_answers_question';
  readonly create: Maybe<TestResultsFields_Answers_Question_Create>;
  readonly delete: Maybe<TestResultsFields_Answers_Question_Delete>;
  readonly read: Maybe<TestResultsFields_Answers_Question_Read>;
  readonly update: Maybe<TestResultsFields_Answers_Question_Update>;
};

export type TestResultsFields_Answers_Question_Create = {
  readonly __typename?: 'TestResultsFields_answers_question_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type TestResultsFields_Answers_Question_Delete = {
  readonly __typename?: 'TestResultsFields_answers_question_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type TestResultsFields_Answers_Question_Read = {
  readonly __typename?: 'TestResultsFields_answers_question_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type TestResultsFields_Answers_Question_Update = {
  readonly __typename?: 'TestResultsFields_answers_question_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type TestResultsFields_Answers_UserAnswer = {
  readonly __typename?: 'TestResultsFields_answers_userAnswer';
  readonly create: Maybe<TestResultsFields_Answers_UserAnswer_Create>;
  readonly delete: Maybe<TestResultsFields_Answers_UserAnswer_Delete>;
  readonly read: Maybe<TestResultsFields_Answers_UserAnswer_Read>;
  readonly update: Maybe<TestResultsFields_Answers_UserAnswer_Update>;
};

export type TestResultsFields_Answers_UserAnswer_Create = {
  readonly __typename?: 'TestResultsFields_answers_userAnswer_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type TestResultsFields_Answers_UserAnswer_Delete = {
  readonly __typename?: 'TestResultsFields_answers_userAnswer_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type TestResultsFields_Answers_UserAnswer_Read = {
  readonly __typename?: 'TestResultsFields_answers_userAnswer_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type TestResultsFields_Answers_UserAnswer_Update = {
  readonly __typename?: 'TestResultsFields_answers_userAnswer_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type TestResultsFields_CreatedAt = {
  readonly __typename?: 'TestResultsFields_createdAt';
  readonly create: Maybe<TestResultsFields_CreatedAt_Create>;
  readonly delete: Maybe<TestResultsFields_CreatedAt_Delete>;
  readonly read: Maybe<TestResultsFields_CreatedAt_Read>;
  readonly update: Maybe<TestResultsFields_CreatedAt_Update>;
};

export type TestResultsFields_CreatedAt_Create = {
  readonly __typename?: 'TestResultsFields_createdAt_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type TestResultsFields_CreatedAt_Delete = {
  readonly __typename?: 'TestResultsFields_createdAt_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type TestResultsFields_CreatedAt_Read = {
  readonly __typename?: 'TestResultsFields_createdAt_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type TestResultsFields_CreatedAt_Update = {
  readonly __typename?: 'TestResultsFields_createdAt_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type TestResultsFields_Status = {
  readonly __typename?: 'TestResultsFields_status';
  readonly create: Maybe<TestResultsFields_Status_Create>;
  readonly delete: Maybe<TestResultsFields_Status_Delete>;
  readonly read: Maybe<TestResultsFields_Status_Read>;
  readonly update: Maybe<TestResultsFields_Status_Update>;
};

export type TestResultsFields_Status_Create = {
  readonly __typename?: 'TestResultsFields_status_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type TestResultsFields_Status_Delete = {
  readonly __typename?: 'TestResultsFields_status_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type TestResultsFields_Status_Read = {
  readonly __typename?: 'TestResultsFields_status_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type TestResultsFields_Status_Update = {
  readonly __typename?: 'TestResultsFields_status_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type TestResultsFields_Test = {
  readonly __typename?: 'TestResultsFields_test';
  readonly create: Maybe<TestResultsFields_Test_Create>;
  readonly delete: Maybe<TestResultsFields_Test_Delete>;
  readonly read: Maybe<TestResultsFields_Test_Read>;
  readonly update: Maybe<TestResultsFields_Test_Update>;
};

export type TestResultsFields_Test_Create = {
  readonly __typename?: 'TestResultsFields_test_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type TestResultsFields_Test_Delete = {
  readonly __typename?: 'TestResultsFields_test_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type TestResultsFields_Test_Read = {
  readonly __typename?: 'TestResultsFields_test_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type TestResultsFields_Test_Update = {
  readonly __typename?: 'TestResultsFields_test_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type TestResultsFields_UpdatedAt = {
  readonly __typename?: 'TestResultsFields_updatedAt';
  readonly create: Maybe<TestResultsFields_UpdatedAt_Create>;
  readonly delete: Maybe<TestResultsFields_UpdatedAt_Delete>;
  readonly read: Maybe<TestResultsFields_UpdatedAt_Read>;
  readonly update: Maybe<TestResultsFields_UpdatedAt_Update>;
};

export type TestResultsFields_UpdatedAt_Create = {
  readonly __typename?: 'TestResultsFields_updatedAt_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type TestResultsFields_UpdatedAt_Delete = {
  readonly __typename?: 'TestResultsFields_updatedAt_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type TestResultsFields_UpdatedAt_Read = {
  readonly __typename?: 'TestResultsFields_updatedAt_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type TestResultsFields_UpdatedAt_Update = {
  readonly __typename?: 'TestResultsFields_updatedAt_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type TestResultsFields_User = {
  readonly __typename?: 'TestResultsFields_user';
  readonly create: Maybe<TestResultsFields_User_Create>;
  readonly delete: Maybe<TestResultsFields_User_Delete>;
  readonly read: Maybe<TestResultsFields_User_Read>;
  readonly update: Maybe<TestResultsFields_User_Update>;
};

export type TestResultsFields_User_Create = {
  readonly __typename?: 'TestResultsFields_user_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type TestResultsFields_User_Delete = {
  readonly __typename?: 'TestResultsFields_user_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type TestResultsFields_User_Read = {
  readonly __typename?: 'TestResultsFields_user_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type TestResultsFields_User_Update = {
  readonly __typename?: 'TestResultsFields_user_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type TestResultsReadAccess = {
  readonly __typename?: 'TestResultsReadAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where: Maybe<Scalars['JSONObject']['output']>;
};

export type TestResultsReadDocAccess = {
  readonly __typename?: 'TestResultsReadDocAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where: Maybe<Scalars['JSONObject']['output']>;
};

export type TestResultsUpdateAccess = {
  readonly __typename?: 'TestResultsUpdateAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where: Maybe<Scalars['JSONObject']['output']>;
};

export type TestResultsUpdateDocAccess = {
  readonly __typename?: 'TestResultsUpdateDocAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where: Maybe<Scalars['JSONObject']['output']>;
};

export type TestWithStatus = {
  readonly __typename?: 'TestWithStatus';
  readonly description: Maybe<Scalars['String']['output']>;
  readonly id: Maybe<Scalars['ID']['output']>;
  readonly status: Maybe<Scalars['String']['output']>;
  readonly title: Maybe<Scalars['String']['output']>;
};

export type Test_CreatedAt_Operator = {
  readonly equals: InputMaybe<Scalars['DateTime']['input']>;
  readonly exists: InputMaybe<Scalars['Boolean']['input']>;
  readonly greater_than: InputMaybe<Scalars['DateTime']['input']>;
  readonly greater_than_equal: InputMaybe<Scalars['DateTime']['input']>;
  readonly less_than: InputMaybe<Scalars['DateTime']['input']>;
  readonly less_than_equal: InputMaybe<Scalars['DateTime']['input']>;
  readonly like: InputMaybe<Scalars['DateTime']['input']>;
  readonly not_equals: InputMaybe<Scalars['DateTime']['input']>;
};

export type Test_Description_Operator = {
  readonly contains: InputMaybe<Scalars['String']['input']>;
  readonly equals: InputMaybe<Scalars['String']['input']>;
  readonly exists: InputMaybe<Scalars['Boolean']['input']>;
  readonly like: InputMaybe<Scalars['String']['input']>;
  readonly not_equals: InputMaybe<Scalars['String']['input']>;
};

export type Test_Exam_Operator = {
  readonly all: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']['input']>>>;
  readonly equals: InputMaybe<Scalars['JSON']['input']>;
  readonly exists: InputMaybe<Scalars['Boolean']['input']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']['input']>>>;
  readonly not_equals: InputMaybe<Scalars['JSON']['input']>;
  readonly not_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']['input']>>>;
};

export type Test_Id_Operator = {
  readonly equals: InputMaybe<Scalars['Int']['input']>;
  readonly exists: InputMaybe<Scalars['Boolean']['input']>;
  readonly greater_than: InputMaybe<Scalars['Int']['input']>;
  readonly greater_than_equal: InputMaybe<Scalars['Int']['input']>;
  readonly less_than: InputMaybe<Scalars['Int']['input']>;
  readonly less_than_equal: InputMaybe<Scalars['Int']['input']>;
  readonly not_equals: InputMaybe<Scalars['Int']['input']>;
};

export type Test_Questions_Operator = {
  readonly all: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']['input']>>>;
  readonly equals: InputMaybe<Scalars['JSON']['input']>;
  readonly exists: InputMaybe<Scalars['Boolean']['input']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']['input']>>>;
  readonly not_equals: InputMaybe<Scalars['JSON']['input']>;
  readonly not_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']['input']>>>;
};

export type Test_Subjects_Operator = {
  readonly all: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']['input']>>>;
  readonly equals: InputMaybe<Scalars['JSON']['input']>;
  readonly exists: InputMaybe<Scalars['Boolean']['input']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']['input']>>>;
  readonly not_equals: InputMaybe<Scalars['JSON']['input']>;
  readonly not_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']['input']>>>;
};

export type Test_Title_Operator = {
  readonly all: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly contains: InputMaybe<Scalars['String']['input']>;
  readonly equals: InputMaybe<Scalars['String']['input']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly like: InputMaybe<Scalars['String']['input']>;
  readonly not_equals: InputMaybe<Scalars['String']['input']>;
  readonly not_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type Test_UpdatedAt_Operator = {
  readonly equals: InputMaybe<Scalars['DateTime']['input']>;
  readonly exists: InputMaybe<Scalars['Boolean']['input']>;
  readonly greater_than: InputMaybe<Scalars['DateTime']['input']>;
  readonly greater_than_equal: InputMaybe<Scalars['DateTime']['input']>;
  readonly less_than: InputMaybe<Scalars['DateTime']['input']>;
  readonly less_than_equal: InputMaybe<Scalars['DateTime']['input']>;
  readonly like: InputMaybe<Scalars['DateTime']['input']>;
  readonly not_equals: InputMaybe<Scalars['DateTime']['input']>;
};

export type Test_Where = {
  readonly AND: InputMaybe<ReadonlyArray<InputMaybe<Test_Where_And>>>;
  readonly OR: InputMaybe<ReadonlyArray<InputMaybe<Test_Where_Or>>>;
  readonly createdAt: InputMaybe<Test_CreatedAt_Operator>;
  readonly description: InputMaybe<Test_Description_Operator>;
  readonly exam: InputMaybe<Test_Exam_Operator>;
  readonly id: InputMaybe<Test_Id_Operator>;
  readonly questions: InputMaybe<Test_Questions_Operator>;
  readonly subjects: InputMaybe<Test_Subjects_Operator>;
  readonly title: InputMaybe<Test_Title_Operator>;
  readonly updatedAt: InputMaybe<Test_UpdatedAt_Operator>;
};

export type Test_Where_And = {
  readonly AND: InputMaybe<ReadonlyArray<InputMaybe<Test_Where_And>>>;
  readonly OR: InputMaybe<ReadonlyArray<InputMaybe<Test_Where_Or>>>;
  readonly createdAt: InputMaybe<Test_CreatedAt_Operator>;
  readonly description: InputMaybe<Test_Description_Operator>;
  readonly exam: InputMaybe<Test_Exam_Operator>;
  readonly id: InputMaybe<Test_Id_Operator>;
  readonly questions: InputMaybe<Test_Questions_Operator>;
  readonly subjects: InputMaybe<Test_Subjects_Operator>;
  readonly title: InputMaybe<Test_Title_Operator>;
  readonly updatedAt: InputMaybe<Test_UpdatedAt_Operator>;
};

export type Test_Where_Or = {
  readonly AND: InputMaybe<ReadonlyArray<InputMaybe<Test_Where_And>>>;
  readonly OR: InputMaybe<ReadonlyArray<InputMaybe<Test_Where_Or>>>;
  readonly createdAt: InputMaybe<Test_CreatedAt_Operator>;
  readonly description: InputMaybe<Test_Description_Operator>;
  readonly exam: InputMaybe<Test_Exam_Operator>;
  readonly id: InputMaybe<Test_Id_Operator>;
  readonly questions: InputMaybe<Test_Questions_Operator>;
  readonly subjects: InputMaybe<Test_Subjects_Operator>;
  readonly title: InputMaybe<Test_Title_Operator>;
  readonly updatedAt: InputMaybe<Test_UpdatedAt_Operator>;
};

export type Tests = {
  readonly __typename?: 'Tests';
  readonly docs: ReadonlyArray<Test>;
  readonly hasNextPage: Scalars['Boolean']['output'];
  readonly hasPrevPage: Scalars['Boolean']['output'];
  readonly limit: Scalars['Int']['output'];
  readonly nextPage: Maybe<Scalars['Int']['output']>;
  readonly offset: Maybe<Scalars['Int']['output']>;
  readonly page: Scalars['Int']['output'];
  readonly pagingCounter: Scalars['Int']['output'];
  readonly prevPage: Maybe<Scalars['Int']['output']>;
  readonly totalDocs: Scalars['Int']['output'];
  readonly totalPages: Scalars['Int']['output'];
};

export type TestsCreateAccess = {
  readonly __typename?: 'TestsCreateAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where: Maybe<Scalars['JSONObject']['output']>;
};

export type TestsCreateDocAccess = {
  readonly __typename?: 'TestsCreateDocAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where: Maybe<Scalars['JSONObject']['output']>;
};

export type TestsDeleteAccess = {
  readonly __typename?: 'TestsDeleteAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where: Maybe<Scalars['JSONObject']['output']>;
};

export type TestsDeleteDocAccess = {
  readonly __typename?: 'TestsDeleteDocAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where: Maybe<Scalars['JSONObject']['output']>;
};

export type TestsDocAccessFields = {
  readonly __typename?: 'TestsDocAccessFields';
  readonly createdAt: Maybe<TestsDocAccessFields_CreatedAt>;
  readonly description: Maybe<TestsDocAccessFields_Description>;
  readonly exam: Maybe<TestsDocAccessFields_Exam>;
  readonly questions: Maybe<TestsDocAccessFields_Questions>;
  readonly subjects: Maybe<TestsDocAccessFields_Subjects>;
  readonly title: Maybe<TestsDocAccessFields_Title>;
  readonly updatedAt: Maybe<TestsDocAccessFields_UpdatedAt>;
};

export type TestsDocAccessFields_CreatedAt = {
  readonly __typename?: 'TestsDocAccessFields_createdAt';
  readonly create: Maybe<TestsDocAccessFields_CreatedAt_Create>;
  readonly delete: Maybe<TestsDocAccessFields_CreatedAt_Delete>;
  readonly read: Maybe<TestsDocAccessFields_CreatedAt_Read>;
  readonly update: Maybe<TestsDocAccessFields_CreatedAt_Update>;
};

export type TestsDocAccessFields_CreatedAt_Create = {
  readonly __typename?: 'TestsDocAccessFields_createdAt_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type TestsDocAccessFields_CreatedAt_Delete = {
  readonly __typename?: 'TestsDocAccessFields_createdAt_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type TestsDocAccessFields_CreatedAt_Read = {
  readonly __typename?: 'TestsDocAccessFields_createdAt_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type TestsDocAccessFields_CreatedAt_Update = {
  readonly __typename?: 'TestsDocAccessFields_createdAt_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type TestsDocAccessFields_Description = {
  readonly __typename?: 'TestsDocAccessFields_description';
  readonly create: Maybe<TestsDocAccessFields_Description_Create>;
  readonly delete: Maybe<TestsDocAccessFields_Description_Delete>;
  readonly read: Maybe<TestsDocAccessFields_Description_Read>;
  readonly update: Maybe<TestsDocAccessFields_Description_Update>;
};

export type TestsDocAccessFields_Description_Create = {
  readonly __typename?: 'TestsDocAccessFields_description_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type TestsDocAccessFields_Description_Delete = {
  readonly __typename?: 'TestsDocAccessFields_description_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type TestsDocAccessFields_Description_Read = {
  readonly __typename?: 'TestsDocAccessFields_description_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type TestsDocAccessFields_Description_Update = {
  readonly __typename?: 'TestsDocAccessFields_description_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type TestsDocAccessFields_Exam = {
  readonly __typename?: 'TestsDocAccessFields_exam';
  readonly create: Maybe<TestsDocAccessFields_Exam_Create>;
  readonly delete: Maybe<TestsDocAccessFields_Exam_Delete>;
  readonly read: Maybe<TestsDocAccessFields_Exam_Read>;
  readonly update: Maybe<TestsDocAccessFields_Exam_Update>;
};

export type TestsDocAccessFields_Exam_Create = {
  readonly __typename?: 'TestsDocAccessFields_exam_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type TestsDocAccessFields_Exam_Delete = {
  readonly __typename?: 'TestsDocAccessFields_exam_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type TestsDocAccessFields_Exam_Read = {
  readonly __typename?: 'TestsDocAccessFields_exam_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type TestsDocAccessFields_Exam_Update = {
  readonly __typename?: 'TestsDocAccessFields_exam_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type TestsDocAccessFields_Questions = {
  readonly __typename?: 'TestsDocAccessFields_questions';
  readonly create: Maybe<TestsDocAccessFields_Questions_Create>;
  readonly delete: Maybe<TestsDocAccessFields_Questions_Delete>;
  readonly read: Maybe<TestsDocAccessFields_Questions_Read>;
  readonly update: Maybe<TestsDocAccessFields_Questions_Update>;
};

export type TestsDocAccessFields_Questions_Create = {
  readonly __typename?: 'TestsDocAccessFields_questions_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type TestsDocAccessFields_Questions_Delete = {
  readonly __typename?: 'TestsDocAccessFields_questions_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type TestsDocAccessFields_Questions_Read = {
  readonly __typename?: 'TestsDocAccessFields_questions_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type TestsDocAccessFields_Questions_Update = {
  readonly __typename?: 'TestsDocAccessFields_questions_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type TestsDocAccessFields_Subjects = {
  readonly __typename?: 'TestsDocAccessFields_subjects';
  readonly create: Maybe<TestsDocAccessFields_Subjects_Create>;
  readonly delete: Maybe<TestsDocAccessFields_Subjects_Delete>;
  readonly read: Maybe<TestsDocAccessFields_Subjects_Read>;
  readonly update: Maybe<TestsDocAccessFields_Subjects_Update>;
};

export type TestsDocAccessFields_Subjects_Create = {
  readonly __typename?: 'TestsDocAccessFields_subjects_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type TestsDocAccessFields_Subjects_Delete = {
  readonly __typename?: 'TestsDocAccessFields_subjects_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type TestsDocAccessFields_Subjects_Read = {
  readonly __typename?: 'TestsDocAccessFields_subjects_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type TestsDocAccessFields_Subjects_Update = {
  readonly __typename?: 'TestsDocAccessFields_subjects_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type TestsDocAccessFields_Title = {
  readonly __typename?: 'TestsDocAccessFields_title';
  readonly create: Maybe<TestsDocAccessFields_Title_Create>;
  readonly delete: Maybe<TestsDocAccessFields_Title_Delete>;
  readonly read: Maybe<TestsDocAccessFields_Title_Read>;
  readonly update: Maybe<TestsDocAccessFields_Title_Update>;
};

export type TestsDocAccessFields_Title_Create = {
  readonly __typename?: 'TestsDocAccessFields_title_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type TestsDocAccessFields_Title_Delete = {
  readonly __typename?: 'TestsDocAccessFields_title_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type TestsDocAccessFields_Title_Read = {
  readonly __typename?: 'TestsDocAccessFields_title_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type TestsDocAccessFields_Title_Update = {
  readonly __typename?: 'TestsDocAccessFields_title_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type TestsDocAccessFields_UpdatedAt = {
  readonly __typename?: 'TestsDocAccessFields_updatedAt';
  readonly create: Maybe<TestsDocAccessFields_UpdatedAt_Create>;
  readonly delete: Maybe<TestsDocAccessFields_UpdatedAt_Delete>;
  readonly read: Maybe<TestsDocAccessFields_UpdatedAt_Read>;
  readonly update: Maybe<TestsDocAccessFields_UpdatedAt_Update>;
};

export type TestsDocAccessFields_UpdatedAt_Create = {
  readonly __typename?: 'TestsDocAccessFields_updatedAt_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type TestsDocAccessFields_UpdatedAt_Delete = {
  readonly __typename?: 'TestsDocAccessFields_updatedAt_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type TestsDocAccessFields_UpdatedAt_Read = {
  readonly __typename?: 'TestsDocAccessFields_updatedAt_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type TestsDocAccessFields_UpdatedAt_Update = {
  readonly __typename?: 'TestsDocAccessFields_updatedAt_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type TestsFields = {
  readonly __typename?: 'TestsFields';
  readonly createdAt: Maybe<TestsFields_CreatedAt>;
  readonly description: Maybe<TestsFields_Description>;
  readonly exam: Maybe<TestsFields_Exam>;
  readonly questions: Maybe<TestsFields_Questions>;
  readonly subjects: Maybe<TestsFields_Subjects>;
  readonly title: Maybe<TestsFields_Title>;
  readonly updatedAt: Maybe<TestsFields_UpdatedAt>;
};

export type TestsFields_CreatedAt = {
  readonly __typename?: 'TestsFields_createdAt';
  readonly create: Maybe<TestsFields_CreatedAt_Create>;
  readonly delete: Maybe<TestsFields_CreatedAt_Delete>;
  readonly read: Maybe<TestsFields_CreatedAt_Read>;
  readonly update: Maybe<TestsFields_CreatedAt_Update>;
};

export type TestsFields_CreatedAt_Create = {
  readonly __typename?: 'TestsFields_createdAt_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type TestsFields_CreatedAt_Delete = {
  readonly __typename?: 'TestsFields_createdAt_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type TestsFields_CreatedAt_Read = {
  readonly __typename?: 'TestsFields_createdAt_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type TestsFields_CreatedAt_Update = {
  readonly __typename?: 'TestsFields_createdAt_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type TestsFields_Description = {
  readonly __typename?: 'TestsFields_description';
  readonly create: Maybe<TestsFields_Description_Create>;
  readonly delete: Maybe<TestsFields_Description_Delete>;
  readonly read: Maybe<TestsFields_Description_Read>;
  readonly update: Maybe<TestsFields_Description_Update>;
};

export type TestsFields_Description_Create = {
  readonly __typename?: 'TestsFields_description_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type TestsFields_Description_Delete = {
  readonly __typename?: 'TestsFields_description_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type TestsFields_Description_Read = {
  readonly __typename?: 'TestsFields_description_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type TestsFields_Description_Update = {
  readonly __typename?: 'TestsFields_description_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type TestsFields_Exam = {
  readonly __typename?: 'TestsFields_exam';
  readonly create: Maybe<TestsFields_Exam_Create>;
  readonly delete: Maybe<TestsFields_Exam_Delete>;
  readonly read: Maybe<TestsFields_Exam_Read>;
  readonly update: Maybe<TestsFields_Exam_Update>;
};

export type TestsFields_Exam_Create = {
  readonly __typename?: 'TestsFields_exam_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type TestsFields_Exam_Delete = {
  readonly __typename?: 'TestsFields_exam_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type TestsFields_Exam_Read = {
  readonly __typename?: 'TestsFields_exam_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type TestsFields_Exam_Update = {
  readonly __typename?: 'TestsFields_exam_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type TestsFields_Questions = {
  readonly __typename?: 'TestsFields_questions';
  readonly create: Maybe<TestsFields_Questions_Create>;
  readonly delete: Maybe<TestsFields_Questions_Delete>;
  readonly read: Maybe<TestsFields_Questions_Read>;
  readonly update: Maybe<TestsFields_Questions_Update>;
};

export type TestsFields_Questions_Create = {
  readonly __typename?: 'TestsFields_questions_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type TestsFields_Questions_Delete = {
  readonly __typename?: 'TestsFields_questions_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type TestsFields_Questions_Read = {
  readonly __typename?: 'TestsFields_questions_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type TestsFields_Questions_Update = {
  readonly __typename?: 'TestsFields_questions_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type TestsFields_Subjects = {
  readonly __typename?: 'TestsFields_subjects';
  readonly create: Maybe<TestsFields_Subjects_Create>;
  readonly delete: Maybe<TestsFields_Subjects_Delete>;
  readonly read: Maybe<TestsFields_Subjects_Read>;
  readonly update: Maybe<TestsFields_Subjects_Update>;
};

export type TestsFields_Subjects_Create = {
  readonly __typename?: 'TestsFields_subjects_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type TestsFields_Subjects_Delete = {
  readonly __typename?: 'TestsFields_subjects_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type TestsFields_Subjects_Read = {
  readonly __typename?: 'TestsFields_subjects_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type TestsFields_Subjects_Update = {
  readonly __typename?: 'TestsFields_subjects_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type TestsFields_Title = {
  readonly __typename?: 'TestsFields_title';
  readonly create: Maybe<TestsFields_Title_Create>;
  readonly delete: Maybe<TestsFields_Title_Delete>;
  readonly read: Maybe<TestsFields_Title_Read>;
  readonly update: Maybe<TestsFields_Title_Update>;
};

export type TestsFields_Title_Create = {
  readonly __typename?: 'TestsFields_title_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type TestsFields_Title_Delete = {
  readonly __typename?: 'TestsFields_title_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type TestsFields_Title_Read = {
  readonly __typename?: 'TestsFields_title_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type TestsFields_Title_Update = {
  readonly __typename?: 'TestsFields_title_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type TestsFields_UpdatedAt = {
  readonly __typename?: 'TestsFields_updatedAt';
  readonly create: Maybe<TestsFields_UpdatedAt_Create>;
  readonly delete: Maybe<TestsFields_UpdatedAt_Delete>;
  readonly read: Maybe<TestsFields_UpdatedAt_Read>;
  readonly update: Maybe<TestsFields_UpdatedAt_Update>;
};

export type TestsFields_UpdatedAt_Create = {
  readonly __typename?: 'TestsFields_updatedAt_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type TestsFields_UpdatedAt_Delete = {
  readonly __typename?: 'TestsFields_updatedAt_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type TestsFields_UpdatedAt_Read = {
  readonly __typename?: 'TestsFields_updatedAt_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type TestsFields_UpdatedAt_Update = {
  readonly __typename?: 'TestsFields_updatedAt_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type TestsReadAccess = {
  readonly __typename?: 'TestsReadAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where: Maybe<Scalars['JSONObject']['output']>;
};

export type TestsReadDocAccess = {
  readonly __typename?: 'TestsReadDocAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where: Maybe<Scalars['JSONObject']['output']>;
};

export type TestsUpdateAccess = {
  readonly __typename?: 'TestsUpdateAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where: Maybe<Scalars['JSONObject']['output']>;
};

export type TestsUpdateDocAccess = {
  readonly __typename?: 'TestsUpdateDocAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where: Maybe<Scalars['JSONObject']['output']>;
};

export type User = {
  readonly __typename?: 'User';
  readonly avatar: Maybe<Media>;
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly email: Scalars['EmailAddress']['output'];
  readonly id: Scalars['Int']['output'];
  readonly isVerified: Maybe<Scalars['Boolean']['output']>;
  readonly name: Maybe<Scalars['String']['output']>;
  readonly password: Scalars['String']['output'];
  readonly role: User_Role;
  readonly signupMethod: User_SignupMethod;
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
};


export type UserAvatarArgs = {
  fallbackLocale: InputMaybe<FallbackLocaleInputType>;
  locale: InputMaybe<LocaleInputType>;
};

export type UserUpdate_Role_MutationInput =
  | 'admin'
  | 'user';

export type UserUpdate_SignupMethod_MutationInput =
  | 'email'
  | 'google'
  | 'yandex';

export type User_Avatar_Operator = {
  readonly all: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']['input']>>>;
  readonly equals: InputMaybe<Scalars['JSON']['input']>;
  readonly exists: InputMaybe<Scalars['Boolean']['input']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']['input']>>>;
  readonly not_equals: InputMaybe<Scalars['JSON']['input']>;
  readonly not_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']['input']>>>;
};

export type User_CreatedAt_Operator = {
  readonly equals: InputMaybe<Scalars['DateTime']['input']>;
  readonly exists: InputMaybe<Scalars['Boolean']['input']>;
  readonly greater_than: InputMaybe<Scalars['DateTime']['input']>;
  readonly greater_than_equal: InputMaybe<Scalars['DateTime']['input']>;
  readonly less_than: InputMaybe<Scalars['DateTime']['input']>;
  readonly less_than_equal: InputMaybe<Scalars['DateTime']['input']>;
  readonly like: InputMaybe<Scalars['DateTime']['input']>;
  readonly not_equals: InputMaybe<Scalars['DateTime']['input']>;
};

export type User_Email_Operator = {
  readonly all: InputMaybe<ReadonlyArray<InputMaybe<Scalars['EmailAddress']['input']>>>;
  readonly contains: InputMaybe<Scalars['EmailAddress']['input']>;
  readonly equals: InputMaybe<Scalars['EmailAddress']['input']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['EmailAddress']['input']>>>;
  readonly like: InputMaybe<Scalars['EmailAddress']['input']>;
  readonly not_equals: InputMaybe<Scalars['EmailAddress']['input']>;
  readonly not_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['EmailAddress']['input']>>>;
};

export type User_Id_Operator = {
  readonly equals: InputMaybe<Scalars['Int']['input']>;
  readonly exists: InputMaybe<Scalars['Boolean']['input']>;
  readonly greater_than: InputMaybe<Scalars['Int']['input']>;
  readonly greater_than_equal: InputMaybe<Scalars['Int']['input']>;
  readonly less_than: InputMaybe<Scalars['Int']['input']>;
  readonly less_than_equal: InputMaybe<Scalars['Int']['input']>;
  readonly not_equals: InputMaybe<Scalars['Int']['input']>;
};

export type User_IsVerified_Operator = {
  readonly equals: InputMaybe<Scalars['Boolean']['input']>;
  readonly exists: InputMaybe<Scalars['Boolean']['input']>;
  readonly not_equals: InputMaybe<Scalars['Boolean']['input']>;
};

export type User_Name_Operator = {
  readonly all: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly contains: InputMaybe<Scalars['String']['input']>;
  readonly equals: InputMaybe<Scalars['String']['input']>;
  readonly exists: InputMaybe<Scalars['Boolean']['input']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly like: InputMaybe<Scalars['String']['input']>;
  readonly not_equals: InputMaybe<Scalars['String']['input']>;
  readonly not_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type User_Password_Operator = {
  readonly all: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly contains: InputMaybe<Scalars['String']['input']>;
  readonly equals: InputMaybe<Scalars['String']['input']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly like: InputMaybe<Scalars['String']['input']>;
  readonly not_equals: InputMaybe<Scalars['String']['input']>;
  readonly not_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type User_Role =
  | 'admin'
  | 'user';

export type User_Role_Input =
  | 'admin'
  | 'user';

export type User_Role_MutationInput =
  | 'admin'
  | 'user';

export type User_Role_Operator = {
  readonly all: InputMaybe<ReadonlyArray<InputMaybe<User_Role_Input>>>;
  readonly equals: InputMaybe<User_Role_Input>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<User_Role_Input>>>;
  readonly not_equals: InputMaybe<User_Role_Input>;
  readonly not_in: InputMaybe<ReadonlyArray<InputMaybe<User_Role_Input>>>;
};

export type User_SignupMethod =
  | 'email'
  | 'google'
  | 'yandex';

export type User_SignupMethod_Input =
  | 'email'
  | 'google'
  | 'yandex';

export type User_SignupMethod_MutationInput =
  | 'email'
  | 'google'
  | 'yandex';

export type User_SignupMethod_Operator = {
  readonly all: InputMaybe<ReadonlyArray<InputMaybe<User_SignupMethod_Input>>>;
  readonly equals: InputMaybe<User_SignupMethod_Input>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<User_SignupMethod_Input>>>;
  readonly not_equals: InputMaybe<User_SignupMethod_Input>;
  readonly not_in: InputMaybe<ReadonlyArray<InputMaybe<User_SignupMethod_Input>>>;
};

export type User_UpdatedAt_Operator = {
  readonly equals: InputMaybe<Scalars['DateTime']['input']>;
  readonly exists: InputMaybe<Scalars['Boolean']['input']>;
  readonly greater_than: InputMaybe<Scalars['DateTime']['input']>;
  readonly greater_than_equal: InputMaybe<Scalars['DateTime']['input']>;
  readonly less_than: InputMaybe<Scalars['DateTime']['input']>;
  readonly less_than_equal: InputMaybe<Scalars['DateTime']['input']>;
  readonly like: InputMaybe<Scalars['DateTime']['input']>;
  readonly not_equals: InputMaybe<Scalars['DateTime']['input']>;
};

export type User_Where = {
  readonly AND: InputMaybe<ReadonlyArray<InputMaybe<User_Where_And>>>;
  readonly OR: InputMaybe<ReadonlyArray<InputMaybe<User_Where_Or>>>;
  readonly avatar: InputMaybe<User_Avatar_Operator>;
  readonly createdAt: InputMaybe<User_CreatedAt_Operator>;
  readonly email: InputMaybe<User_Email_Operator>;
  readonly id: InputMaybe<User_Id_Operator>;
  readonly isVerified: InputMaybe<User_IsVerified_Operator>;
  readonly name: InputMaybe<User_Name_Operator>;
  readonly password: InputMaybe<User_Password_Operator>;
  readonly role: InputMaybe<User_Role_Operator>;
  readonly signupMethod: InputMaybe<User_SignupMethod_Operator>;
  readonly updatedAt: InputMaybe<User_UpdatedAt_Operator>;
};

export type User_Where_And = {
  readonly AND: InputMaybe<ReadonlyArray<InputMaybe<User_Where_And>>>;
  readonly OR: InputMaybe<ReadonlyArray<InputMaybe<User_Where_Or>>>;
  readonly avatar: InputMaybe<User_Avatar_Operator>;
  readonly createdAt: InputMaybe<User_CreatedAt_Operator>;
  readonly email: InputMaybe<User_Email_Operator>;
  readonly id: InputMaybe<User_Id_Operator>;
  readonly isVerified: InputMaybe<User_IsVerified_Operator>;
  readonly name: InputMaybe<User_Name_Operator>;
  readonly password: InputMaybe<User_Password_Operator>;
  readonly role: InputMaybe<User_Role_Operator>;
  readonly signupMethod: InputMaybe<User_SignupMethod_Operator>;
  readonly updatedAt: InputMaybe<User_UpdatedAt_Operator>;
};

export type User_Where_Or = {
  readonly AND: InputMaybe<ReadonlyArray<InputMaybe<User_Where_And>>>;
  readonly OR: InputMaybe<ReadonlyArray<InputMaybe<User_Where_Or>>>;
  readonly avatar: InputMaybe<User_Avatar_Operator>;
  readonly createdAt: InputMaybe<User_CreatedAt_Operator>;
  readonly email: InputMaybe<User_Email_Operator>;
  readonly id: InputMaybe<User_Id_Operator>;
  readonly isVerified: InputMaybe<User_IsVerified_Operator>;
  readonly name: InputMaybe<User_Name_Operator>;
  readonly password: InputMaybe<User_Password_Operator>;
  readonly role: InputMaybe<User_Role_Operator>;
  readonly signupMethod: InputMaybe<User_SignupMethod_Operator>;
  readonly updatedAt: InputMaybe<User_UpdatedAt_Operator>;
};

export type Users = {
  readonly __typename?: 'Users';
  readonly docs: ReadonlyArray<User>;
  readonly hasNextPage: Scalars['Boolean']['output'];
  readonly hasPrevPage: Scalars['Boolean']['output'];
  readonly limit: Scalars['Int']['output'];
  readonly nextPage: Maybe<Scalars['Int']['output']>;
  readonly offset: Maybe<Scalars['Int']['output']>;
  readonly page: Scalars['Int']['output'];
  readonly pagingCounter: Scalars['Int']['output'];
  readonly prevPage: Maybe<Scalars['Int']['output']>;
  readonly totalDocs: Scalars['Int']['output'];
  readonly totalPages: Scalars['Int']['output'];
};

export type UsersCreateAccess = {
  readonly __typename?: 'UsersCreateAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersCreateDocAccess = {
  readonly __typename?: 'UsersCreateDocAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersDeleteAccess = {
  readonly __typename?: 'UsersDeleteAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersDeleteDocAccess = {
  readonly __typename?: 'UsersDeleteDocAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersDocAccessFields = {
  readonly __typename?: 'UsersDocAccessFields';
  readonly avatar: Maybe<UsersDocAccessFields_Avatar>;
  readonly createdAt: Maybe<UsersDocAccessFields_CreatedAt>;
  readonly email: Maybe<UsersDocAccessFields_Email>;
  readonly isVerified: Maybe<UsersDocAccessFields_IsVerified>;
  readonly name: Maybe<UsersDocAccessFields_Name>;
  readonly password: Maybe<UsersDocAccessFields_Password>;
  readonly role: Maybe<UsersDocAccessFields_Role>;
  readonly signupMethod: Maybe<UsersDocAccessFields_SignupMethod>;
  readonly updatedAt: Maybe<UsersDocAccessFields_UpdatedAt>;
};

export type UsersDocAccessFields_Avatar = {
  readonly __typename?: 'UsersDocAccessFields_avatar';
  readonly create: Maybe<UsersDocAccessFields_Avatar_Create>;
  readonly delete: Maybe<UsersDocAccessFields_Avatar_Delete>;
  readonly read: Maybe<UsersDocAccessFields_Avatar_Read>;
  readonly update: Maybe<UsersDocAccessFields_Avatar_Update>;
};

export type UsersDocAccessFields_Avatar_Create = {
  readonly __typename?: 'UsersDocAccessFields_avatar_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Avatar_Delete = {
  readonly __typename?: 'UsersDocAccessFields_avatar_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Avatar_Read = {
  readonly __typename?: 'UsersDocAccessFields_avatar_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Avatar_Update = {
  readonly __typename?: 'UsersDocAccessFields_avatar_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_CreatedAt = {
  readonly __typename?: 'UsersDocAccessFields_createdAt';
  readonly create: Maybe<UsersDocAccessFields_CreatedAt_Create>;
  readonly delete: Maybe<UsersDocAccessFields_CreatedAt_Delete>;
  readonly read: Maybe<UsersDocAccessFields_CreatedAt_Read>;
  readonly update: Maybe<UsersDocAccessFields_CreatedAt_Update>;
};

export type UsersDocAccessFields_CreatedAt_Create = {
  readonly __typename?: 'UsersDocAccessFields_createdAt_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_CreatedAt_Delete = {
  readonly __typename?: 'UsersDocAccessFields_createdAt_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_CreatedAt_Read = {
  readonly __typename?: 'UsersDocAccessFields_createdAt_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_CreatedAt_Update = {
  readonly __typename?: 'UsersDocAccessFields_createdAt_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Email = {
  readonly __typename?: 'UsersDocAccessFields_email';
  readonly create: Maybe<UsersDocAccessFields_Email_Create>;
  readonly delete: Maybe<UsersDocAccessFields_Email_Delete>;
  readonly read: Maybe<UsersDocAccessFields_Email_Read>;
  readonly update: Maybe<UsersDocAccessFields_Email_Update>;
};

export type UsersDocAccessFields_Email_Create = {
  readonly __typename?: 'UsersDocAccessFields_email_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Email_Delete = {
  readonly __typename?: 'UsersDocAccessFields_email_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Email_Read = {
  readonly __typename?: 'UsersDocAccessFields_email_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Email_Update = {
  readonly __typename?: 'UsersDocAccessFields_email_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_IsVerified = {
  readonly __typename?: 'UsersDocAccessFields_isVerified';
  readonly create: Maybe<UsersDocAccessFields_IsVerified_Create>;
  readonly delete: Maybe<UsersDocAccessFields_IsVerified_Delete>;
  readonly read: Maybe<UsersDocAccessFields_IsVerified_Read>;
  readonly update: Maybe<UsersDocAccessFields_IsVerified_Update>;
};

export type UsersDocAccessFields_IsVerified_Create = {
  readonly __typename?: 'UsersDocAccessFields_isVerified_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_IsVerified_Delete = {
  readonly __typename?: 'UsersDocAccessFields_isVerified_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_IsVerified_Read = {
  readonly __typename?: 'UsersDocAccessFields_isVerified_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_IsVerified_Update = {
  readonly __typename?: 'UsersDocAccessFields_isVerified_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Name = {
  readonly __typename?: 'UsersDocAccessFields_name';
  readonly create: Maybe<UsersDocAccessFields_Name_Create>;
  readonly delete: Maybe<UsersDocAccessFields_Name_Delete>;
  readonly read: Maybe<UsersDocAccessFields_Name_Read>;
  readonly update: Maybe<UsersDocAccessFields_Name_Update>;
};

export type UsersDocAccessFields_Name_Create = {
  readonly __typename?: 'UsersDocAccessFields_name_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Name_Delete = {
  readonly __typename?: 'UsersDocAccessFields_name_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Name_Read = {
  readonly __typename?: 'UsersDocAccessFields_name_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Name_Update = {
  readonly __typename?: 'UsersDocAccessFields_name_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Password = {
  readonly __typename?: 'UsersDocAccessFields_password';
  readonly create: Maybe<UsersDocAccessFields_Password_Create>;
  readonly delete: Maybe<UsersDocAccessFields_Password_Delete>;
  readonly read: Maybe<UsersDocAccessFields_Password_Read>;
  readonly update: Maybe<UsersDocAccessFields_Password_Update>;
};

export type UsersDocAccessFields_Password_Create = {
  readonly __typename?: 'UsersDocAccessFields_password_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Password_Delete = {
  readonly __typename?: 'UsersDocAccessFields_password_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Password_Read = {
  readonly __typename?: 'UsersDocAccessFields_password_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Password_Update = {
  readonly __typename?: 'UsersDocAccessFields_password_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Role = {
  readonly __typename?: 'UsersDocAccessFields_role';
  readonly create: Maybe<UsersDocAccessFields_Role_Create>;
  readonly delete: Maybe<UsersDocAccessFields_Role_Delete>;
  readonly read: Maybe<UsersDocAccessFields_Role_Read>;
  readonly update: Maybe<UsersDocAccessFields_Role_Update>;
};

export type UsersDocAccessFields_Role_Create = {
  readonly __typename?: 'UsersDocAccessFields_role_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Role_Delete = {
  readonly __typename?: 'UsersDocAccessFields_role_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Role_Read = {
  readonly __typename?: 'UsersDocAccessFields_role_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Role_Update = {
  readonly __typename?: 'UsersDocAccessFields_role_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_SignupMethod = {
  readonly __typename?: 'UsersDocAccessFields_signupMethod';
  readonly create: Maybe<UsersDocAccessFields_SignupMethod_Create>;
  readonly delete: Maybe<UsersDocAccessFields_SignupMethod_Delete>;
  readonly read: Maybe<UsersDocAccessFields_SignupMethod_Read>;
  readonly update: Maybe<UsersDocAccessFields_SignupMethod_Update>;
};

export type UsersDocAccessFields_SignupMethod_Create = {
  readonly __typename?: 'UsersDocAccessFields_signupMethod_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_SignupMethod_Delete = {
  readonly __typename?: 'UsersDocAccessFields_signupMethod_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_SignupMethod_Read = {
  readonly __typename?: 'UsersDocAccessFields_signupMethod_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_SignupMethod_Update = {
  readonly __typename?: 'UsersDocAccessFields_signupMethod_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_UpdatedAt = {
  readonly __typename?: 'UsersDocAccessFields_updatedAt';
  readonly create: Maybe<UsersDocAccessFields_UpdatedAt_Create>;
  readonly delete: Maybe<UsersDocAccessFields_UpdatedAt_Delete>;
  readonly read: Maybe<UsersDocAccessFields_UpdatedAt_Read>;
  readonly update: Maybe<UsersDocAccessFields_UpdatedAt_Update>;
};

export type UsersDocAccessFields_UpdatedAt_Create = {
  readonly __typename?: 'UsersDocAccessFields_updatedAt_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_UpdatedAt_Delete = {
  readonly __typename?: 'UsersDocAccessFields_updatedAt_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_UpdatedAt_Read = {
  readonly __typename?: 'UsersDocAccessFields_updatedAt_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_UpdatedAt_Update = {
  readonly __typename?: 'UsersDocAccessFields_updatedAt_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type UsersFields = {
  readonly __typename?: 'UsersFields';
  readonly avatar: Maybe<UsersFields_Avatar>;
  readonly createdAt: Maybe<UsersFields_CreatedAt>;
  readonly email: Maybe<UsersFields_Email>;
  readonly isVerified: Maybe<UsersFields_IsVerified>;
  readonly name: Maybe<UsersFields_Name>;
  readonly password: Maybe<UsersFields_Password>;
  readonly role: Maybe<UsersFields_Role>;
  readonly signupMethod: Maybe<UsersFields_SignupMethod>;
  readonly updatedAt: Maybe<UsersFields_UpdatedAt>;
};

export type UsersFields_Avatar = {
  readonly __typename?: 'UsersFields_avatar';
  readonly create: Maybe<UsersFields_Avatar_Create>;
  readonly delete: Maybe<UsersFields_Avatar_Delete>;
  readonly read: Maybe<UsersFields_Avatar_Read>;
  readonly update: Maybe<UsersFields_Avatar_Update>;
};

export type UsersFields_Avatar_Create = {
  readonly __typename?: 'UsersFields_avatar_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type UsersFields_Avatar_Delete = {
  readonly __typename?: 'UsersFields_avatar_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type UsersFields_Avatar_Read = {
  readonly __typename?: 'UsersFields_avatar_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type UsersFields_Avatar_Update = {
  readonly __typename?: 'UsersFields_avatar_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type UsersFields_CreatedAt = {
  readonly __typename?: 'UsersFields_createdAt';
  readonly create: Maybe<UsersFields_CreatedAt_Create>;
  readonly delete: Maybe<UsersFields_CreatedAt_Delete>;
  readonly read: Maybe<UsersFields_CreatedAt_Read>;
  readonly update: Maybe<UsersFields_CreatedAt_Update>;
};

export type UsersFields_CreatedAt_Create = {
  readonly __typename?: 'UsersFields_createdAt_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type UsersFields_CreatedAt_Delete = {
  readonly __typename?: 'UsersFields_createdAt_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type UsersFields_CreatedAt_Read = {
  readonly __typename?: 'UsersFields_createdAt_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type UsersFields_CreatedAt_Update = {
  readonly __typename?: 'UsersFields_createdAt_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type UsersFields_Email = {
  readonly __typename?: 'UsersFields_email';
  readonly create: Maybe<UsersFields_Email_Create>;
  readonly delete: Maybe<UsersFields_Email_Delete>;
  readonly read: Maybe<UsersFields_Email_Read>;
  readonly update: Maybe<UsersFields_Email_Update>;
};

export type UsersFields_Email_Create = {
  readonly __typename?: 'UsersFields_email_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type UsersFields_Email_Delete = {
  readonly __typename?: 'UsersFields_email_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type UsersFields_Email_Read = {
  readonly __typename?: 'UsersFields_email_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type UsersFields_Email_Update = {
  readonly __typename?: 'UsersFields_email_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type UsersFields_IsVerified = {
  readonly __typename?: 'UsersFields_isVerified';
  readonly create: Maybe<UsersFields_IsVerified_Create>;
  readonly delete: Maybe<UsersFields_IsVerified_Delete>;
  readonly read: Maybe<UsersFields_IsVerified_Read>;
  readonly update: Maybe<UsersFields_IsVerified_Update>;
};

export type UsersFields_IsVerified_Create = {
  readonly __typename?: 'UsersFields_isVerified_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type UsersFields_IsVerified_Delete = {
  readonly __typename?: 'UsersFields_isVerified_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type UsersFields_IsVerified_Read = {
  readonly __typename?: 'UsersFields_isVerified_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type UsersFields_IsVerified_Update = {
  readonly __typename?: 'UsersFields_isVerified_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type UsersFields_Name = {
  readonly __typename?: 'UsersFields_name';
  readonly create: Maybe<UsersFields_Name_Create>;
  readonly delete: Maybe<UsersFields_Name_Delete>;
  readonly read: Maybe<UsersFields_Name_Read>;
  readonly update: Maybe<UsersFields_Name_Update>;
};

export type UsersFields_Name_Create = {
  readonly __typename?: 'UsersFields_name_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type UsersFields_Name_Delete = {
  readonly __typename?: 'UsersFields_name_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type UsersFields_Name_Read = {
  readonly __typename?: 'UsersFields_name_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type UsersFields_Name_Update = {
  readonly __typename?: 'UsersFields_name_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type UsersFields_Password = {
  readonly __typename?: 'UsersFields_password';
  readonly create: Maybe<UsersFields_Password_Create>;
  readonly delete: Maybe<UsersFields_Password_Delete>;
  readonly read: Maybe<UsersFields_Password_Read>;
  readonly update: Maybe<UsersFields_Password_Update>;
};

export type UsersFields_Password_Create = {
  readonly __typename?: 'UsersFields_password_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type UsersFields_Password_Delete = {
  readonly __typename?: 'UsersFields_password_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type UsersFields_Password_Read = {
  readonly __typename?: 'UsersFields_password_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type UsersFields_Password_Update = {
  readonly __typename?: 'UsersFields_password_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type UsersFields_Role = {
  readonly __typename?: 'UsersFields_role';
  readonly create: Maybe<UsersFields_Role_Create>;
  readonly delete: Maybe<UsersFields_Role_Delete>;
  readonly read: Maybe<UsersFields_Role_Read>;
  readonly update: Maybe<UsersFields_Role_Update>;
};

export type UsersFields_Role_Create = {
  readonly __typename?: 'UsersFields_role_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type UsersFields_Role_Delete = {
  readonly __typename?: 'UsersFields_role_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type UsersFields_Role_Read = {
  readonly __typename?: 'UsersFields_role_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type UsersFields_Role_Update = {
  readonly __typename?: 'UsersFields_role_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type UsersFields_SignupMethod = {
  readonly __typename?: 'UsersFields_signupMethod';
  readonly create: Maybe<UsersFields_SignupMethod_Create>;
  readonly delete: Maybe<UsersFields_SignupMethod_Delete>;
  readonly read: Maybe<UsersFields_SignupMethod_Read>;
  readonly update: Maybe<UsersFields_SignupMethod_Update>;
};

export type UsersFields_SignupMethod_Create = {
  readonly __typename?: 'UsersFields_signupMethod_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type UsersFields_SignupMethod_Delete = {
  readonly __typename?: 'UsersFields_signupMethod_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type UsersFields_SignupMethod_Read = {
  readonly __typename?: 'UsersFields_signupMethod_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type UsersFields_SignupMethod_Update = {
  readonly __typename?: 'UsersFields_signupMethod_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type UsersFields_UpdatedAt = {
  readonly __typename?: 'UsersFields_updatedAt';
  readonly create: Maybe<UsersFields_UpdatedAt_Create>;
  readonly delete: Maybe<UsersFields_UpdatedAt_Delete>;
  readonly read: Maybe<UsersFields_UpdatedAt_Read>;
  readonly update: Maybe<UsersFields_UpdatedAt_Update>;
};

export type UsersFields_UpdatedAt_Create = {
  readonly __typename?: 'UsersFields_updatedAt_Create';
  readonly permission: Scalars['Boolean']['output'];
};

export type UsersFields_UpdatedAt_Delete = {
  readonly __typename?: 'UsersFields_updatedAt_Delete';
  readonly permission: Scalars['Boolean']['output'];
};

export type UsersFields_UpdatedAt_Read = {
  readonly __typename?: 'UsersFields_updatedAt_Read';
  readonly permission: Scalars['Boolean']['output'];
};

export type UsersFields_UpdatedAt_Update = {
  readonly __typename?: 'UsersFields_updatedAt_Update';
  readonly permission: Scalars['Boolean']['output'];
};

export type UsersReadAccess = {
  readonly __typename?: 'UsersReadAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersReadDocAccess = {
  readonly __typename?: 'UsersReadDocAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersUpdateAccess = {
  readonly __typename?: 'UsersUpdateAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersUpdateDocAccess = {
  readonly __typename?: 'UsersUpdateDocAccess';
  readonly permission: Scalars['Boolean']['output'];
  readonly where: Maybe<Scalars['JSONObject']['output']>;
};

export type AdminsAccess = {
  readonly __typename?: 'adminsAccess';
  readonly create: Maybe<AdminsCreateAccess>;
  readonly delete: Maybe<AdminsDeleteAccess>;
  readonly fields: Maybe<AdminsFields>;
  readonly read: Maybe<AdminsReadAccess>;
  readonly unlock: Maybe<AdminsUnlockAccess>;
  readonly update: Maybe<AdminsUpdateAccess>;
};

export type AdminsDocAccess = {
  readonly __typename?: 'adminsDocAccess';
  readonly create: Maybe<AdminsCreateDocAccess>;
  readonly delete: Maybe<AdminsDeleteDocAccess>;
  readonly fields: Maybe<AdminsDocAccessFields>;
  readonly read: Maybe<AdminsReadDocAccess>;
  readonly unlock: Maybe<AdminsUnlockDocAccess>;
  readonly update: Maybe<AdminsUpdateDocAccess>;
};

export type AdminsJwt = {
  readonly __typename?: 'adminsJWT';
  readonly collection: Scalars['String']['output'];
  readonly email: Scalars['EmailAddress']['output'];
};

export type AdminsLoginResult = {
  readonly __typename?: 'adminsLoginResult';
  readonly exp: Maybe<Scalars['Int']['output']>;
  readonly token: Maybe<Scalars['String']['output']>;
  readonly user: Maybe<Admin>;
};

export type AdminsMe = {
  readonly __typename?: 'adminsMe';
  readonly collection: Maybe<Scalars['String']['output']>;
  readonly exp: Maybe<Scalars['Int']['output']>;
  readonly strategy: Maybe<Scalars['String']['output']>;
  readonly token: Maybe<Scalars['String']['output']>;
  readonly user: Maybe<Admin>;
};

export type AdminsRefreshedAdmin = {
  readonly __typename?: 'adminsRefreshedAdmin';
  readonly exp: Maybe<Scalars['Int']['output']>;
  readonly refreshedToken: Maybe<Scalars['String']['output']>;
  readonly strategy: Maybe<Scalars['String']['output']>;
  readonly user: Maybe<AdminsJwt>;
};

export type AdminsResetPassword = {
  readonly __typename?: 'adminsResetPassword';
  readonly token: Maybe<Scalars['String']['output']>;
  readonly user: Maybe<Admin>;
};

export type AllMedia = {
  readonly __typename?: 'allMedia';
  readonly docs: ReadonlyArray<Media>;
  readonly hasNextPage: Scalars['Boolean']['output'];
  readonly hasPrevPage: Scalars['Boolean']['output'];
  readonly limit: Scalars['Int']['output'];
  readonly nextPage: Maybe<Scalars['Int']['output']>;
  readonly offset: Maybe<Scalars['Int']['output']>;
  readonly page: Scalars['Int']['output'];
  readonly pagingCounter: Scalars['Int']['output'];
  readonly prevPage: Maybe<Scalars['Int']['output']>;
  readonly totalDocs: Scalars['Int']['output'];
  readonly totalPages: Scalars['Int']['output'];
};

export type CountAdmins = {
  readonly __typename?: 'countAdmins';
  readonly totalDocs: Maybe<Scalars['Int']['output']>;
};

export type CountCourses = {
  readonly __typename?: 'countCourses';
  readonly totalDocs: Maybe<Scalars['Int']['output']>;
};

export type CountExams = {
  readonly __typename?: 'countExams';
  readonly totalDocs: Maybe<Scalars['Int']['output']>;
};

export type CountFaqs = {
  readonly __typename?: 'countFaqs';
  readonly totalDocs: Maybe<Scalars['Int']['output']>;
};

export type CountPayloadLockedDocuments = {
  readonly __typename?: 'countPayloadLockedDocuments';
  readonly totalDocs: Maybe<Scalars['Int']['output']>;
};

export type CountPayloadPreferences = {
  readonly __typename?: 'countPayloadPreferences';
  readonly totalDocs: Maybe<Scalars['Int']['output']>;
};

export type CountPosts = {
  readonly __typename?: 'countPosts';
  readonly totalDocs: Maybe<Scalars['Int']['output']>;
};

export type CountPurchases = {
  readonly __typename?: 'countPurchases';
  readonly totalDocs: Maybe<Scalars['Int']['output']>;
};

export type CountQuestions = {
  readonly __typename?: 'countQuestions';
  readonly totalDocs: Maybe<Scalars['Int']['output']>;
};

export type CountRecomendations = {
  readonly __typename?: 'countRecomendations';
  readonly totalDocs: Maybe<Scalars['Int']['output']>;
};

export type CountSubjects = {
  readonly __typename?: 'countSubjects';
  readonly totalDocs: Maybe<Scalars['Int']['output']>;
};

export type CountTariffs = {
  readonly __typename?: 'countTariffs';
  readonly totalDocs: Maybe<Scalars['Int']['output']>;
};

export type CountTestResults = {
  readonly __typename?: 'countTestResults';
  readonly totalDocs: Maybe<Scalars['Int']['output']>;
};

export type CountTests = {
  readonly __typename?: 'countTests';
  readonly totalDocs: Maybe<Scalars['Int']['output']>;
};

export type CountUsers = {
  readonly __typename?: 'countUsers';
  readonly totalDocs: Maybe<Scalars['Int']['output']>;
};

export type CountallMedia = {
  readonly __typename?: 'countallMedia';
  readonly totalDocs: Maybe<Scalars['Int']['output']>;
};

export type CoursesAccess = {
  readonly __typename?: 'coursesAccess';
  readonly create: Maybe<CoursesCreateAccess>;
  readonly delete: Maybe<CoursesDeleteAccess>;
  readonly fields: Maybe<CoursesFields>;
  readonly read: Maybe<CoursesReadAccess>;
  readonly update: Maybe<CoursesUpdateAccess>;
};

export type CoursesDocAccess = {
  readonly __typename?: 'coursesDocAccess';
  readonly create: Maybe<CoursesCreateDocAccess>;
  readonly delete: Maybe<CoursesDeleteDocAccess>;
  readonly fields: Maybe<CoursesDocAccessFields>;
  readonly read: Maybe<CoursesReadDocAccess>;
  readonly update: Maybe<CoursesUpdateDocAccess>;
};

export type ExamsAccess = {
  readonly __typename?: 'examsAccess';
  readonly create: Maybe<ExamsCreateAccess>;
  readonly delete: Maybe<ExamsDeleteAccess>;
  readonly fields: Maybe<ExamsFields>;
  readonly read: Maybe<ExamsReadAccess>;
  readonly update: Maybe<ExamsUpdateAccess>;
};

export type ExamsDocAccess = {
  readonly __typename?: 'examsDocAccess';
  readonly create: Maybe<ExamsCreateDocAccess>;
  readonly delete: Maybe<ExamsDeleteDocAccess>;
  readonly fields: Maybe<ExamsDocAccessFields>;
  readonly read: Maybe<ExamsReadDocAccess>;
  readonly update: Maybe<ExamsUpdateDocAccess>;
};

export type FaqsAccess = {
  readonly __typename?: 'faqsAccess';
  readonly create: Maybe<FaqsCreateAccess>;
  readonly delete: Maybe<FaqsDeleteAccess>;
  readonly fields: Maybe<FaqsFields>;
  readonly read: Maybe<FaqsReadAccess>;
  readonly update: Maybe<FaqsUpdateAccess>;
};

export type FaqsDocAccess = {
  readonly __typename?: 'faqsDocAccess';
  readonly create: Maybe<FaqsCreateDocAccess>;
  readonly delete: Maybe<FaqsDeleteDocAccess>;
  readonly fields: Maybe<FaqsDocAccessFields>;
  readonly read: Maybe<FaqsReadDocAccess>;
  readonly update: Maybe<FaqsUpdateDocAccess>;
};

export type HomePageAccess = {
  readonly __typename?: 'homePageAccess';
  readonly fields: Maybe<HomePageFields>;
  readonly read: Maybe<HomePageReadAccess>;
  readonly update: Maybe<HomePageUpdateAccess>;
};

export type HomePageDocAccess = {
  readonly __typename?: 'homePageDocAccess';
  readonly fields: Maybe<HomePageDocAccessFields>;
  readonly read: Maybe<HomePageReadDocAccess>;
  readonly update: Maybe<HomePageUpdateDocAccess>;
};

export type MediaAccess = {
  readonly __typename?: 'mediaAccess';
  readonly create: Maybe<MediaCreateAccess>;
  readonly delete: Maybe<MediaDeleteAccess>;
  readonly fields: Maybe<MediaFields>;
  readonly read: Maybe<MediaReadAccess>;
  readonly update: Maybe<MediaUpdateAccess>;
};

export type MediaDocAccess = {
  readonly __typename?: 'mediaDocAccess';
  readonly create: Maybe<MediaCreateDocAccess>;
  readonly delete: Maybe<MediaDeleteDocAccess>;
  readonly fields: Maybe<MediaDocAccessFields>;
  readonly read: Maybe<MediaReadDocAccess>;
  readonly update: Maybe<MediaUpdateDocAccess>;
};

export type MutationAdminInput = {
  readonly createdAt: InputMaybe<Scalars['String']['input']>;
  readonly email: Scalars['String']['input'];
  readonly hash: InputMaybe<Scalars['String']['input']>;
  readonly lockUntil: InputMaybe<Scalars['String']['input']>;
  readonly loginAttempts: InputMaybe<Scalars['Float']['input']>;
  readonly password: Scalars['String']['input'];
  readonly resetPasswordExpiration: InputMaybe<Scalars['String']['input']>;
  readonly resetPasswordToken: InputMaybe<Scalars['String']['input']>;
  readonly role: Admin_Role_MutationInput;
  readonly salt: InputMaybe<Scalars['String']['input']>;
  readonly updatedAt: InputMaybe<Scalars['String']['input']>;
};

export type MutationAdminUpdateInput = {
  readonly createdAt: InputMaybe<Scalars['String']['input']>;
  readonly email: InputMaybe<Scalars['String']['input']>;
  readonly hash: InputMaybe<Scalars['String']['input']>;
  readonly lockUntil: InputMaybe<Scalars['String']['input']>;
  readonly loginAttempts: InputMaybe<Scalars['Float']['input']>;
  readonly password: InputMaybe<Scalars['String']['input']>;
  readonly resetPasswordExpiration: InputMaybe<Scalars['String']['input']>;
  readonly resetPasswordToken: InputMaybe<Scalars['String']['input']>;
  readonly role: InputMaybe<AdminUpdate_Role_MutationInput>;
  readonly salt: InputMaybe<Scalars['String']['input']>;
  readonly updatedAt: InputMaybe<Scalars['String']['input']>;
};

export type MutationCourseInput = {
  readonly banner: InputMaybe<Scalars['Int']['input']>;
  readonly createdAt: InputMaybe<Scalars['String']['input']>;
  readonly description: Scalars['String']['input'];
  readonly discount: InputMaybe<Scalars['Float']['input']>;
  readonly exams: InputMaybe<Scalars['Int']['input']>;
  readonly isFree: InputMaybe<Scalars['Boolean']['input']>;
  readonly kinescopeVideos: Scalars['JSON']['input'];
  readonly previewVideoId: InputMaybe<Scalars['String']['input']>;
  readonly price: Scalars['Float']['input'];
  readonly slug: Scalars['String']['input'];
  readonly subjects: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']['input']>>>;
  readonly title: Scalars['String']['input'];
  readonly totalDuration: InputMaybe<Scalars['String']['input']>;
  readonly updatedAt: InputMaybe<Scalars['String']['input']>;
};

export type MutationCourseUpdateInput = {
  readonly banner: InputMaybe<Scalars['Int']['input']>;
  readonly createdAt: InputMaybe<Scalars['String']['input']>;
  readonly description: InputMaybe<Scalars['String']['input']>;
  readonly discount: InputMaybe<Scalars['Float']['input']>;
  readonly exams: InputMaybe<Scalars['Int']['input']>;
  readonly isFree: InputMaybe<Scalars['Boolean']['input']>;
  readonly kinescopeVideos: InputMaybe<Scalars['JSON']['input']>;
  readonly previewVideoId: InputMaybe<Scalars['String']['input']>;
  readonly price: InputMaybe<Scalars['Float']['input']>;
  readonly slug: InputMaybe<Scalars['String']['input']>;
  readonly subjects: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']['input']>>>;
  readonly title: InputMaybe<Scalars['String']['input']>;
  readonly totalDuration: InputMaybe<Scalars['String']['input']>;
  readonly updatedAt: InputMaybe<Scalars['String']['input']>;
};

export type MutationExamInput = {
  readonly code: Scalars['String']['input'];
  readonly createdAt: InputMaybe<Scalars['String']['input']>;
  readonly title: Scalars['String']['input'];
  readonly updatedAt: InputMaybe<Scalars['String']['input']>;
};

export type MutationExamUpdateInput = {
  readonly code: InputMaybe<Scalars['String']['input']>;
  readonly createdAt: InputMaybe<Scalars['String']['input']>;
  readonly title: InputMaybe<Scalars['String']['input']>;
  readonly updatedAt: InputMaybe<Scalars['String']['input']>;
};

export type MutationFaqInput = {
  readonly answer: Scalars['String']['input'];
  readonly createdAt: InputMaybe<Scalars['String']['input']>;
  readonly question: Scalars['String']['input'];
  readonly updatedAt: InputMaybe<Scalars['String']['input']>;
};

export type MutationFaqUpdateInput = {
  readonly answer: InputMaybe<Scalars['String']['input']>;
  readonly createdAt: InputMaybe<Scalars['String']['input']>;
  readonly question: InputMaybe<Scalars['String']['input']>;
  readonly updatedAt: InputMaybe<Scalars['String']['input']>;
};

export type MutationHomePageInput = {
  readonly aboutProjectBanner: MutationHomePage_AboutProjectBannerInput;
  readonly createdAt: InputMaybe<Scalars['String']['input']>;
  readonly diagnosticTestBanner: MutationHomePage_DiagnosticTestBannerInput;
  readonly featuredTest: InputMaybe<Scalars['Int']['input']>;
  readonly mainOfferBanner: MutationHomePage_MainOfferBannerInput;
  readonly updatedAt: InputMaybe<Scalars['String']['input']>;
};

export type MutationHomePage_AboutProjectBannerInput = {
  readonly description: InputMaybe<Scalars['String']['input']>;
  readonly subtitle: InputMaybe<Scalars['String']['input']>;
  readonly title: InputMaybe<Scalars['String']['input']>;
};

export type MutationHomePage_DiagnosticTestBannerInput = {
  readonly label: InputMaybe<Scalars['String']['input']>;
  readonly subtitle: InputMaybe<Scalars['String']['input']>;
  readonly title: InputMaybe<Scalars['String']['input']>;
};

export type MutationHomePage_MainOfferBannerInput = {
  readonly description: InputMaybe<Scalars['String']['input']>;
  readonly label: InputMaybe<Scalars['String']['input']>;
  readonly options: InputMaybe<ReadonlyArray<MutationHomePage_MainOfferBanner_OptionsInput>>;
  readonly title: InputMaybe<Scalars['String']['input']>;
};

export type MutationHomePage_MainOfferBanner_OptionsInput = {
  readonly id: InputMaybe<Scalars['String']['input']>;
  readonly text: InputMaybe<Scalars['String']['input']>;
};

export type MutationMediaInput = {
  readonly alt: Scalars['String']['input'];
  readonly caption: InputMaybe<Scalars['JSON']['input']>;
  readonly createdAt: InputMaybe<Scalars['String']['input']>;
  readonly filename: InputMaybe<Scalars['String']['input']>;
  readonly filesize: InputMaybe<Scalars['Float']['input']>;
  readonly focalX: InputMaybe<Scalars['Float']['input']>;
  readonly focalY: InputMaybe<Scalars['Float']['input']>;
  readonly height: InputMaybe<Scalars['Float']['input']>;
  readonly mimeType: InputMaybe<Scalars['String']['input']>;
  readonly sizes: InputMaybe<MutationMedia_SizesInput>;
  readonly thumbnailURL: InputMaybe<Scalars['String']['input']>;
  readonly updatedAt: InputMaybe<Scalars['String']['input']>;
  readonly url: InputMaybe<Scalars['String']['input']>;
  readonly width: InputMaybe<Scalars['Float']['input']>;
};

export type MutationMediaUpdateInput = {
  readonly alt: InputMaybe<Scalars['String']['input']>;
  readonly caption: InputMaybe<Scalars['JSON']['input']>;
  readonly createdAt: InputMaybe<Scalars['String']['input']>;
  readonly filename: InputMaybe<Scalars['String']['input']>;
  readonly filesize: InputMaybe<Scalars['Float']['input']>;
  readonly focalX: InputMaybe<Scalars['Float']['input']>;
  readonly focalY: InputMaybe<Scalars['Float']['input']>;
  readonly height: InputMaybe<Scalars['Float']['input']>;
  readonly mimeType: InputMaybe<Scalars['String']['input']>;
  readonly sizes: InputMaybe<MutationMediaUpdate_SizesInput>;
  readonly thumbnailURL: InputMaybe<Scalars['String']['input']>;
  readonly updatedAt: InputMaybe<Scalars['String']['input']>;
  readonly url: InputMaybe<Scalars['String']['input']>;
  readonly width: InputMaybe<Scalars['Float']['input']>;
};

export type MutationMediaUpdate_SizesInput = {
  readonly large: InputMaybe<MutationMediaUpdate_Sizes_LargeInput>;
  readonly medium: InputMaybe<MutationMediaUpdate_Sizes_MediumInput>;
  readonly og: InputMaybe<MutationMediaUpdate_Sizes_OgInput>;
  readonly small: InputMaybe<MutationMediaUpdate_Sizes_SmallInput>;
  readonly square: InputMaybe<MutationMediaUpdate_Sizes_SquareInput>;
  readonly thumbnail: InputMaybe<MutationMediaUpdate_Sizes_ThumbnailInput>;
  readonly xlarge: InputMaybe<MutationMediaUpdate_Sizes_XlargeInput>;
};

export type MutationMediaUpdate_Sizes_LargeInput = {
  readonly filename: InputMaybe<Scalars['String']['input']>;
  readonly filesize: InputMaybe<Scalars['Float']['input']>;
  readonly height: InputMaybe<Scalars['Float']['input']>;
  readonly mimeType: InputMaybe<Scalars['String']['input']>;
  readonly url: InputMaybe<Scalars['String']['input']>;
  readonly width: InputMaybe<Scalars['Float']['input']>;
};

export type MutationMediaUpdate_Sizes_MediumInput = {
  readonly filename: InputMaybe<Scalars['String']['input']>;
  readonly filesize: InputMaybe<Scalars['Float']['input']>;
  readonly height: InputMaybe<Scalars['Float']['input']>;
  readonly mimeType: InputMaybe<Scalars['String']['input']>;
  readonly url: InputMaybe<Scalars['String']['input']>;
  readonly width: InputMaybe<Scalars['Float']['input']>;
};

export type MutationMediaUpdate_Sizes_OgInput = {
  readonly filename: InputMaybe<Scalars['String']['input']>;
  readonly filesize: InputMaybe<Scalars['Float']['input']>;
  readonly height: InputMaybe<Scalars['Float']['input']>;
  readonly mimeType: InputMaybe<Scalars['String']['input']>;
  readonly url: InputMaybe<Scalars['String']['input']>;
  readonly width: InputMaybe<Scalars['Float']['input']>;
};

export type MutationMediaUpdate_Sizes_SmallInput = {
  readonly filename: InputMaybe<Scalars['String']['input']>;
  readonly filesize: InputMaybe<Scalars['Float']['input']>;
  readonly height: InputMaybe<Scalars['Float']['input']>;
  readonly mimeType: InputMaybe<Scalars['String']['input']>;
  readonly url: InputMaybe<Scalars['String']['input']>;
  readonly width: InputMaybe<Scalars['Float']['input']>;
};

export type MutationMediaUpdate_Sizes_SquareInput = {
  readonly filename: InputMaybe<Scalars['String']['input']>;
  readonly filesize: InputMaybe<Scalars['Float']['input']>;
  readonly height: InputMaybe<Scalars['Float']['input']>;
  readonly mimeType: InputMaybe<Scalars['String']['input']>;
  readonly url: InputMaybe<Scalars['String']['input']>;
  readonly width: InputMaybe<Scalars['Float']['input']>;
};

export type MutationMediaUpdate_Sizes_ThumbnailInput = {
  readonly filename: InputMaybe<Scalars['String']['input']>;
  readonly filesize: InputMaybe<Scalars['Float']['input']>;
  readonly height: InputMaybe<Scalars['Float']['input']>;
  readonly mimeType: InputMaybe<Scalars['String']['input']>;
  readonly url: InputMaybe<Scalars['String']['input']>;
  readonly width: InputMaybe<Scalars['Float']['input']>;
};

export type MutationMediaUpdate_Sizes_XlargeInput = {
  readonly filename: InputMaybe<Scalars['String']['input']>;
  readonly filesize: InputMaybe<Scalars['Float']['input']>;
  readonly height: InputMaybe<Scalars['Float']['input']>;
  readonly mimeType: InputMaybe<Scalars['String']['input']>;
  readonly url: InputMaybe<Scalars['String']['input']>;
  readonly width: InputMaybe<Scalars['Float']['input']>;
};

export type MutationMedia_SizesInput = {
  readonly large: InputMaybe<MutationMedia_Sizes_LargeInput>;
  readonly medium: InputMaybe<MutationMedia_Sizes_MediumInput>;
  readonly og: InputMaybe<MutationMedia_Sizes_OgInput>;
  readonly small: InputMaybe<MutationMedia_Sizes_SmallInput>;
  readonly square: InputMaybe<MutationMedia_Sizes_SquareInput>;
  readonly thumbnail: InputMaybe<MutationMedia_Sizes_ThumbnailInput>;
  readonly xlarge: InputMaybe<MutationMedia_Sizes_XlargeInput>;
};

export type MutationMedia_Sizes_LargeInput = {
  readonly filename: InputMaybe<Scalars['String']['input']>;
  readonly filesize: InputMaybe<Scalars['Float']['input']>;
  readonly height: InputMaybe<Scalars['Float']['input']>;
  readonly mimeType: InputMaybe<Scalars['String']['input']>;
  readonly url: InputMaybe<Scalars['String']['input']>;
  readonly width: InputMaybe<Scalars['Float']['input']>;
};

export type MutationMedia_Sizes_MediumInput = {
  readonly filename: InputMaybe<Scalars['String']['input']>;
  readonly filesize: InputMaybe<Scalars['Float']['input']>;
  readonly height: InputMaybe<Scalars['Float']['input']>;
  readonly mimeType: InputMaybe<Scalars['String']['input']>;
  readonly url: InputMaybe<Scalars['String']['input']>;
  readonly width: InputMaybe<Scalars['Float']['input']>;
};

export type MutationMedia_Sizes_OgInput = {
  readonly filename: InputMaybe<Scalars['String']['input']>;
  readonly filesize: InputMaybe<Scalars['Float']['input']>;
  readonly height: InputMaybe<Scalars['Float']['input']>;
  readonly mimeType: InputMaybe<Scalars['String']['input']>;
  readonly url: InputMaybe<Scalars['String']['input']>;
  readonly width: InputMaybe<Scalars['Float']['input']>;
};

export type MutationMedia_Sizes_SmallInput = {
  readonly filename: InputMaybe<Scalars['String']['input']>;
  readonly filesize: InputMaybe<Scalars['Float']['input']>;
  readonly height: InputMaybe<Scalars['Float']['input']>;
  readonly mimeType: InputMaybe<Scalars['String']['input']>;
  readonly url: InputMaybe<Scalars['String']['input']>;
  readonly width: InputMaybe<Scalars['Float']['input']>;
};

export type MutationMedia_Sizes_SquareInput = {
  readonly filename: InputMaybe<Scalars['String']['input']>;
  readonly filesize: InputMaybe<Scalars['Float']['input']>;
  readonly height: InputMaybe<Scalars['Float']['input']>;
  readonly mimeType: InputMaybe<Scalars['String']['input']>;
  readonly url: InputMaybe<Scalars['String']['input']>;
  readonly width: InputMaybe<Scalars['Float']['input']>;
};

export type MutationMedia_Sizes_ThumbnailInput = {
  readonly filename: InputMaybe<Scalars['String']['input']>;
  readonly filesize: InputMaybe<Scalars['Float']['input']>;
  readonly height: InputMaybe<Scalars['Float']['input']>;
  readonly mimeType: InputMaybe<Scalars['String']['input']>;
  readonly url: InputMaybe<Scalars['String']['input']>;
  readonly width: InputMaybe<Scalars['Float']['input']>;
};

export type MutationMedia_Sizes_XlargeInput = {
  readonly filename: InputMaybe<Scalars['String']['input']>;
  readonly filesize: InputMaybe<Scalars['Float']['input']>;
  readonly height: InputMaybe<Scalars['Float']['input']>;
  readonly mimeType: InputMaybe<Scalars['String']['input']>;
  readonly url: InputMaybe<Scalars['String']['input']>;
  readonly width: InputMaybe<Scalars['Float']['input']>;
};

export type MutationPayloadLockedDocumentInput = {
  readonly createdAt: InputMaybe<Scalars['String']['input']>;
  readonly document: InputMaybe<PayloadLockedDocument_DocumentRelationshipInput>;
  readonly globalSlug: InputMaybe<Scalars['String']['input']>;
  readonly updatedAt: InputMaybe<Scalars['String']['input']>;
  readonly user: InputMaybe<PayloadLockedDocument_UserRelationshipInput>;
};

export type MutationPayloadLockedDocumentUpdateInput = {
  readonly createdAt: InputMaybe<Scalars['String']['input']>;
  readonly document: InputMaybe<PayloadLockedDocumentUpdate_DocumentRelationshipInput>;
  readonly globalSlug: InputMaybe<Scalars['String']['input']>;
  readonly updatedAt: InputMaybe<Scalars['String']['input']>;
  readonly user: InputMaybe<PayloadLockedDocumentUpdate_UserRelationshipInput>;
};

export type MutationPayloadPreferenceInput = {
  readonly createdAt: InputMaybe<Scalars['String']['input']>;
  readonly key: InputMaybe<Scalars['String']['input']>;
  readonly updatedAt: InputMaybe<Scalars['String']['input']>;
  readonly user: InputMaybe<PayloadPreference_UserRelationshipInput>;
  readonly value: InputMaybe<Scalars['JSON']['input']>;
};

export type MutationPayloadPreferenceUpdateInput = {
  readonly createdAt: InputMaybe<Scalars['String']['input']>;
  readonly key: InputMaybe<Scalars['String']['input']>;
  readonly updatedAt: InputMaybe<Scalars['String']['input']>;
  readonly user: InputMaybe<PayloadPreferenceUpdate_UserRelationshipInput>;
  readonly value: InputMaybe<Scalars['JSON']['input']>;
};

export type MutationPostInput = {
  readonly _status: InputMaybe<Post__Status_MutationInput>;
  readonly categories: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']['input']>>>;
  readonly content: Scalars['JSON']['input'];
  readonly createdAt: InputMaybe<Scalars['String']['input']>;
  readonly description: Scalars['String']['input'];
  readonly image: InputMaybe<Scalars['Int']['input']>;
  readonly publishedAt: InputMaybe<Scalars['String']['input']>;
  readonly relatedPosts: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']['input']>>>;
  readonly slug: InputMaybe<Scalars['String']['input']>;
  readonly slugLock: InputMaybe<Scalars['Boolean']['input']>;
  readonly title: Scalars['String']['input'];
  readonly updatedAt: InputMaybe<Scalars['String']['input']>;
};

export type MutationPostUpdateInput = {
  readonly _status: InputMaybe<PostUpdate__Status_MutationInput>;
  readonly categories: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']['input']>>>;
  readonly content: InputMaybe<Scalars['JSON']['input']>;
  readonly createdAt: InputMaybe<Scalars['String']['input']>;
  readonly description: InputMaybe<Scalars['String']['input']>;
  readonly image: InputMaybe<Scalars['Int']['input']>;
  readonly publishedAt: InputMaybe<Scalars['String']['input']>;
  readonly relatedPosts: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']['input']>>>;
  readonly slug: InputMaybe<Scalars['String']['input']>;
  readonly slugLock: InputMaybe<Scalars['Boolean']['input']>;
  readonly title: InputMaybe<Scalars['String']['input']>;
  readonly updatedAt: InputMaybe<Scalars['String']['input']>;
};

export type MutationPurchaseInput = {
  readonly course: InputMaybe<Scalars['Int']['input']>;
  readonly createdAt: InputMaybe<Scalars['String']['input']>;
  readonly expiresAt: InputMaybe<Scalars['String']['input']>;
  readonly pricePaid: Scalars['Float']['input'];
  readonly purchasedAt: InputMaybe<Scalars['String']['input']>;
  readonly status: InputMaybe<Purchase_Status_MutationInput>;
  readonly tariff: InputMaybe<Scalars['Int']['input']>;
  readonly updatedAt: InputMaybe<Scalars['String']['input']>;
  readonly user: InputMaybe<Scalars['Int']['input']>;
};

export type MutationPurchaseUpdateInput = {
  readonly course: InputMaybe<Scalars['Int']['input']>;
  readonly createdAt: InputMaybe<Scalars['String']['input']>;
  readonly expiresAt: InputMaybe<Scalars['String']['input']>;
  readonly pricePaid: InputMaybe<Scalars['Float']['input']>;
  readonly purchasedAt: InputMaybe<Scalars['String']['input']>;
  readonly status: InputMaybe<PurchaseUpdate_Status_MutationInput>;
  readonly tariff: InputMaybe<Scalars['Int']['input']>;
  readonly updatedAt: InputMaybe<Scalars['String']['input']>;
  readonly user: InputMaybe<Scalars['Int']['input']>;
};

export type MutationQuestionInput = {
  readonly answers: InputMaybe<ReadonlyArray<InputMaybe<MutationQuestion_AnswersInput>>>;
  readonly createdAt: InputMaybe<Scalars['String']['input']>;
  readonly matchingPairs: InputMaybe<ReadonlyArray<InputMaybe<MutationQuestion_MatchingPairsInput>>>;
  readonly questionText: Scalars['String']['input'];
  readonly questionType: Question_QuestionType_MutationInput;
  readonly recommendation: InputMaybe<Scalars['Int']['input']>;
  readonly textAnswer: InputMaybe<Scalars['String']['input']>;
  readonly updatedAt: InputMaybe<Scalars['String']['input']>;
};

export type MutationQuestionUpdateInput = {
  readonly answers: InputMaybe<ReadonlyArray<InputMaybe<MutationQuestionUpdate_AnswersInput>>>;
  readonly createdAt: InputMaybe<Scalars['String']['input']>;
  readonly matchingPairs: InputMaybe<ReadonlyArray<InputMaybe<MutationQuestionUpdate_MatchingPairsInput>>>;
  readonly questionText: InputMaybe<Scalars['String']['input']>;
  readonly questionType: InputMaybe<QuestionUpdate_QuestionType_MutationInput>;
  readonly recommendation: InputMaybe<Scalars['Int']['input']>;
  readonly textAnswer: InputMaybe<Scalars['String']['input']>;
  readonly updatedAt: InputMaybe<Scalars['String']['input']>;
};

export type MutationQuestionUpdate_AnswersInput = {
  readonly id: InputMaybe<Scalars['String']['input']>;
  readonly isCorrect: InputMaybe<Scalars['Boolean']['input']>;
  readonly label: InputMaybe<Scalars['String']['input']>;
  readonly value: InputMaybe<Scalars['String']['input']>;
};

export type MutationQuestionUpdate_MatchingPairsInput = {
  readonly id: InputMaybe<Scalars['String']['input']>;
  readonly left: InputMaybe<Scalars['String']['input']>;
  readonly right: InputMaybe<Scalars['String']['input']>;
};

export type MutationQuestion_AnswersInput = {
  readonly id: InputMaybe<Scalars['String']['input']>;
  readonly isCorrect: InputMaybe<Scalars['Boolean']['input']>;
  readonly label: InputMaybe<Scalars['String']['input']>;
  readonly value: InputMaybe<Scalars['String']['input']>;
};

export type MutationQuestion_MatchingPairsInput = {
  readonly id: InputMaybe<Scalars['String']['input']>;
  readonly left: InputMaybe<Scalars['String']['input']>;
  readonly right: InputMaybe<Scalars['String']['input']>;
};

export type MutationRecomendationInput = {
  readonly createdAt: InputMaybe<Scalars['String']['input']>;
  readonly description: Scalars['JSON']['input'];
  readonly title: Scalars['String']['input'];
  readonly updatedAt: InputMaybe<Scalars['String']['input']>;
};

export type MutationRecomendationUpdateInput = {
  readonly createdAt: InputMaybe<Scalars['String']['input']>;
  readonly description: InputMaybe<Scalars['JSON']['input']>;
  readonly title: InputMaybe<Scalars['String']['input']>;
  readonly updatedAt: InputMaybe<Scalars['String']['input']>;
};

export type MutationSubjectInput = {
  readonly code: Scalars['String']['input'];
  readonly createdAt: InputMaybe<Scalars['String']['input']>;
  readonly title: Scalars['String']['input'];
  readonly updatedAt: InputMaybe<Scalars['String']['input']>;
};

export type MutationSubjectUpdateInput = {
  readonly code: InputMaybe<Scalars['String']['input']>;
  readonly createdAt: InputMaybe<Scalars['String']['input']>;
  readonly title: InputMaybe<Scalars['String']['input']>;
  readonly updatedAt: InputMaybe<Scalars['String']['input']>;
};

export type MutationTariffInput = {
  readonly benefits: InputMaybe<ReadonlyArray<MutationTariff_BenefitsInput>>;
  readonly createdAt: InputMaybe<Scalars['String']['input']>;
  readonly description: Scalars['String']['input'];
  readonly price: Scalars['Float']['input'];
  readonly title: Scalars['String']['input'];
  readonly updatedAt: InputMaybe<Scalars['String']['input']>;
};

export type MutationTariffUpdateInput = {
  readonly benefits: InputMaybe<ReadonlyArray<InputMaybe<MutationTariffUpdate_BenefitsInput>>>;
  readonly createdAt: InputMaybe<Scalars['String']['input']>;
  readonly description: InputMaybe<Scalars['String']['input']>;
  readonly price: InputMaybe<Scalars['Float']['input']>;
  readonly title: InputMaybe<Scalars['String']['input']>;
  readonly updatedAt: InputMaybe<Scalars['String']['input']>;
};

export type MutationTariffUpdate_BenefitsInput = {
  readonly id: InputMaybe<Scalars['String']['input']>;
  readonly value: Scalars['String']['input'];
};

export type MutationTariff_BenefitsInput = {
  readonly id: InputMaybe<Scalars['String']['input']>;
  readonly value: Scalars['String']['input'];
};

export type MutationTestInput = {
  readonly createdAt: InputMaybe<Scalars['String']['input']>;
  readonly description: InputMaybe<Scalars['String']['input']>;
  readonly exam: InputMaybe<Scalars['Int']['input']>;
  readonly questions: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']['input']>>>;
  readonly subjects: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']['input']>>>;
  readonly title: Scalars['String']['input'];
  readonly updatedAt: InputMaybe<Scalars['String']['input']>;
};

export type MutationTestResultInput = {
  readonly answers: InputMaybe<ReadonlyArray<InputMaybe<MutationTestResult_AnswersInput>>>;
  readonly createdAt: InputMaybe<Scalars['String']['input']>;
  readonly status: TestResult_Status_MutationInput;
  readonly test: InputMaybe<Scalars['Int']['input']>;
  readonly updatedAt: InputMaybe<Scalars['String']['input']>;
  readonly user: InputMaybe<Scalars['Int']['input']>;
};

export type MutationTestResultUpdateInput = {
  readonly answers: InputMaybe<ReadonlyArray<InputMaybe<MutationTestResultUpdate_AnswersInput>>>;
  readonly createdAt: InputMaybe<Scalars['String']['input']>;
  readonly status: InputMaybe<TestResultUpdate_Status_MutationInput>;
  readonly test: InputMaybe<Scalars['Int']['input']>;
  readonly updatedAt: InputMaybe<Scalars['String']['input']>;
  readonly user: InputMaybe<Scalars['Int']['input']>;
};

export type MutationTestResultUpdate_AnswersInput = {
  readonly id: InputMaybe<Scalars['String']['input']>;
  readonly isCorrect: InputMaybe<Scalars['Boolean']['input']>;
  readonly question: InputMaybe<Scalars['Int']['input']>;
  readonly userAnswer: Scalars['JSON']['input'];
};

export type MutationTestResult_AnswersInput = {
  readonly id: InputMaybe<Scalars['String']['input']>;
  readonly isCorrect: InputMaybe<Scalars['Boolean']['input']>;
  readonly question: InputMaybe<Scalars['Int']['input']>;
  readonly userAnswer: Scalars['JSON']['input'];
};

export type MutationTestUpdateInput = {
  readonly createdAt: InputMaybe<Scalars['String']['input']>;
  readonly description: InputMaybe<Scalars['String']['input']>;
  readonly exam: InputMaybe<Scalars['Int']['input']>;
  readonly questions: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']['input']>>>;
  readonly subjects: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']['input']>>>;
  readonly title: InputMaybe<Scalars['String']['input']>;
  readonly updatedAt: InputMaybe<Scalars['String']['input']>;
};

export type MutationUserInput = {
  readonly avatar: InputMaybe<Scalars['Int']['input']>;
  readonly createdAt: InputMaybe<Scalars['String']['input']>;
  readonly email: Scalars['String']['input'];
  readonly isVerified: InputMaybe<Scalars['Boolean']['input']>;
  readonly name: InputMaybe<Scalars['String']['input']>;
  readonly password: Scalars['String']['input'];
  readonly role: User_Role_MutationInput;
  readonly signupMethod: User_SignupMethod_MutationInput;
  readonly updatedAt: InputMaybe<Scalars['String']['input']>;
};

export type MutationUserUpdateInput = {
  readonly avatar: InputMaybe<Scalars['Int']['input']>;
  readonly createdAt: InputMaybe<Scalars['String']['input']>;
  readonly email: InputMaybe<Scalars['String']['input']>;
  readonly isVerified: InputMaybe<Scalars['Boolean']['input']>;
  readonly name: InputMaybe<Scalars['String']['input']>;
  readonly password: InputMaybe<Scalars['String']['input']>;
  readonly role: InputMaybe<UserUpdate_Role_MutationInput>;
  readonly signupMethod: InputMaybe<UserUpdate_SignupMethod_MutationInput>;
  readonly updatedAt: InputMaybe<Scalars['String']['input']>;
};

export type Payload_Locked_DocumentsAccess = {
  readonly __typename?: 'payload_locked_documentsAccess';
  readonly create: Maybe<PayloadLockedDocumentsCreateAccess>;
  readonly delete: Maybe<PayloadLockedDocumentsDeleteAccess>;
  readonly fields: Maybe<PayloadLockedDocumentsFields>;
  readonly read: Maybe<PayloadLockedDocumentsReadAccess>;
  readonly update: Maybe<PayloadLockedDocumentsUpdateAccess>;
};

export type Payload_Locked_DocumentsDocAccess = {
  readonly __typename?: 'payload_locked_documentsDocAccess';
  readonly create: Maybe<PayloadLockedDocumentsCreateDocAccess>;
  readonly delete: Maybe<PayloadLockedDocumentsDeleteDocAccess>;
  readonly fields: Maybe<PayloadLockedDocumentsDocAccessFields>;
  readonly read: Maybe<PayloadLockedDocumentsReadDocAccess>;
  readonly update: Maybe<PayloadLockedDocumentsUpdateDocAccess>;
};

export type Payload_PreferencesAccess = {
  readonly __typename?: 'payload_preferencesAccess';
  readonly create: Maybe<PayloadPreferencesCreateAccess>;
  readonly delete: Maybe<PayloadPreferencesDeleteAccess>;
  readonly fields: Maybe<PayloadPreferencesFields>;
  readonly read: Maybe<PayloadPreferencesReadAccess>;
  readonly update: Maybe<PayloadPreferencesUpdateAccess>;
};

export type Payload_PreferencesDocAccess = {
  readonly __typename?: 'payload_preferencesDocAccess';
  readonly create: Maybe<PayloadPreferencesCreateDocAccess>;
  readonly delete: Maybe<PayloadPreferencesDeleteDocAccess>;
  readonly fields: Maybe<PayloadPreferencesDocAccessFields>;
  readonly read: Maybe<PayloadPreferencesReadDocAccess>;
  readonly update: Maybe<PayloadPreferencesUpdateDocAccess>;
};

export type PostsAccess = {
  readonly __typename?: 'postsAccess';
  readonly create: Maybe<PostsCreateAccess>;
  readonly delete: Maybe<PostsDeleteAccess>;
  readonly fields: Maybe<PostsFields>;
  readonly read: Maybe<PostsReadAccess>;
  readonly readVersions: Maybe<PostsReadVersionsAccess>;
  readonly update: Maybe<PostsUpdateAccess>;
};

export type PostsDocAccess = {
  readonly __typename?: 'postsDocAccess';
  readonly create: Maybe<PostsCreateDocAccess>;
  readonly delete: Maybe<PostsDeleteDocAccess>;
  readonly fields: Maybe<PostsDocAccessFields>;
  readonly read: Maybe<PostsReadDocAccess>;
  readonly readVersions: Maybe<PostsReadVersionsDocAccess>;
  readonly update: Maybe<PostsUpdateDocAccess>;
};

export type PurchasesAccess = {
  readonly __typename?: 'purchasesAccess';
  readonly create: Maybe<PurchasesCreateAccess>;
  readonly delete: Maybe<PurchasesDeleteAccess>;
  readonly fields: Maybe<PurchasesFields>;
  readonly read: Maybe<PurchasesReadAccess>;
  readonly update: Maybe<PurchasesUpdateAccess>;
};

export type PurchasesDocAccess = {
  readonly __typename?: 'purchasesDocAccess';
  readonly create: Maybe<PurchasesCreateDocAccess>;
  readonly delete: Maybe<PurchasesDeleteDocAccess>;
  readonly fields: Maybe<PurchasesDocAccessFields>;
  readonly read: Maybe<PurchasesReadDocAccess>;
  readonly update: Maybe<PurchasesUpdateDocAccess>;
};

export type QuestionsAccess = {
  readonly __typename?: 'questionsAccess';
  readonly create: Maybe<QuestionsCreateAccess>;
  readonly delete: Maybe<QuestionsDeleteAccess>;
  readonly fields: Maybe<QuestionsFields>;
  readonly read: Maybe<QuestionsReadAccess>;
  readonly update: Maybe<QuestionsUpdateAccess>;
};

export type QuestionsDocAccess = {
  readonly __typename?: 'questionsDocAccess';
  readonly create: Maybe<QuestionsCreateDocAccess>;
  readonly delete: Maybe<QuestionsDeleteDocAccess>;
  readonly fields: Maybe<QuestionsDocAccessFields>;
  readonly read: Maybe<QuestionsReadDocAccess>;
  readonly update: Maybe<QuestionsUpdateDocAccess>;
};

export type RecomendationsAccess = {
  readonly __typename?: 'recomendationsAccess';
  readonly create: Maybe<RecomendationsCreateAccess>;
  readonly delete: Maybe<RecomendationsDeleteAccess>;
  readonly fields: Maybe<RecomendationsFields>;
  readonly read: Maybe<RecomendationsReadAccess>;
  readonly update: Maybe<RecomendationsUpdateAccess>;
};

export type RecomendationsDocAccess = {
  readonly __typename?: 'recomendationsDocAccess';
  readonly create: Maybe<RecomendationsCreateDocAccess>;
  readonly delete: Maybe<RecomendationsDeleteDocAccess>;
  readonly fields: Maybe<RecomendationsDocAccessFields>;
  readonly read: Maybe<RecomendationsReadDocAccess>;
  readonly update: Maybe<RecomendationsUpdateDocAccess>;
};

export type SubjectsAccess = {
  readonly __typename?: 'subjectsAccess';
  readonly create: Maybe<SubjectsCreateAccess>;
  readonly delete: Maybe<SubjectsDeleteAccess>;
  readonly fields: Maybe<SubjectsFields>;
  readonly read: Maybe<SubjectsReadAccess>;
  readonly update: Maybe<SubjectsUpdateAccess>;
};

export type SubjectsDocAccess = {
  readonly __typename?: 'subjectsDocAccess';
  readonly create: Maybe<SubjectsCreateDocAccess>;
  readonly delete: Maybe<SubjectsDeleteDocAccess>;
  readonly fields: Maybe<SubjectsDocAccessFields>;
  readonly read: Maybe<SubjectsReadDocAccess>;
  readonly update: Maybe<SubjectsUpdateDocAccess>;
};

export type TariffsAccess = {
  readonly __typename?: 'tariffsAccess';
  readonly create: Maybe<TariffsCreateAccess>;
  readonly delete: Maybe<TariffsDeleteAccess>;
  readonly fields: Maybe<TariffsFields>;
  readonly read: Maybe<TariffsReadAccess>;
  readonly update: Maybe<TariffsUpdateAccess>;
};

export type TariffsDocAccess = {
  readonly __typename?: 'tariffsDocAccess';
  readonly create: Maybe<TariffsCreateDocAccess>;
  readonly delete: Maybe<TariffsDeleteDocAccess>;
  readonly fields: Maybe<TariffsDocAccessFields>;
  readonly read: Maybe<TariffsReadDocAccess>;
  readonly update: Maybe<TariffsUpdateDocAccess>;
};

export type TestResultsAccess = {
  readonly __typename?: 'testResultsAccess';
  readonly create: Maybe<TestResultsCreateAccess>;
  readonly delete: Maybe<TestResultsDeleteAccess>;
  readonly fields: Maybe<TestResultsFields>;
  readonly read: Maybe<TestResultsReadAccess>;
  readonly update: Maybe<TestResultsUpdateAccess>;
};

export type TestResultsDocAccess = {
  readonly __typename?: 'testResultsDocAccess';
  readonly create: Maybe<TestResultsCreateDocAccess>;
  readonly delete: Maybe<TestResultsDeleteDocAccess>;
  readonly fields: Maybe<TestResultsDocAccessFields>;
  readonly read: Maybe<TestResultsReadDocAccess>;
  readonly update: Maybe<TestResultsUpdateDocAccess>;
};

export type TestsAccess = {
  readonly __typename?: 'testsAccess';
  readonly create: Maybe<TestsCreateAccess>;
  readonly delete: Maybe<TestsDeleteAccess>;
  readonly fields: Maybe<TestsFields>;
  readonly read: Maybe<TestsReadAccess>;
  readonly update: Maybe<TestsUpdateAccess>;
};

export type TestsDocAccess = {
  readonly __typename?: 'testsDocAccess';
  readonly create: Maybe<TestsCreateDocAccess>;
  readonly delete: Maybe<TestsDeleteDocAccess>;
  readonly fields: Maybe<TestsDocAccessFields>;
  readonly read: Maybe<TestsReadDocAccess>;
  readonly update: Maybe<TestsUpdateDocAccess>;
};

export type UsersAccess = {
  readonly __typename?: 'usersAccess';
  readonly create: Maybe<UsersCreateAccess>;
  readonly delete: Maybe<UsersDeleteAccess>;
  readonly fields: Maybe<UsersFields>;
  readonly read: Maybe<UsersReadAccess>;
  readonly update: Maybe<UsersUpdateAccess>;
};

export type UsersDocAccess = {
  readonly __typename?: 'usersDocAccess';
  readonly create: Maybe<UsersCreateDocAccess>;
  readonly delete: Maybe<UsersDeleteDocAccess>;
  readonly fields: Maybe<UsersDocAccessFields>;
  readonly read: Maybe<UsersReadDocAccess>;
  readonly update: Maybe<UsersUpdateDocAccess>;
};

export type VersionsPost_CreatedAt_Operator = {
  readonly equals: InputMaybe<Scalars['DateTime']['input']>;
  readonly exists: InputMaybe<Scalars['Boolean']['input']>;
  readonly greater_than: InputMaybe<Scalars['DateTime']['input']>;
  readonly greater_than_equal: InputMaybe<Scalars['DateTime']['input']>;
  readonly less_than: InputMaybe<Scalars['DateTime']['input']>;
  readonly less_than_equal: InputMaybe<Scalars['DateTime']['input']>;
  readonly like: InputMaybe<Scalars['DateTime']['input']>;
  readonly not_equals: InputMaybe<Scalars['DateTime']['input']>;
};

export type VersionsPost_Id_Operator = {
  readonly equals: InputMaybe<Scalars['Int']['input']>;
  readonly exists: InputMaybe<Scalars['Boolean']['input']>;
  readonly greater_than: InputMaybe<Scalars['Int']['input']>;
  readonly greater_than_equal: InputMaybe<Scalars['Int']['input']>;
  readonly less_than: InputMaybe<Scalars['Int']['input']>;
  readonly less_than_equal: InputMaybe<Scalars['Int']['input']>;
  readonly not_equals: InputMaybe<Scalars['Int']['input']>;
};

export type VersionsPost_Latest_Operator = {
  readonly equals: InputMaybe<Scalars['Boolean']['input']>;
  readonly exists: InputMaybe<Scalars['Boolean']['input']>;
  readonly not_equals: InputMaybe<Scalars['Boolean']['input']>;
};

export type VersionsPost_Parent_Operator = {
  readonly all: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']['input']>>>;
  readonly equals: InputMaybe<Scalars['JSON']['input']>;
  readonly exists: InputMaybe<Scalars['Boolean']['input']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']['input']>>>;
  readonly not_equals: InputMaybe<Scalars['JSON']['input']>;
  readonly not_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']['input']>>>;
};

export type VersionsPost_PublishedLocale_Input =
  | 'en'
  | 'ru';

export type VersionsPost_PublishedLocale_Operator = {
  readonly all: InputMaybe<ReadonlyArray<InputMaybe<VersionsPost_PublishedLocale_Input>>>;
  readonly equals: InputMaybe<VersionsPost_PublishedLocale_Input>;
  readonly exists: InputMaybe<Scalars['Boolean']['input']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<VersionsPost_PublishedLocale_Input>>>;
  readonly not_equals: InputMaybe<VersionsPost_PublishedLocale_Input>;
  readonly not_in: InputMaybe<ReadonlyArray<InputMaybe<VersionsPost_PublishedLocale_Input>>>;
};

export type VersionsPost_Snapshot_Operator = {
  readonly equals: InputMaybe<Scalars['Boolean']['input']>;
  readonly exists: InputMaybe<Scalars['Boolean']['input']>;
  readonly not_equals: InputMaybe<Scalars['Boolean']['input']>;
};

export type VersionsPost_UpdatedAt_Operator = {
  readonly equals: InputMaybe<Scalars['DateTime']['input']>;
  readonly exists: InputMaybe<Scalars['Boolean']['input']>;
  readonly greater_than: InputMaybe<Scalars['DateTime']['input']>;
  readonly greater_than_equal: InputMaybe<Scalars['DateTime']['input']>;
  readonly less_than: InputMaybe<Scalars['DateTime']['input']>;
  readonly less_than_equal: InputMaybe<Scalars['DateTime']['input']>;
  readonly like: InputMaybe<Scalars['DateTime']['input']>;
  readonly not_equals: InputMaybe<Scalars['DateTime']['input']>;
};

export type VersionsPost_Version___Status_Input =
  | 'draft'
  | 'published';

export type VersionsPost_Version___Status_Operator = {
  readonly all: InputMaybe<ReadonlyArray<InputMaybe<VersionsPost_Version___Status_Input>>>;
  readonly equals: InputMaybe<VersionsPost_Version___Status_Input>;
  readonly exists: InputMaybe<Scalars['Boolean']['input']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<VersionsPost_Version___Status_Input>>>;
  readonly not_equals: InputMaybe<VersionsPost_Version___Status_Input>;
  readonly not_in: InputMaybe<ReadonlyArray<InputMaybe<VersionsPost_Version___Status_Input>>>;
};

export type VersionsPost_Version__Categories_Operator = {
  readonly all: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']['input']>>>;
  readonly equals: InputMaybe<Scalars['JSON']['input']>;
  readonly exists: InputMaybe<Scalars['Boolean']['input']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']['input']>>>;
  readonly not_equals: InputMaybe<Scalars['JSON']['input']>;
  readonly not_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']['input']>>>;
};

export type VersionsPost_Version__Content_Operator = {
  readonly contains: InputMaybe<Scalars['JSON']['input']>;
  readonly equals: InputMaybe<Scalars['JSON']['input']>;
  readonly like: InputMaybe<Scalars['JSON']['input']>;
  readonly not_equals: InputMaybe<Scalars['JSON']['input']>;
};

export type VersionsPost_Version__CreatedAt_Operator = {
  readonly equals: InputMaybe<Scalars['DateTime']['input']>;
  readonly exists: InputMaybe<Scalars['Boolean']['input']>;
  readonly greater_than: InputMaybe<Scalars['DateTime']['input']>;
  readonly greater_than_equal: InputMaybe<Scalars['DateTime']['input']>;
  readonly less_than: InputMaybe<Scalars['DateTime']['input']>;
  readonly less_than_equal: InputMaybe<Scalars['DateTime']['input']>;
  readonly like: InputMaybe<Scalars['DateTime']['input']>;
  readonly not_equals: InputMaybe<Scalars['DateTime']['input']>;
};

export type VersionsPost_Version__Description_Operator = {
  readonly all: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly contains: InputMaybe<Scalars['String']['input']>;
  readonly equals: InputMaybe<Scalars['String']['input']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly like: InputMaybe<Scalars['String']['input']>;
  readonly not_equals: InputMaybe<Scalars['String']['input']>;
  readonly not_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type VersionsPost_Version__Image_Operator = {
  readonly all: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']['input']>>>;
  readonly equals: InputMaybe<Scalars['JSON']['input']>;
  readonly exists: InputMaybe<Scalars['Boolean']['input']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']['input']>>>;
  readonly not_equals: InputMaybe<Scalars['JSON']['input']>;
  readonly not_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']['input']>>>;
};

export type VersionsPost_Version__PublishedAt_Operator = {
  readonly equals: InputMaybe<Scalars['DateTime']['input']>;
  readonly exists: InputMaybe<Scalars['Boolean']['input']>;
  readonly greater_than: InputMaybe<Scalars['DateTime']['input']>;
  readonly greater_than_equal: InputMaybe<Scalars['DateTime']['input']>;
  readonly less_than: InputMaybe<Scalars['DateTime']['input']>;
  readonly less_than_equal: InputMaybe<Scalars['DateTime']['input']>;
  readonly like: InputMaybe<Scalars['DateTime']['input']>;
  readonly not_equals: InputMaybe<Scalars['DateTime']['input']>;
};

export type VersionsPost_Version__RelatedPosts_Operator = {
  readonly all: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']['input']>>>;
  readonly equals: InputMaybe<Scalars['JSON']['input']>;
  readonly exists: InputMaybe<Scalars['Boolean']['input']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']['input']>>>;
  readonly not_equals: InputMaybe<Scalars['JSON']['input']>;
  readonly not_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']['input']>>>;
};

export type VersionsPost_Version__SlugLock_Operator = {
  readonly equals: InputMaybe<Scalars['Boolean']['input']>;
  readonly exists: InputMaybe<Scalars['Boolean']['input']>;
  readonly not_equals: InputMaybe<Scalars['Boolean']['input']>;
};

export type VersionsPost_Version__Slug_Operator = {
  readonly all: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly contains: InputMaybe<Scalars['String']['input']>;
  readonly equals: InputMaybe<Scalars['String']['input']>;
  readonly exists: InputMaybe<Scalars['Boolean']['input']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly like: InputMaybe<Scalars['String']['input']>;
  readonly not_equals: InputMaybe<Scalars['String']['input']>;
  readonly not_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type VersionsPost_Version__Title_Operator = {
  readonly all: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly contains: InputMaybe<Scalars['String']['input']>;
  readonly equals: InputMaybe<Scalars['String']['input']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly like: InputMaybe<Scalars['String']['input']>;
  readonly not_equals: InputMaybe<Scalars['String']['input']>;
  readonly not_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type VersionsPost_Version__UpdatedAt_Operator = {
  readonly equals: InputMaybe<Scalars['DateTime']['input']>;
  readonly exists: InputMaybe<Scalars['Boolean']['input']>;
  readonly greater_than: InputMaybe<Scalars['DateTime']['input']>;
  readonly greater_than_equal: InputMaybe<Scalars['DateTime']['input']>;
  readonly less_than: InputMaybe<Scalars['DateTime']['input']>;
  readonly less_than_equal: InputMaybe<Scalars['DateTime']['input']>;
  readonly like: InputMaybe<Scalars['DateTime']['input']>;
  readonly not_equals: InputMaybe<Scalars['DateTime']['input']>;
};

export type VersionsPost_Where = {
  readonly AND: InputMaybe<ReadonlyArray<InputMaybe<VersionsPost_Where_And>>>;
  readonly OR: InputMaybe<ReadonlyArray<InputMaybe<VersionsPost_Where_Or>>>;
  readonly createdAt: InputMaybe<VersionsPost_CreatedAt_Operator>;
  readonly id: InputMaybe<VersionsPost_Id_Operator>;
  readonly latest: InputMaybe<VersionsPost_Latest_Operator>;
  readonly parent: InputMaybe<VersionsPost_Parent_Operator>;
  readonly publishedLocale: InputMaybe<VersionsPost_PublishedLocale_Operator>;
  readonly snapshot: InputMaybe<VersionsPost_Snapshot_Operator>;
  readonly updatedAt: InputMaybe<VersionsPost_UpdatedAt_Operator>;
  readonly version___status: InputMaybe<VersionsPost_Version___Status_Operator>;
  readonly version__categories: InputMaybe<VersionsPost_Version__Categories_Operator>;
  readonly version__content: InputMaybe<VersionsPost_Version__Content_Operator>;
  readonly version__createdAt: InputMaybe<VersionsPost_Version__CreatedAt_Operator>;
  readonly version__description: InputMaybe<VersionsPost_Version__Description_Operator>;
  readonly version__image: InputMaybe<VersionsPost_Version__Image_Operator>;
  readonly version__publishedAt: InputMaybe<VersionsPost_Version__PublishedAt_Operator>;
  readonly version__relatedPosts: InputMaybe<VersionsPost_Version__RelatedPosts_Operator>;
  readonly version__slug: InputMaybe<VersionsPost_Version__Slug_Operator>;
  readonly version__slugLock: InputMaybe<VersionsPost_Version__SlugLock_Operator>;
  readonly version__title: InputMaybe<VersionsPost_Version__Title_Operator>;
  readonly version__updatedAt: InputMaybe<VersionsPost_Version__UpdatedAt_Operator>;
};

export type VersionsPost_Where_And = {
  readonly AND: InputMaybe<ReadonlyArray<InputMaybe<VersionsPost_Where_And>>>;
  readonly OR: InputMaybe<ReadonlyArray<InputMaybe<VersionsPost_Where_Or>>>;
  readonly createdAt: InputMaybe<VersionsPost_CreatedAt_Operator>;
  readonly id: InputMaybe<VersionsPost_Id_Operator>;
  readonly latest: InputMaybe<VersionsPost_Latest_Operator>;
  readonly parent: InputMaybe<VersionsPost_Parent_Operator>;
  readonly publishedLocale: InputMaybe<VersionsPost_PublishedLocale_Operator>;
  readonly snapshot: InputMaybe<VersionsPost_Snapshot_Operator>;
  readonly updatedAt: InputMaybe<VersionsPost_UpdatedAt_Operator>;
  readonly version___status: InputMaybe<VersionsPost_Version___Status_Operator>;
  readonly version__categories: InputMaybe<VersionsPost_Version__Categories_Operator>;
  readonly version__content: InputMaybe<VersionsPost_Version__Content_Operator>;
  readonly version__createdAt: InputMaybe<VersionsPost_Version__CreatedAt_Operator>;
  readonly version__description: InputMaybe<VersionsPost_Version__Description_Operator>;
  readonly version__image: InputMaybe<VersionsPost_Version__Image_Operator>;
  readonly version__publishedAt: InputMaybe<VersionsPost_Version__PublishedAt_Operator>;
  readonly version__relatedPosts: InputMaybe<VersionsPost_Version__RelatedPosts_Operator>;
  readonly version__slug: InputMaybe<VersionsPost_Version__Slug_Operator>;
  readonly version__slugLock: InputMaybe<VersionsPost_Version__SlugLock_Operator>;
  readonly version__title: InputMaybe<VersionsPost_Version__Title_Operator>;
  readonly version__updatedAt: InputMaybe<VersionsPost_Version__UpdatedAt_Operator>;
};

export type VersionsPost_Where_Or = {
  readonly AND: InputMaybe<ReadonlyArray<InputMaybe<VersionsPost_Where_And>>>;
  readonly OR: InputMaybe<ReadonlyArray<InputMaybe<VersionsPost_Where_Or>>>;
  readonly createdAt: InputMaybe<VersionsPost_CreatedAt_Operator>;
  readonly id: InputMaybe<VersionsPost_Id_Operator>;
  readonly latest: InputMaybe<VersionsPost_Latest_Operator>;
  readonly parent: InputMaybe<VersionsPost_Parent_Operator>;
  readonly publishedLocale: InputMaybe<VersionsPost_PublishedLocale_Operator>;
  readonly snapshot: InputMaybe<VersionsPost_Snapshot_Operator>;
  readonly updatedAt: InputMaybe<VersionsPost_UpdatedAt_Operator>;
  readonly version___status: InputMaybe<VersionsPost_Version___Status_Operator>;
  readonly version__categories: InputMaybe<VersionsPost_Version__Categories_Operator>;
  readonly version__content: InputMaybe<VersionsPost_Version__Content_Operator>;
  readonly version__createdAt: InputMaybe<VersionsPost_Version__CreatedAt_Operator>;
  readonly version__description: InputMaybe<VersionsPost_Version__Description_Operator>;
  readonly version__image: InputMaybe<VersionsPost_Version__Image_Operator>;
  readonly version__publishedAt: InputMaybe<VersionsPost_Version__PublishedAt_Operator>;
  readonly version__relatedPosts: InputMaybe<VersionsPost_Version__RelatedPosts_Operator>;
  readonly version__slug: InputMaybe<VersionsPost_Version__Slug_Operator>;
  readonly version__slugLock: InputMaybe<VersionsPost_Version__SlugLock_Operator>;
  readonly version__title: InputMaybe<VersionsPost_Version__Title_Operator>;
  readonly version__updatedAt: InputMaybe<VersionsPost_Version__UpdatedAt_Operator>;
};

export type VersionsPosts = {
  readonly __typename?: 'versionsPosts';
  readonly docs: ReadonlyArray<PostVersion>;
  readonly hasNextPage: Scalars['Boolean']['output'];
  readonly hasPrevPage: Scalars['Boolean']['output'];
  readonly limit: Scalars['Int']['output'];
  readonly nextPage: Maybe<Scalars['Int']['output']>;
  readonly offset: Maybe<Scalars['Int']['output']>;
  readonly page: Scalars['Int']['output'];
  readonly pagingCounter: Scalars['Int']['output'];
  readonly prevPage: Maybe<Scalars['Int']['output']>;
  readonly totalDocs: Scalars['Int']['output'];
  readonly totalPages: Scalars['Int']['output'];
};

export type GetAllExamsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllExamsQuery = { readonly __typename?: 'Query', readonly Exams: { readonly __typename?: 'Exams', readonly docs: ReadonlyArray<{ readonly __typename?: 'Exam', readonly id: number, readonly title: string }> } };

export type GetAllSubjectsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllSubjectsQuery = { readonly __typename?: 'Query', readonly Subjects: { readonly __typename?: 'Subjects', readonly docs: ReadonlyArray<{ readonly __typename?: 'Subject', readonly id: number, readonly title: string }> } };

export type GetAllCoursesQueryVariables = Exact<{
  exams: InputMaybe<Course_Exams_Operator>;
  subject: InputMaybe<Course_Subjects_Operator>;
  page: Scalars['Int']['input'];
}>;


export type GetAllCoursesQuery = { readonly __typename?: 'Query', readonly Courses: { readonly __typename?: 'Courses', readonly page: number, readonly totalPages: number, readonly docs: ReadonlyArray<{ readonly __typename?: 'Course', readonly id: number, readonly title: string, readonly description: string, readonly price: number, readonly discount: number, readonly slug: string, readonly isFree: boolean, readonly totalDuration: string, readonly previewVideoId: string, readonly banner: { readonly __typename?: 'Media', readonly id: number, readonly url: string, readonly alt: string }, readonly exams: { readonly __typename?: 'Exam', readonly id: number, readonly title: string }, readonly subjects: ReadonlyArray<{ readonly __typename?: 'Subject', readonly id: number, readonly title: string }> }> } };

export type GetCourseBySlugQueryVariables = Exact<{
  slug: InputMaybe<Scalars['String']['input']>;
}>;


export type GetCourseBySlugQuery = { readonly __typename?: 'Query', readonly Courses: { readonly __typename?: 'Courses', readonly docs: ReadonlyArray<{ readonly __typename?: 'Course', readonly kinescopeVideos: any, readonly id: number, readonly title: string, readonly description: string, readonly price: number, readonly discount: number, readonly slug: string, readonly isFree: boolean, readonly totalDuration: string, readonly previewVideoId: string, readonly banner: { readonly __typename?: 'Media', readonly id: number, readonly url: string, readonly alt: string }, readonly exams: { readonly __typename?: 'Exam', readonly id: number, readonly title: string }, readonly subjects: ReadonlyArray<{ readonly __typename?: 'Subject', readonly id: number, readonly title: string }> }> } };

export type GetCourseSlugByIdQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type GetCourseSlugByIdQuery = { readonly __typename?: 'Query', readonly Course: { readonly __typename?: 'Course', readonly slug: string } };

export type GetFaGsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetFaGsQuery = { readonly __typename?: 'Query', readonly Faqs: { readonly __typename?: 'Faqs', readonly docs: ReadonlyArray<{ readonly __typename?: 'Faq', readonly id: number, readonly question: string, readonly answer: string }> } };

export type CourseFragmentFragment = { readonly __typename?: 'Course', readonly id: number, readonly title: string, readonly description: string, readonly price: number, readonly discount: number, readonly slug: string, readonly isFree: boolean, readonly totalDuration: string, readonly previewVideoId: string, readonly banner: { readonly __typename?: 'Media', readonly id: number, readonly url: string, readonly alt: string }, readonly exams: { readonly __typename?: 'Exam', readonly id: number, readonly title: string }, readonly subjects: ReadonlyArray<{ readonly __typename?: 'Subject', readonly id: number, readonly title: string }> };

export type ExamFragmentFragment = { readonly __typename?: 'Exam', readonly id: number, readonly title: string };

export type MediaFragmentFragment = { readonly __typename?: 'Media', readonly id: number, readonly url: string, readonly alt: string };

export type PostFragmentFragment = { readonly __typename?: 'Post', readonly id: number, readonly slug: string, readonly title: string, readonly description: string, readonly content: any, readonly publishedAt: any, readonly image: { readonly __typename?: 'Media', readonly url: string, readonly alt: string }, readonly categories: ReadonlyArray<{ readonly __typename?: 'Exam', readonly title: string }>, readonly relatedPosts: ReadonlyArray<{ readonly __typename?: 'Post', readonly id: number }> };

export type QuestionFragmentFragment = { readonly __typename?: 'Question', readonly id: number, readonly questionText: string, readonly questionType: Question_QuestionType, readonly textAnswer: string, readonly createdAt: any, readonly answers: ReadonlyArray<{ readonly __typename?: 'Question_Answers', readonly id: string, readonly label: string, readonly isCorrect: boolean, readonly value: string }>, readonly matchingPairs: ReadonlyArray<{ readonly __typename?: 'Question_MatchingPairs', readonly id: string, readonly left: string, readonly right: string }> };

export type RecomendationFragmentFragment = { readonly __typename?: 'Recomendation', readonly id: number, readonly title: string, readonly description: any };

export type SubjectsFragmentFragment = { readonly __typename?: 'Subject', readonly id: number, readonly title: string };

export type TariffFragmentFragment = { readonly __typename?: 'Tariff', readonly id: number, readonly title: string, readonly price: number, readonly description: string, readonly benefits: ReadonlyArray<{ readonly __typename?: 'Tariff_Benefits', readonly id: string, readonly value: string }> };

export type TestFragmentFragment = { readonly __typename?: 'Test', readonly id: number, readonly title: string, readonly description: string, readonly questions: ReadonlyArray<{ readonly __typename?: 'Question', readonly id: number, readonly questionText: string, readonly questionType: Question_QuestionType, readonly textAnswer: string, readonly createdAt: any, readonly answers: ReadonlyArray<{ readonly __typename?: 'Question_Answers', readonly id: string, readonly label: string, readonly isCorrect: boolean, readonly value: string }>, readonly matchingPairs: ReadonlyArray<{ readonly __typename?: 'Question_MatchingPairs', readonly id: string, readonly left: string, readonly right: string }> }> };

export type GetHomePageQueryVariables = Exact<{ [key: string]: never; }>;


export type GetHomePageQuery = { readonly __typename?: 'Query', readonly HomePage: { readonly __typename?: 'HomePage', readonly mainOfferBanner: { readonly __typename?: 'HomePage_MainOfferBanner', readonly title: string, readonly description: string, readonly label: string, readonly options: ReadonlyArray<{ readonly __typename?: 'HomePage_MainOfferBanner_Options', readonly text: string, readonly id: string }> }, readonly aboutProjectBanner: { readonly __typename?: 'HomePage_AboutProjectBanner', readonly title: string, readonly subtitle: string, readonly description: string }, readonly diagnosticTestBanner: { readonly __typename?: 'HomePage_DiagnosticTestBanner', readonly title: string, readonly subtitle: string, readonly label: string }, readonly featuredTest: { readonly __typename?: 'Test', readonly id: number, readonly title: string, readonly description: string, readonly questions: ReadonlyArray<{ readonly __typename?: 'Question', readonly id: number, readonly questionText: string, readonly questionType: Question_QuestionType, readonly textAnswer: string, readonly createdAt: any, readonly answers: ReadonlyArray<{ readonly __typename?: 'Question_Answers', readonly id: string, readonly label: string, readonly isCorrect: boolean, readonly value: string }>, readonly matchingPairs: ReadonlyArray<{ readonly __typename?: 'Question_MatchingPairs', readonly id: string, readonly left: string, readonly right: string }> }> } } };

export type GetPostBySlugQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type GetPostBySlugQuery = { readonly __typename?: 'Query', readonly Posts: { readonly __typename?: 'Posts', readonly docs: ReadonlyArray<{ readonly __typename?: 'Post', readonly id: number, readonly slug: string, readonly title: string, readonly description: string, readonly content: any, readonly publishedAt: any, readonly image: { readonly __typename?: 'Media', readonly url: string, readonly alt: string }, readonly categories: ReadonlyArray<{ readonly __typename?: 'Exam', readonly title: string }>, readonly relatedPosts: ReadonlyArray<{ readonly __typename?: 'Post', readonly id: number }> }> } };

export type GetPostListQueryVariables = Exact<{
  limit: Scalars['Int']['input'];
  page: Scalars['Int']['input'];
}>;


export type GetPostListQuery = { readonly __typename?: 'Query', readonly Posts: { readonly __typename?: 'Posts', readonly hasNextPage: boolean, readonly hasPrevPage: boolean, readonly limit: number, readonly nextPage: number, readonly page: number, readonly pagingCounter: number, readonly prevPage: number, readonly totalDocs: number, readonly totalPages: number, readonly docs: ReadonlyArray<{ readonly __typename?: 'Post', readonly id: number, readonly slug: string, readonly title: string, readonly description: string, readonly image: { readonly __typename?: 'Media', readonly id: number, readonly alt: string, readonly url: string }, readonly categories: ReadonlyArray<{ readonly __typename?: 'Exam', readonly title: string }> }> } };

export type GetPurchaseByIdQueryVariables = Exact<{
  userId: InputMaybe<Scalars['JSON']['input']>;
  courseId: InputMaybe<Scalars['JSON']['input']>;
}>;


export type GetPurchaseByIdQuery = { readonly __typename?: 'Query', readonly Purchases: { readonly __typename?: 'Purchases', readonly docs: ReadonlyArray<{ readonly __typename?: 'Purchase', readonly id: number, readonly pricePaid: number, readonly user: { readonly __typename?: 'User', readonly email: any, readonly id: number }, readonly tariff: { readonly __typename?: 'Tariff', readonly id: number, readonly title: string, readonly price: number } }> } };

export type GetPurchasesCoursesVideosQueryVariables = Exact<{
  userId: InputMaybe<Scalars['JSON']['input']>;
}>;


export type GetPurchasesCoursesVideosQuery = { readonly __typename?: 'Query', readonly Purchases: { readonly __typename?: 'Purchases', readonly docs: ReadonlyArray<{ readonly __typename?: 'Purchase', readonly course: { readonly __typename?: 'Course', readonly id: number, readonly kinescopeVideos: any } }> } };

export type UpdatePurchasesStatusMutationVariables = Exact<{
  id: Scalars['Int']['input'];
  status: InputMaybe<PurchaseUpdate_Status_MutationInput>;
}>;


export type UpdatePurchasesStatusMutation = { readonly __typename?: 'Mutation', readonly updatePurchase: { readonly __typename?: 'Purchase', readonly id: number, readonly status: Purchase_Status } };

export type GetRecomendationsQueryVariables = Exact<{
  userId: Scalars['Int']['input'];
}>;


export type GetRecomendationsQuery = { readonly __typename?: 'Query', readonly GetUserRecommendations: ReadonlyArray<{ readonly __typename?: 'Recommendation', readonly id: string, readonly title: string, readonly description: string }> };

export type GetTaraffisQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTaraffisQuery = { readonly __typename?: 'Query', readonly Tariffs: { readonly __typename?: 'Tariffs', readonly docs: ReadonlyArray<{ readonly __typename?: 'Tariff', readonly id: number, readonly title: string, readonly price: number, readonly description: string, readonly benefits: ReadonlyArray<{ readonly __typename?: 'Tariff_Benefits', readonly id: string, readonly value: string }> }> } };

export type CreateTestResultMutationVariables = Exact<{
  userId: InputMaybe<Scalars['Int']['input']>;
  testId: InputMaybe<Scalars['Int']['input']>;
}>;


export type CreateTestResultMutation = { readonly __typename?: 'Mutation', readonly createTestResult: { readonly __typename?: 'TestResult', readonly id: number } };

export type GetByIdTestResultQueryVariables = Exact<{
  userId: InputMaybe<Scalars['JSON']['input']>;
  testId: InputMaybe<Scalars['JSON']['input']>;
}>;


export type GetByIdTestResultQuery = { readonly __typename?: 'Query', readonly TestResults: { readonly __typename?: 'TestResults', readonly docs: ReadonlyArray<{ readonly __typename?: 'TestResult', readonly id: number, readonly status: TestResult_Status, readonly answers: ReadonlyArray<{ readonly __typename?: 'TestResult_Answers', readonly id: string, readonly userAnswer: any, readonly isCorrect: boolean, readonly question: { readonly __typename?: 'Question', readonly id: number } }> }> } };

export type GetUserByIdTestResultQueryVariables = Exact<{
  userId: InputMaybe<Scalars['JSON']['input']>;
}>;


export type GetUserByIdTestResultQuery = { readonly __typename?: 'Query', readonly TestResults: { readonly __typename?: 'TestResults', readonly docs: ReadonlyArray<{ readonly __typename?: 'TestResult', readonly status: TestResult_Status, readonly test: { readonly __typename?: 'Test', readonly id: number } }> } };

export type GetNotCorrectedAnswersQueryVariables = Exact<{
  userId: InputMaybe<Scalars['JSON']['input']>;
}>;


export type GetNotCorrectedAnswersQuery = { readonly __typename?: 'Query', readonly TestResults: { readonly __typename?: 'TestResults', readonly docs: ReadonlyArray<{ readonly __typename?: 'TestResult', readonly answers: ReadonlyArray<{ readonly __typename?: 'TestResult_Answers', readonly isCorrect: boolean, readonly question: { readonly __typename?: 'Question', readonly questionText: string, readonly recommendation: { readonly __typename?: 'Recomendation', readonly id: number } } }> }> } };

export type GetRecommendationsByIdsQueryVariables = Exact<{
  where: InputMaybe<Recomendation_Where>;
}>;


export type GetRecommendationsByIdsQuery = { readonly __typename?: 'Query', readonly Recomendations: { readonly __typename?: 'Recomendations', readonly docs: ReadonlyArray<{ readonly __typename?: 'Recomendation', readonly id: number, readonly title: string, readonly description: any }> } };

export type GetTestResHistoryQueryVariables = Exact<{
  userId: InputMaybe<Scalars['JSON']['input']>;
  testIds: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']['input']>> | InputMaybe<Scalars['JSON']['input']>>;
}>;


export type GetTestResHistoryQuery = { readonly __typename?: 'Query', readonly TestResults: { readonly __typename?: 'TestResults', readonly docs: ReadonlyArray<{ readonly __typename?: 'TestResult', readonly status: TestResult_Status, readonly test: { readonly __typename?: 'Test', readonly id: number, readonly title: string } }> } };

export type GetAllTestsByTitlesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllTestsByTitlesQuery = { readonly __typename?: 'Query', readonly Tests: { readonly __typename?: 'Tests', readonly docs: ReadonlyArray<{ readonly __typename?: 'Test', readonly id: number, readonly title: string }> } };

export type GetAllUserTestsQueryVariables = Exact<{
  userId: InputMaybe<Scalars['Int']['input']>;
  status: InputMaybe<TestResult_Status_All>;
  examId: InputMaybe<Scalars['Int']['input']>;
  subjectId: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetAllUserTestsQuery = { readonly __typename?: 'Query', readonly GetUserTests: { readonly __typename?: 'PaginatedTestsWithStatus', readonly page: number, readonly totalPages: number, readonly totalDocs: number, readonly docs: ReadonlyArray<{ readonly __typename?: 'TestWithStatus', readonly id: string, readonly title: string, readonly description: string, readonly status: string }> } };

export type GetByIdTestQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type GetByIdTestQuery = { readonly __typename?: 'Query', readonly Test: { readonly __typename?: 'Test', readonly id: number, readonly title: string, readonly description: string, readonly questions: ReadonlyArray<{ readonly __typename?: 'Question', readonly id: number, readonly questionText: string, readonly questionType: Question_QuestionType, readonly textAnswer: string, readonly createdAt: any, readonly answers: ReadonlyArray<{ readonly __typename?: 'Question_Answers', readonly id: string, readonly label: string, readonly isCorrect: boolean, readonly value: string }>, readonly matchingPairs: ReadonlyArray<{ readonly __typename?: 'Question_MatchingPairs', readonly id: string, readonly left: string, readonly right: string }> }> } };

export type GetTestsByIdsQueryVariables = Exact<{
  limit: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  examId: InputMaybe<Scalars['JSON']['input']>;
  subjectId: InputMaybe<Scalars['JSON']['input']>;
}>;


export type GetTestsByIdsQuery = { readonly __typename?: 'Query', readonly Tests: { readonly __typename?: 'Tests', readonly page: number, readonly totalPages: number, readonly totalDocs: number, readonly docs: ReadonlyArray<{ readonly __typename?: 'Test', readonly id: number, readonly title: string, readonly description: string, readonly questions: ReadonlyArray<{ readonly __typename?: 'Question', readonly id: number, readonly questionText: string, readonly questionType: Question_QuestionType, readonly textAnswer: string, readonly createdAt: any, readonly answers: ReadonlyArray<{ readonly __typename?: 'Question_Answers', readonly id: string, readonly label: string, readonly isCorrect: boolean, readonly value: string }>, readonly matchingPairs: ReadonlyArray<{ readonly __typename?: 'Question_MatchingPairs', readonly id: string, readonly left: string, readonly right: string }> }> }> } };

export type UpdateTestResultMutationVariables = Exact<{
  testResId: Scalars['Int']['input'];
  answers: InputMaybe<ReadonlyArray<MutationTestResultUpdate_AnswersInput> | MutationTestResultUpdate_AnswersInput>;
  status: InputMaybe<TestResultUpdate_Status_MutationInput>;
}>;


export type UpdateTestResultMutation = { readonly __typename?: 'Mutation', readonly updateTestResult: { readonly __typename?: 'TestResult', readonly id: number, readonly status: TestResult_Status } };

export type CreateUserMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  role: User_Role_MutationInput;
  signupMethod: User_SignupMethod_MutationInput;
  name: InputMaybe<Scalars['String']['input']>;
}>;


export type CreateUserMutation = { readonly __typename?: 'Mutation', readonly createUser: { readonly __typename?: 'User', readonly id: number, readonly email: any, readonly isVerified: boolean } };

export type GetUserByEmailQueryVariables = Exact<{
  email: Scalars['EmailAddress']['input'];
}>;


export type GetUserByEmailQuery = { readonly __typename?: 'Query', readonly Users: { readonly __typename?: 'Users', readonly totalDocs: number, readonly docs: ReadonlyArray<{ readonly __typename?: 'User', readonly id: number, readonly email: any, readonly password: string, readonly signupMethod: User_SignupMethod, readonly role: User_Role, readonly isVerified: boolean, readonly name: string, readonly avatar: { readonly __typename?: 'Media', readonly id: number, readonly url: string, readonly alt: string } }> } };

export type UpdateUserEmailMutationVariables = Exact<{
  id: Scalars['Int']['input'];
  email: InputMaybe<Scalars['String']['input']>;
}>;


export type UpdateUserEmailMutation = { readonly __typename?: 'Mutation', readonly updateUser: { readonly __typename?: 'User', readonly id: number, readonly email: any } };

export type UpdateUserPasswordMutationVariables = Exact<{
  id: Scalars['Int']['input'];
  password: InputMaybe<Scalars['String']['input']>;
}>;


export type UpdateUserPasswordMutation = { readonly __typename?: 'Mutation', readonly updateUser: { readonly __typename?: 'User', readonly id: number, readonly email: any } };

export type UpdateUserVerifiedMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type UpdateUserVerifiedMutation = { readonly __typename?: 'Mutation', readonly updateUser: { readonly __typename?: 'User', readonly id: number, readonly email: any } };

export type UpdateUserNameMutationVariables = Exact<{
  id: Scalars['Int']['input'];
  name: InputMaybe<Scalars['String']['input']>;
}>;


export type UpdateUserNameMutation = { readonly __typename?: 'Mutation', readonly updateUser: { readonly __typename?: 'User', readonly id: number, readonly email: any } };

export const MediaFragmentFragmentDoc = gql`
    fragment MediaFragment on Media {
  id
  url
  alt
}
    `;
export const ExamFragmentFragmentDoc = gql`
    fragment ExamFragment on Exam {
  id
  title
}
    `;
export const SubjectsFragmentFragmentDoc = gql`
    fragment SubjectsFragment on Subject {
  id
  title
}
    `;
export const CourseFragmentFragmentDoc = gql`
    fragment CourseFragment on Course {
  id
  title
  description
  price
  discount
  slug
  banner {
    ...MediaFragment
  }
  exams {
    ...ExamFragment
  }
  subjects {
    ...SubjectsFragment
  }
  isFree
  totalDuration
  previewVideoId
}
    ${MediaFragmentFragmentDoc}
${ExamFragmentFragmentDoc}
${SubjectsFragmentFragmentDoc}`;
export const PostFragmentFragmentDoc = gql`
    fragment PostFragment on Post {
  id
  slug
  title
  description
  image {
    url
    alt
  }
  content
  categories {
    title
  }
  relatedPosts {
    id
  }
  publishedAt
}
    `;
export const RecomendationFragmentFragmentDoc = gql`
    fragment RecomendationFragment on Recomendation {
  id
  title
  description
}
    `;
export const TariffFragmentFragmentDoc = gql`
    fragment TariffFragment on Tariff {
  id
  title
  price
  description
  benefits {
    id
    value
  }
}
    `;
export const QuestionFragmentFragmentDoc = gql`
    fragment QuestionFragment on Question {
  id
  questionText
  questionType
  answers {
    id
    label
    isCorrect
    value
  }
  matchingPairs {
    id
    left
    right
  }
  textAnswer
  createdAt
}
    `;
export const TestFragmentFragmentDoc = gql`
    fragment TestFragment on Test {
  id
  title
  description
  questions {
    ...QuestionFragment
  }
}
    ${QuestionFragmentFragmentDoc}`;
export const GetAllExamsDocument = gql`
    query GetAllExams {
  Exams {
    docs {
      ...ExamFragment
    }
  }
}
    ${ExamFragmentFragmentDoc}`;
export const GetAllSubjectsDocument = gql`
    query GetAllSubjects {
  Subjects {
    docs {
      ...SubjectsFragment
    }
  }
}
    ${SubjectsFragmentFragmentDoc}`;
export const GetAllCoursesDocument = gql`
    query GetAllCourses($exams: Course_exams_operator, $subject: Course_subjects_operator, $page: Int!) {
  Courses(where: {exams: $exams, subjects: $subject}, limit: 6, page: $page) {
    docs {
      ...CourseFragment
    }
    page
    totalPages
  }
}
    ${CourseFragmentFragmentDoc}`;
export const GetCourseBySlugDocument = gql`
    query GetCourseBySlug($slug: String) {
  Courses(where: {slug: {equals: $slug}}) {
    docs {
      kinescopeVideos
      ...CourseFragment
    }
  }
}
    ${CourseFragmentFragmentDoc}`;
export const GetCourseSlugByIdDocument = gql`
    query GetCourseSlugById($id: Int!) {
  Course(id: $id) {
    slug
  }
}
    `;
export const GetFaGsDocument = gql`
    query GetFAGs {
  Faqs {
    docs {
      id
      question
      answer
    }
  }
}
    `;
export const GetHomePageDocument = gql`
    query GetHomePage {
  HomePage {
    mainOfferBanner {
      title
      description
      label
      options {
        text
        id
      }
    }
    aboutProjectBanner {
      title
      subtitle
      description
    }
    diagnosticTestBanner {
      title
      subtitle
      label
    }
    featuredTest {
      ...TestFragment
    }
  }
}
    ${TestFragmentFragmentDoc}`;
export const GetPostBySlugDocument = gql`
    query GetPostBySlug($slug: String!) {
  Posts(where: {slug: {equals: $slug}}) {
    docs {
      ...PostFragment
    }
  }
}
    ${PostFragmentFragmentDoc}`;
export const GetPostListDocument = gql`
    query GetPostList($limit: Int!, $page: Int!) {
  Posts(limit: $limit, page: $page, where: {_status: {equals: published}}) {
    docs {
      id
      slug
      title
      description
      image {
        id
        alt
        url
      }
      categories {
        title
      }
    }
    hasNextPage
    hasPrevPage
    limit
    nextPage
    page
    pagingCounter
    prevPage
    totalDocs
    totalPages
  }
}
    `;
export const GetPurchaseByIdDocument = gql`
    query GetPurchaseById($userId: JSON, $courseId: JSON) {
  Purchases(where: {user: {equals: $userId}, course: {equals: $courseId}}) {
    docs {
      id
      pricePaid
      user {
        email
        id
      }
      tariff {
        id
        title
        price
      }
    }
  }
}
    `;
export const GetPurchasesCoursesVideosDocument = gql`
    query GetPurchasesCoursesVideos($userId: JSON) {
  Purchases(where: {user: {equals: $userId}}) {
    docs {
      course {
        id
        kinescopeVideos
      }
    }
  }
}
    `;
export const UpdatePurchasesStatusDocument = gql`
    mutation UpdatePurchasesStatus($id: Int!, $status: PurchaseUpdate_status_MutationInput) {
  updatePurchase(id: $id, data: {status: $status}) {
    id
    status
  }
}
    `;
export const GetRecomendationsDocument = gql`
    query GetRecomendations($userId: Int!) {
  GetUserRecommendations(userId: $userId) {
    id
    title
    description
  }
}
    `;
export const GetTaraffisDocument = gql`
    query GetTaraffis {
  Tariffs {
    docs {
      ...TariffFragment
    }
  }
}
    ${TariffFragmentFragmentDoc}`;
export const CreateTestResultDocument = gql`
    mutation CreateTestResult($userId: Int, $testId: Int) {
  createTestResult(data: {user: $userId, test: $testId, status: in_progress}) {
    id
  }
}
    `;
export const GetByIdTestResultDocument = gql`
    query GetByIdTestResult($userId: JSON, $testId: JSON) {
  TestResults(where: {user: {equals: $userId}, test: {equals: $testId}}) {
    docs {
      id
      answers {
        id
        userAnswer
        question {
          id
        }
        isCorrect
      }
      status
    }
  }
}
    `;
export const GetUserByIdTestResultDocument = gql`
    query GetUserByIdTestResult($userId: JSON) {
  TestResults(where: {user: {equals: $userId}}) {
    docs {
      test {
        id
      }
      status
    }
  }
}
    `;
export const GetNotCorrectedAnswersDocument = gql`
    query GetNotCorrectedAnswers($userId: JSON) {
  TestResults(
    where: {user: {equals: $userId}, answers__isCorrect: {equals: false}}
  ) {
    docs {
      answers {
        question {
          questionText
          recommendation {
            id
          }
        }
        isCorrect
      }
    }
  }
}
    `;
export const GetRecommendationsByIdsDocument = gql`
    query GetRecommendationsByIds($where: Recomendation_where) {
  Recomendations(where: $where) {
    docs {
      id
      title
      description
    }
  }
}
    `;
export const GetTestResHistoryDocument = gql`
    query GetTestResHistory($userId: JSON, $testIds: [JSON]) {
  TestResults(where: {user: {equals: $userId}, test: {in: $testIds}}) {
    docs {
      status
      test {
        id
        title
      }
    }
  }
}
    `;
export const GetAllTestsByTitlesDocument = gql`
    query GetAllTestsByTitles {
  Tests {
    docs {
      id
      title
    }
  }
}
    `;
export const GetAllUserTestsDocument = gql`
    query GetAllUserTests($userId: Int, $status: TestResult_Status_ALL, $examId: Int, $subjectId: Int) {
  GetUserTests(
    userId: $userId
    status: $status
    examId: $examId
    subjectId: $subjectId
  ) {
    docs {
      id
      title
      description
      status
    }
    page
    totalPages
    totalDocs
  }
}
    `;
export const GetByIdTestDocument = gql`
    query GetByIdTest($id: Int!) {
  Test(id: $id) {
    ...TestFragment
  }
}
    ${TestFragmentFragmentDoc}`;
export const GetTestsByIdsDocument = gql`
    query GetTestsByIds($limit: Int, $page: Int, $examId: JSON, $subjectId: JSON) {
  Tests(
    where: {exam: {equals: $examId}, subjects: {equals: $subjectId}}
    limit: $limit
    page: $page
  ) {
    docs {
      ...TestFragment
    }
    page
    totalPages
    totalDocs
  }
}
    ${TestFragmentFragmentDoc}`;
export const UpdateTestResultDocument = gql`
    mutation UpdateTestResult($testResId: Int!, $answers: [mutationTestResultUpdate_AnswersInput!], $status: TestResultUpdate_status_MutationInput) {
  updateTestResult(id: $testResId, data: {answers: $answers, status: $status}) {
    id
    status
  }
}
    `;
export const CreateUserDocument = gql`
    mutation CreateUser($email: String!, $password: String!, $role: User_role_MutationInput!, $signupMethod: User_signupMethod_MutationInput!, $name: String) {
  createUser(
    data: {email: $email, password: $password, role: $role, signupMethod: $signupMethod, name: $name}
  ) {
    id
    email
    isVerified
  }
}
    `;
export const GetUserByEmailDocument = gql`
    query GetUserByEmail($email: EmailAddress!) {
  Users(where: {email: {equals: $email}}) {
    docs {
      id
      email
      password
      signupMethod
      role
      isVerified
      name
      avatar {
        ...MediaFragment
      }
    }
    totalDocs
  }
}
    ${MediaFragmentFragmentDoc}`;
export const UpdateUserEmailDocument = gql`
    mutation UpdateUserEmail($id: Int!, $email: String) {
  updateUser(id: $id, data: {email: $email}) {
    id
    email
  }
}
    `;
export const UpdateUserPasswordDocument = gql`
    mutation UpdateUserPassword($id: Int!, $password: String) {
  updateUser(id: $id, data: {password: $password}) {
    id
    email
  }
}
    `;
export const UpdateUserVerifiedDocument = gql`
    mutation UpdateUserVerified($id: Int!) {
  updateUser(id: $id, data: {isVerified: true}) {
    id
    email
  }
}
    `;
export const UpdateUserNameDocument = gql`
    mutation UpdateUserName($id: Int!, $name: String) {
  updateUser(id: $id, data: {name: $name}) {
    id
    email
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    GetAllExams(variables?: GetAllExamsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<GetAllExamsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetAllExamsQuery>({ document: GetAllExamsDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'GetAllExams', 'query', variables);
    },
    GetAllSubjects(variables?: GetAllSubjectsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<GetAllSubjectsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetAllSubjectsQuery>({ document: GetAllSubjectsDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'GetAllSubjects', 'query', variables);
    },
    GetAllCourses(variables: GetAllCoursesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<GetAllCoursesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetAllCoursesQuery>({ document: GetAllCoursesDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'GetAllCourses', 'query', variables);
    },
    GetCourseBySlug(variables?: GetCourseBySlugQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<GetCourseBySlugQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetCourseBySlugQuery>({ document: GetCourseBySlugDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'GetCourseBySlug', 'query', variables);
    },
    GetCourseSlugById(variables: GetCourseSlugByIdQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<GetCourseSlugByIdQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetCourseSlugByIdQuery>({ document: GetCourseSlugByIdDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'GetCourseSlugById', 'query', variables);
    },
    GetFAGs(variables?: GetFaGsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<GetFaGsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetFaGsQuery>({ document: GetFaGsDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'GetFAGs', 'query', variables);
    },
    GetHomePage(variables?: GetHomePageQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<GetHomePageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetHomePageQuery>({ document: GetHomePageDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'GetHomePage', 'query', variables);
    },
    GetPostBySlug(variables: GetPostBySlugQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<GetPostBySlugQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetPostBySlugQuery>({ document: GetPostBySlugDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'GetPostBySlug', 'query', variables);
    },
    GetPostList(variables: GetPostListQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<GetPostListQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetPostListQuery>({ document: GetPostListDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'GetPostList', 'query', variables);
    },
    GetPurchaseById(variables?: GetPurchaseByIdQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<GetPurchaseByIdQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetPurchaseByIdQuery>({ document: GetPurchaseByIdDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'GetPurchaseById', 'query', variables);
    },
    GetPurchasesCoursesVideos(variables?: GetPurchasesCoursesVideosQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<GetPurchasesCoursesVideosQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetPurchasesCoursesVideosQuery>({ document: GetPurchasesCoursesVideosDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'GetPurchasesCoursesVideos', 'query', variables);
    },
    UpdatePurchasesStatus(variables: UpdatePurchasesStatusMutationVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<UpdatePurchasesStatusMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdatePurchasesStatusMutation>({ document: UpdatePurchasesStatusDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'UpdatePurchasesStatus', 'mutation', variables);
    },
    GetRecomendations(variables: GetRecomendationsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<GetRecomendationsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetRecomendationsQuery>({ document: GetRecomendationsDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'GetRecomendations', 'query', variables);
    },
    GetTaraffis(variables?: GetTaraffisQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<GetTaraffisQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetTaraffisQuery>({ document: GetTaraffisDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'GetTaraffis', 'query', variables);
    },
    CreateTestResult(variables?: CreateTestResultMutationVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<CreateTestResultMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateTestResultMutation>({ document: CreateTestResultDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'CreateTestResult', 'mutation', variables);
    },
    GetByIdTestResult(variables?: GetByIdTestResultQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<GetByIdTestResultQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetByIdTestResultQuery>({ document: GetByIdTestResultDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'GetByIdTestResult', 'query', variables);
    },
    GetUserByIdTestResult(variables?: GetUserByIdTestResultQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<GetUserByIdTestResultQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetUserByIdTestResultQuery>({ document: GetUserByIdTestResultDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'GetUserByIdTestResult', 'query', variables);
    },
    GetNotCorrectedAnswers(variables?: GetNotCorrectedAnswersQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<GetNotCorrectedAnswersQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetNotCorrectedAnswersQuery>({ document: GetNotCorrectedAnswersDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'GetNotCorrectedAnswers', 'query', variables);
    },
    GetRecommendationsByIds(variables?: GetRecommendationsByIdsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<GetRecommendationsByIdsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetRecommendationsByIdsQuery>({ document: GetRecommendationsByIdsDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'GetRecommendationsByIds', 'query', variables);
    },
    GetTestResHistory(variables?: GetTestResHistoryQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<GetTestResHistoryQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetTestResHistoryQuery>({ document: GetTestResHistoryDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'GetTestResHistory', 'query', variables);
    },
    GetAllTestsByTitles(variables?: GetAllTestsByTitlesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<GetAllTestsByTitlesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetAllTestsByTitlesQuery>({ document: GetAllTestsByTitlesDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'GetAllTestsByTitles', 'query', variables);
    },
    GetAllUserTests(variables?: GetAllUserTestsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<GetAllUserTestsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetAllUserTestsQuery>({ document: GetAllUserTestsDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'GetAllUserTests', 'query', variables);
    },
    GetByIdTest(variables: GetByIdTestQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<GetByIdTestQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetByIdTestQuery>({ document: GetByIdTestDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'GetByIdTest', 'query', variables);
    },
    GetTestsByIds(variables?: GetTestsByIdsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<GetTestsByIdsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetTestsByIdsQuery>({ document: GetTestsByIdsDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'GetTestsByIds', 'query', variables);
    },
    UpdateTestResult(variables: UpdateTestResultMutationVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<UpdateTestResultMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateTestResultMutation>({ document: UpdateTestResultDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'UpdateTestResult', 'mutation', variables);
    },
    CreateUser(variables: CreateUserMutationVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<CreateUserMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateUserMutation>({ document: CreateUserDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'CreateUser', 'mutation', variables);
    },
    GetUserByEmail(variables: GetUserByEmailQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<GetUserByEmailQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetUserByEmailQuery>({ document: GetUserByEmailDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'GetUserByEmail', 'query', variables);
    },
    UpdateUserEmail(variables: UpdateUserEmailMutationVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<UpdateUserEmailMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateUserEmailMutation>({ document: UpdateUserEmailDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'UpdateUserEmail', 'mutation', variables);
    },
    UpdateUserPassword(variables: UpdateUserPasswordMutationVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<UpdateUserPasswordMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateUserPasswordMutation>({ document: UpdateUserPasswordDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'UpdateUserPassword', 'mutation', variables);
    },
    UpdateUserVerified(variables: UpdateUserVerifiedMutationVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<UpdateUserVerifiedMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateUserVerifiedMutation>({ document: UpdateUserVerifiedDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'UpdateUserVerified', 'mutation', variables);
    },
    UpdateUserName(variables: UpdateUserNameMutationVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<UpdateUserNameMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateUserNameMutation>({ document: UpdateUserNameDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'UpdateUserName', 'mutation', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;