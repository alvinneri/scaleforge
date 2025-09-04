/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "\n  fragment MemberFields on Member {\n    id\n    name\n    emailAddress\n    mobileNumber\n    domain\n    status\n    verificationStatus\n    dateTimeCreated\n    dateTimeLastActive\n    wallet {\n      balance\n    }\n  }\n": typeof types.MemberFieldsFragmentDoc,
    "\n  query GetMembers($first: Int, $after: Cursor, $filter: MemberFilterInput) {\n    members(first: $first, after: $after, filter: $filter) {\n      edges {\n        cursor\n        node {\n          ...MemberFields\n        }\n      }\n      pageInfo {\n        endCursor\n        hasNextPage\n      }\n    }\n  }\n": typeof types.GetMembersDocument,
    "\n  query GetMembersByName($search: String!) {\n    membersByName(search: $search, first: 20) {\n      id\n      name\n    }\n  }\n": typeof types.GetMembersByNameDocument,
    "\n  query GetMembersByEmailAddress($search: String!) {\n    membersByEmailAddress(search: $search, first: 20) {\n      id\n      name\n      emailAddress\n    }\n  }\n": typeof types.GetMembersByEmailAddressDocument,
    "\n  query GetMembersByMobileNumberSearch($search: String!) {\n    membersByMobileNumber(search: $search, first: 20) {\n      id\n      name\n      mobileNumber\n    }\n  }\n": typeof types.GetMembersByMobileNumberSearchDocument,
    "\n  query GetMembersByDomainSearch($search: String!) {\n    membersByDomain(search: $search, first: 20) {\n      id\n      name\n      domain\n    }\n  }\n": typeof types.GetMembersByDomainSearchDocument,
    "\n  query GetMembersByEmail($email: String!, $first: Int, $after: Cursor) {\n    members(filter: { emailAddress: { contains: $email } }, first: $first, after: $after) {\n      edges {\n        cursor\n        node {\n          ...MemberFields\n        }\n      }\n      pageInfo {\n        endCursor\n        hasNextPage\n      }\n    }\n  }\n": typeof types.GetMembersByEmailDocument,
    "\n  query GetMembersByMobileNumber($mobileNumber: String!, $first: Int, $after: Cursor) {\n    members(filter: { mobileNumber: { contains: $mobileNumber } }, first: $first, after: $after) {\n      edges {\n        cursor\n        node {\n          ...MemberFields\n        }\n      }\n      pageInfo {\n        endCursor\n        hasNextPage\n      }\n    }\n  }\n": typeof types.GetMembersByMobileNumberDocument,
    "\n  query GetMembersByDomain($domain: String!, $first: Int, $after: Cursor) {\n    members(filter: { domain: { equal: $domain } }, first: $first, after: $after) {\n      edges {\n        cursor\n        node {\n          ...MemberFields\n        }\n      }\n      pageInfo {\n        endCursor\n        hasNextPage\n      }\n    }\n  }\n": typeof types.GetMembersByDomainDocument,
};
const documents: Documents = {
    "\n  fragment MemberFields on Member {\n    id\n    name\n    emailAddress\n    mobileNumber\n    domain\n    status\n    verificationStatus\n    dateTimeCreated\n    dateTimeLastActive\n    wallet {\n      balance\n    }\n  }\n": types.MemberFieldsFragmentDoc,
    "\n  query GetMembers($first: Int, $after: Cursor, $filter: MemberFilterInput) {\n    members(first: $first, after: $after, filter: $filter) {\n      edges {\n        cursor\n        node {\n          ...MemberFields\n        }\n      }\n      pageInfo {\n        endCursor\n        hasNextPage\n      }\n    }\n  }\n": types.GetMembersDocument,
    "\n  query GetMembersByName($search: String!) {\n    membersByName(search: $search, first: 20) {\n      id\n      name\n    }\n  }\n": types.GetMembersByNameDocument,
    "\n  query GetMembersByEmailAddress($search: String!) {\n    membersByEmailAddress(search: $search, first: 20) {\n      id\n      name\n      emailAddress\n    }\n  }\n": types.GetMembersByEmailAddressDocument,
    "\n  query GetMembersByMobileNumberSearch($search: String!) {\n    membersByMobileNumber(search: $search, first: 20) {\n      id\n      name\n      mobileNumber\n    }\n  }\n": types.GetMembersByMobileNumberSearchDocument,
    "\n  query GetMembersByDomainSearch($search: String!) {\n    membersByDomain(search: $search, first: 20) {\n      id\n      name\n      domain\n    }\n  }\n": types.GetMembersByDomainSearchDocument,
    "\n  query GetMembersByEmail($email: String!, $first: Int, $after: Cursor) {\n    members(filter: { emailAddress: { contains: $email } }, first: $first, after: $after) {\n      edges {\n        cursor\n        node {\n          ...MemberFields\n        }\n      }\n      pageInfo {\n        endCursor\n        hasNextPage\n      }\n    }\n  }\n": types.GetMembersByEmailDocument,
    "\n  query GetMembersByMobileNumber($mobileNumber: String!, $first: Int, $after: Cursor) {\n    members(filter: { mobileNumber: { contains: $mobileNumber } }, first: $first, after: $after) {\n      edges {\n        cursor\n        node {\n          ...MemberFields\n        }\n      }\n      pageInfo {\n        endCursor\n        hasNextPage\n      }\n    }\n  }\n": types.GetMembersByMobileNumberDocument,
    "\n  query GetMembersByDomain($domain: String!, $first: Int, $after: Cursor) {\n    members(filter: { domain: { equal: $domain } }, first: $first, after: $after) {\n      edges {\n        cursor\n        node {\n          ...MemberFields\n        }\n      }\n      pageInfo {\n        endCursor\n        hasNextPage\n      }\n    }\n  }\n": types.GetMembersByDomainDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment MemberFields on Member {\n    id\n    name\n    emailAddress\n    mobileNumber\n    domain\n    status\n    verificationStatus\n    dateTimeCreated\n    dateTimeLastActive\n    wallet {\n      balance\n    }\n  }\n"): (typeof documents)["\n  fragment MemberFields on Member {\n    id\n    name\n    emailAddress\n    mobileNumber\n    domain\n    status\n    verificationStatus\n    dateTimeCreated\n    dateTimeLastActive\n    wallet {\n      balance\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetMembers($first: Int, $after: Cursor, $filter: MemberFilterInput) {\n    members(first: $first, after: $after, filter: $filter) {\n      edges {\n        cursor\n        node {\n          ...MemberFields\n        }\n      }\n      pageInfo {\n        endCursor\n        hasNextPage\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetMembers($first: Int, $after: Cursor, $filter: MemberFilterInput) {\n    members(first: $first, after: $after, filter: $filter) {\n      edges {\n        cursor\n        node {\n          ...MemberFields\n        }\n      }\n      pageInfo {\n        endCursor\n        hasNextPage\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetMembersByName($search: String!) {\n    membersByName(search: $search, first: 20) {\n      id\n      name\n    }\n  }\n"): (typeof documents)["\n  query GetMembersByName($search: String!) {\n    membersByName(search: $search, first: 20) {\n      id\n      name\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetMembersByEmailAddress($search: String!) {\n    membersByEmailAddress(search: $search, first: 20) {\n      id\n      name\n      emailAddress\n    }\n  }\n"): (typeof documents)["\n  query GetMembersByEmailAddress($search: String!) {\n    membersByEmailAddress(search: $search, first: 20) {\n      id\n      name\n      emailAddress\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetMembersByMobileNumberSearch($search: String!) {\n    membersByMobileNumber(search: $search, first: 20) {\n      id\n      name\n      mobileNumber\n    }\n  }\n"): (typeof documents)["\n  query GetMembersByMobileNumberSearch($search: String!) {\n    membersByMobileNumber(search: $search, first: 20) {\n      id\n      name\n      mobileNumber\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetMembersByDomainSearch($search: String!) {\n    membersByDomain(search: $search, first: 20) {\n      id\n      name\n      domain\n    }\n  }\n"): (typeof documents)["\n  query GetMembersByDomainSearch($search: String!) {\n    membersByDomain(search: $search, first: 20) {\n      id\n      name\n      domain\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetMembersByEmail($email: String!, $first: Int, $after: Cursor) {\n    members(filter: { emailAddress: { contains: $email } }, first: $first, after: $after) {\n      edges {\n        cursor\n        node {\n          ...MemberFields\n        }\n      }\n      pageInfo {\n        endCursor\n        hasNextPage\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetMembersByEmail($email: String!, $first: Int, $after: Cursor) {\n    members(filter: { emailAddress: { contains: $email } }, first: $first, after: $after) {\n      edges {\n        cursor\n        node {\n          ...MemberFields\n        }\n      }\n      pageInfo {\n        endCursor\n        hasNextPage\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetMembersByMobileNumber($mobileNumber: String!, $first: Int, $after: Cursor) {\n    members(filter: { mobileNumber: { contains: $mobileNumber } }, first: $first, after: $after) {\n      edges {\n        cursor\n        node {\n          ...MemberFields\n        }\n      }\n      pageInfo {\n        endCursor\n        hasNextPage\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetMembersByMobileNumber($mobileNumber: String!, $first: Int, $after: Cursor) {\n    members(filter: { mobileNumber: { contains: $mobileNumber } }, first: $first, after: $after) {\n      edges {\n        cursor\n        node {\n          ...MemberFields\n        }\n      }\n      pageInfo {\n        endCursor\n        hasNextPage\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetMembersByDomain($domain: String!, $first: Int, $after: Cursor) {\n    members(filter: { domain: { equal: $domain } }, first: $first, after: $after) {\n      edges {\n        cursor\n        node {\n          ...MemberFields\n        }\n      }\n      pageInfo {\n        endCursor\n        hasNextPage\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetMembersByDomain($domain: String!, $first: Int, $after: Cursor) {\n    members(filter: { domain: { equal: $domain } }, first: $first, after: $after) {\n      edges {\n        cursor\n        node {\n          ...MemberFields\n        }\n      }\n      pageInfo {\n        endCursor\n        hasNextPage\n      }\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;