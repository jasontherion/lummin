class CreateLibros < ActiveRecord::Migration
  def change
    create_table :libros do |t|
      t.string :nombre
      t.integer :precio
      t.string :categoria
      t.string :formato

      t.timestamps null: false
    end
  end
end
