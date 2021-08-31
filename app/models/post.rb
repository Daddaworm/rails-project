class Post < ApplicationRecord
    belongs_to :user
    has_many :comments

    validates :title, presence: true
    validates :content, presence: true
    validates :content, length: { minimum: 10 }

    def self.alpha 
        self.order(:title)
    end

end
