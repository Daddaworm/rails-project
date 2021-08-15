class PostsController < ApplicationController


    # GET /posts
    def index
        posts = Post.all 
        render json: posts 
    end

    # GET /posts/:id
    def show
        post = find_post
        render json: post
    end


    private

    def find_post
        Post.find(params[:id])
    end

    def post_params
        params.permit(:title, :content)
    end


end
