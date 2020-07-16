/*
Routes

/api/users
	GET 	listing users
	POST 	creating a new user	
/api/users/:userId
	GET		fetching a user
	PUT		updating a user
	DELETE	deleting a user
*/
import express from 'express';
import userCtrl from '../controllers/user.controller';


const router = express.Router();

 router.route('/api/users')
 	.get(userCtrl.list)
 	.post(userCtrl.create);

router.route('/api/users/:userId')
	.get(userCtrl.read)
	.put(userCtrl.update)
	.delete(userCtrl.remove);

router.param('userId', userCtrl.userById);

export default router;
