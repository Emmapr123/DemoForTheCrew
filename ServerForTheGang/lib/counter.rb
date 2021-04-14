class Counter

  def self.count 
    @count ||= 0
  end 

  def self.set(count)
    @count = count
  end

end 