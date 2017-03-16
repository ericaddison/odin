class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  
  def hello
    render html: "hello, world! --- ¡Hola, mundo!"
  end
  
  def goodbye
    render html: "We outie!"
  end
end
