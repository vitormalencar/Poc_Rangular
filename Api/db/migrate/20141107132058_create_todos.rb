class CreateTodos < ActiveRecord::Migration
  def change
    create_table :todos do |t|
      t.string :titlea, null: false
      t.boolean :completed, defalt: false

      t.timestamps
    end
  end
end
