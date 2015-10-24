class Market < ActiveRecord::Base
  has_many :booths

  def as_json(options = {})
    super(options.merge(include: :booths))
  end
end
