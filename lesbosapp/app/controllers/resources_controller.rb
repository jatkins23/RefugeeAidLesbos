class ResourcesController < ApplicationController
  def index
    @resources = Resource.all
  end
<<<<<<< HEAD

  def show
    @resource = Resource.find(params[:id])
    render :json => @resource
  end
end

