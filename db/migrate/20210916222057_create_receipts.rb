class CreateReceipts < ActiveRecord::Migration[6.1]
  def change
    create_table :receipts do |t|
      t.integer :amount
      t.string :catagory
      t.date :date
      t.string :note
      t.string :title
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
