terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws",
      version = "~> 3.27"
    }
  }
}

provider "aws" {
  profile = "default"
  region  = var.region
}

resource "aws_instance" "example" {
  ami           = "ami-03d64741867e7bb94"
  instance_type = "t2.micro"
  tags = {
    Name = var.instance_name
  }
}
