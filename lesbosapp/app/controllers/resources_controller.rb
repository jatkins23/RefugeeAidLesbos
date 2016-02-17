class ResourcesController < ApplicationController
  def index
    @resources = Resource.all

    @hash = Gmaps4rails.build_markers(resources_with_latlng) do |resource, marker|
        marker.lat resource.lat
        marker.lng resource.lng
        marker.title resource.name
        marker.infowindow resource.name
    end

  end

  def show
    @resource = Resource.find(params[:id])
    render :json => @resource
  end

  private
  def resources_with_latlng
    @resources_with_latlng = []

    Resource.all.each do |resource|
      if resource.lat != nil && resource.lng != nil
            @resources_with_latlng << resource
      end
    end
  @resources_with_latlng
  end
end
