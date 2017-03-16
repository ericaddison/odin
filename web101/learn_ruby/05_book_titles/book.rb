class Book
# write your code here

  @@non_caps = ['and', 'or', 'but', 'the', 'in', 'on',
    'of', 'a', 'an']

  def initialize()
    @_title = "No Title"

  end

  def title
    @_title
  end

  def title= (new_title)
    @_title = titleize(new_title)
  end



  def titleize(str)
    split_str = (str.split)
    title = capitalize(split_str[0])
    ((split_str)[1..-1]).each do |w|
      w = (@@non_caps.include? w)?w:capitalize(w)
      title << " " << w
    end
    title.strip
  end
  private :titleize

  def capitalize(str)
    "#{str[0].upcase}#{str[1..-1]}"
  end
  private :capitalize
end
