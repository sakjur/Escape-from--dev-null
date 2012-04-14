def output_xml(data):
    print("xml")

def output(data, format):
  func = "output_" + format
  globals()[func](data)

output("hej", "xml")
