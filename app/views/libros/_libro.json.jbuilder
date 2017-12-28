json.extract! libro, :id, :nombre, :precio, :categoria, :formato, :created_at, :updated_at
json.url libro_url(libro, format: :json)
