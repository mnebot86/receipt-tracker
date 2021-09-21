class Image < ApplicationRecord
  belongs_to :receipt
  has_one_attached :image
end
