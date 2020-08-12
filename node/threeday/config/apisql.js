const sqlMap={
	user:{
		userSearch:`select * from user_insert where username=?`,
		userInsert:`insert into user_insert(username,password,phone,email) values(?,?,?,?)`
	}
}
module.exports=sqlMap