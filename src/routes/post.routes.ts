import { Router } from "express";

import { createPostFactory } from "../usecases/Post/CreatePost/CreatePostFactory";
import { findAllPostsFactory } from "../usecases/Post/FindAllPosts/FindAllPostsFactory";
import { findByIdPostFactory } from "../usecases/Post/FindByIdPost/FindByIdPostFactory";
import { updatePostFactory } from "../usecases/Post/UpdatePost/UpdatePostFactory";
import { deletePostFactory } from "../usecases/Post/DeletePost/DeletePostFactory";
import { publishPostFactory } from "../usecases/Post/PublishPost/PublishPostFactory";

const postRoutes = Router();

postRoutes.route('/')
  .post((request, response) => { return createPostFactory().handle(request, response) } )
  .get((request, response) => { return findAllPostsFactory().handle(request, response) } )

postRoutes.route('/:id')
  .get((request, response) => { return findByIdPostFactory().handle(request, response) } )
  .put((request, response) => { return updatePostFactory().handle(request, response) } )
  .delete((request, response) => { return deletePostFactory().handle(request, response) } )

postRoutes.route('/publish/:id')
  .get((request, response) => { return publishPostFactory().handle(request, response) } )
  
export { postRoutes }