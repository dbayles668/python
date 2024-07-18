# 
# Example file for parsing and processing XML
# LinkedIn Learning Python course by Joe Marini
#
import xml.dom.minidom

def main():
    # use the parse() function to load and parse an XML file
    doc = xml.dom.minidom.parse("samplexml.xml")
    
        # get a list of XML tags from the document and print each one
    people = doc.getElementsByTagName("person")
    print ("%d people:" % people.length)
    for person in people:
        firstname = person.getElementsByTagName("firstname")[0]
        lastname = person.getElementsByTagName("lastname")[0]
        city = person.getElementsByTagName("home")[0]
        print("Meet", (firstname.childNodes[0].nodeValue), (lastname.childNodes[0].nodeValue))
        print("He lives in", (city.childNodes[0].nodeValue))
        print("He knows:")
        skills = person.getElementsByTagName("skill")
        for skill in skills:
            print (skill.getAttribute("name"))        
        print("\n")

if __name__ == "__main__":
    main()

