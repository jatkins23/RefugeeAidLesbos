class WelcomeController < ApplicationController
  def index
    @resources = Resource.all
  end
end
