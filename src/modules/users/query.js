const GET_USER = `
    select
    user_id userId,
    fullname speaker,
    user_profession profession,
    user_type turi,
    user_company company
    from users
`
const POST_USER = `
    insert into users(fullname,user_profession,user_type) values($1,$2,$3) returning*
`
const POST_USER_COMPANY = `
    insert into users(fullname,user_profession,user_type,user_company) values($1,$2,$3,$4) returning*
`
export {
     GET_USER,
    POST_USER,
    POST_USER_COMPANY
}