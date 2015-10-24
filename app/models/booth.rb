class Booth < ActiveRecord::Base
  has_many :items

  def as_json(options = {})
    super(options.merge(include: :items))
  end
end
