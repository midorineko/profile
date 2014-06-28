class VisitorsController < ApplicationController

def create
  Visitor.create(email: params[:email], position: params[:position])
end

end
