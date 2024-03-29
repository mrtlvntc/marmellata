# coding: utf-8

Gem::Specification.new do |spec|
  spec.name          = "marmellata"
  spec.version       = "1.0"
  spec.authors       = ["p"]
  spec.email         = [""]

  spec.summary       = %q{Theme for my site}
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r{^(assets|_layouts|_includes|_sass|LICENSE|README)}i) }

  spec.add_runtime_dependency "jekyll"

  spec.add_development_dependency "bundler", "~> 1.12"
  spec.add_development_dependency "rake", "~> 10.0"
end
