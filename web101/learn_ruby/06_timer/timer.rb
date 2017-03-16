class Timer

  def initialize
    @seconds = 0
  end

  def seconds
    @seconds
  end

  def seconds=(new_seconds)
    @seconds = new_seconds
  end

  def time_string
    hrs = @seconds/3600
    mins = (@seconds%3600)/60
    secs = (@seconds%60)
    "#{'%.2d' % hrs}:#{'%.2d' % mins}:#{'%.2d' % secs}"
  end


end
