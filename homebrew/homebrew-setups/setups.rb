class Setups < Formula
  desc "Share custom setups with others"
  homepage ""
  url "file:///Users/rahulbawa/work/open-source/setups-0.0.1-bin.tar.gz"
  mirror ""
  sha256 ""
  license ""
  version "0.0.1"

  def install
    # Fix the permissions on the global settings file.
    libexec.install Dir["*"]

    # Leave conf file in libexec. The mvn symlink will be resolved and the conf
    # file will be found relative to it
    Pathname.glob("#{libexec}/bin/*") do |file|
      next if file.directory?
      basename = file.basename
      bin.write_exec_script file, (libexec/"bin/")
    end
  end
  
  def test
    system "setup"
  end
end
