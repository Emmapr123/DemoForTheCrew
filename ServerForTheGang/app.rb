require 'sinatra/base'
require 'sinatra/cross_origin'
require 'json'
require './lib/counter'

class Gang < Sinatra::Base 

  configure do 
    enable :cross_origin
  end 

  before do 
    response.headers['Access-Control-Allow-Origin'] = '*'
    headers['Access-Control-Allow-Methods'] = 'GET, POST'
    headers['Access-Control-Allow-Headers'] = 'accept, authorization, origin'
    content_type 'application/json'
  end 

  get '/' do 
    @count = Counter.count
    @count.to_json
  end 

  post '/' do 
    Counter.set(params[:count])
  end 

end 