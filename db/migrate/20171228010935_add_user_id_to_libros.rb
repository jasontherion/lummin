class AddUserIdToLibros < ActiveRecord::Migration
  def change
    add_column :libros, :user_id, :integer
  end
end
