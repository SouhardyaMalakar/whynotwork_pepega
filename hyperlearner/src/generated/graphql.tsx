import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Course = {
  __typename?: 'Course';
  author: Scalars['String'];
  body?: Maybe<Scalars['String']>;
  id: Scalars['Float'];
  name: Scalars['String'];
  parts: Scalars['Float'];
  subject: Scalars['String'];
};

export type CourseDetails = {
  author: Scalars['String'];
  body: Scalars['String'];
  name: Scalars['String'];
  parts: Scalars['Float'];
  subject: Scalars['String'];
};

export type FlashCard = {
  __typename?: 'FlashCard';
  dataBack: Scalars['String'];
  dataFront: Scalars['String'];
  id: Scalars['Float'];
};

export type FlashCardDetails = {
  dataBack: Scalars['String'];
  dataFront: Scalars['String'];
  username: Scalars['String'];
};

export type LoginInput = {
  password: Scalars['String'];
  username: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createCourse?: Maybe<Course>;
  createFlashCard?: Maybe<FlashCard>;
  createStudent?: Maybe<Student>;
  createStudentCourse?: Maybe<StudentCourse>;
  login: Student;
};


export type MutationCreateCourseArgs = {
  details: CourseDetails;
};


export type MutationCreateFlashCardArgs = {
  details: FlashCardDetails;
};


export type MutationCreateStudentArgs = {
  details: StudentDetails;
};


export type MutationCreateStudentCourseArgs = {
  details: StudentCourseDetails;
};


export type MutationLoginArgs = {
  details: LoginInput;
};

export type Query = {
  __typename?: 'Query';
  getAllCourses: Array<Course>;
  getAllStudents: Array<Student>;
  getCourseStudent: Array<Student>;
  getStudentCourses: Array<Course>;
  getStudentFlashCards: Array<FlashCard>;
  me?: Maybe<Student>;
};


export type QueryGetCourseStudentArgs = {
  id: Scalars['Float'];
};


export type QueryGetStudentCoursesArgs = {
  Username: Scalars['String'];
};


export type QueryGetStudentFlashCardsArgs = {
  username: Scalars['String'];
};

export type Student = {
  __typename?: 'Student';
  first_name: Scalars['String'];
  last_name: Scalars['String'];
  mobile_num: Scalars['String'];
  username: Scalars['String'];
};

export type StudentCourse = {
  __typename?: 'StudentCourse';
  progress?: Maybe<Scalars['Float']>;
};

export type StudentCourseDetails = {
  id: Scalars['Float'];
  username: Scalars['String'];
};

export type StudentDetails = {
  first_name: Scalars['String'];
  last_name: Scalars['String'];
  mobile_num: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type LoginMutationVariables = Exact<{
  details: LoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'Student', mobile_num: string, last_name: string, username: string } };

export type CreateStudentMutationMutationVariables = Exact<{
  details: StudentDetails;
}>;


export type CreateStudentMutationMutation = { __typename?: 'Mutation', createStudent?: Maybe<{ __typename?: 'Student', mobile_num: string, first_name: string, last_name: string, username: string }> };

export type AllCoursesQueryVariables = Exact<{ [key: string]: never; }>;


export type AllCoursesQuery = { __typename?: 'Query', getAllCourses: Array<{ __typename?: 'Course', id: number, name: string, subject: string, author: string, parts: number, body?: Maybe<string> }> };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me?: Maybe<{ __typename?: 'Student', mobile_num: string, first_name: string, last_name: string }> };


export const LoginDocument = gql`
    mutation Login($details: LoginInput!) {
  login(details: $details) {
    mobile_num
    last_name
    username
  }
}
    `;

export function useLoginMutation() {
  return Urql.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument);
};
export const CreateStudentMutationDocument = gql`
    mutation CreateStudentMutation($details: StudentDetails!) {
  createStudent(details: $details) {
    mobile_num
    first_name
    last_name
    username
  }
}
    `;

export function useCreateStudentMutationMutation() {
  return Urql.useMutation<CreateStudentMutationMutation, CreateStudentMutationMutationVariables>(CreateStudentMutationDocument);
};
export const AllCoursesDocument = gql`
    query AllCourses {
  getAllCourses {
    id
    name
    subject
    author
    parts
    body
  }
}
    `;

export function useAllCoursesQuery(options: Omit<Urql.UseQueryArgs<AllCoursesQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<AllCoursesQuery>({ query: AllCoursesDocument, ...options });
};
export const MeDocument = gql`
    query Me {
  me {
    mobile_num
    first_name
    last_name
  }
}
    `;

export function useMeQuery(options: Omit<Urql.UseQueryArgs<MeQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<MeQuery>({ query: MeDocument, ...options });
};