import { gql } from "./generated";

const MEMBER_FIELDS = gql(`
  fragment MemberFields on Member {
    id
    name
    emailAddress
    mobileNumber
    domain
    status
    verificationStatus
    dateTimeCreated
    dateTimeLastActive
    wallet {
      balance
    }
  }
`);

export const GET_MEMBERS = gql(`
  query GetMembers($first: Int, $after: Cursor, $filter: MemberFilterInput) {
    members(first: $first, after: $after, filter: $filter) {
      edges {
        cursor
        node {
          ...MemberFields
        }
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
`);

export const GET_MEMBERS_BY_NAME = gql(`
  query GetMembersByName($search: String!) {
    membersByName(search: $search, first: 20) {
      id
      name
    }
  }
`);

export const GET_MEMBERS_BY_EMAIL_ADDRESS = gql(`
  query GetMembersByEmailAddress($search: String!) {
    membersByEmailAddress(search: $search, first: 20) {
      id
      name
      emailAddress
    }
  }
`);

export const GET_MEMBERS_BY_MOBILE_NUMBER_SEARCH = gql(`
  query GetMembersByMobileNumberSearch($search: String!) {
    membersByMobileNumber(search: $search, first: 20) {
      id
      name
      mobileNumber
    }
  }
`);

export const GET_MEMBERS_BY_DOMAIN_SEARCH = gql(`
  query GetMembersByDomainSearch($search: String!) {
    membersByDomain(search: $search, first: 20) {
      id
      name
      domain
    }
  }
`);

export const GET_MEMBERS_BY_EMAIL = gql(`
  query GetMembersByEmail($email: String!, $first: Int, $after: Cursor) {
    members(filter: { emailAddress: { contains: $email } }, first: $first, after: $after) {
      edges {
        cursor
        node {
          ...MemberFields
        }
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
`);

export const GET_MEMBERS_BY_MOBILE_NUMBER = gql(`
  query GetMembersByMobileNumber($mobileNumber: String!, $first: Int, $after: Cursor) {
    members(filter: { mobileNumber: { contains: $mobileNumber } }, first: $first, after: $after) {
      edges {
        cursor
        node {
          ...MemberFields
        }
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
`);

export const GET_MEMBERS_BY_DOMAIN = gql(`
  query GetMembersByDomain($domain: String!, $first: Int, $after: Cursor) {
    members(filter: { domain: { equal: $domain } }, first: $first, after: $after) {
      edges {
        cursor
        node {
          ...MemberFields
        }
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
`); 