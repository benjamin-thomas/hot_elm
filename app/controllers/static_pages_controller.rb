class StaticPagesController < ApplicationController

  def index
    @line_items = [1,2,3]
  end

  def hello
  end

end
