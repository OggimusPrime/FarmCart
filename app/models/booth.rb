class Booth < ActiveRecord::Base
  has_many :items
  belongs_to :user

  def as_json(options = {})
    super(options.merge(include: :items))
  end
end
