package.json ensure a list of package with their version..
package-lock.json ensure detailed version of every package 
"fs" create a file and write a message inside
"os" give details about user and os

{
 create a new document using model
  const newPerson = new person(data);
     newPerson.name = data.name;
     newPerson.age = data.age;
     newPerson.work = data.work;
     newPerson.mobile = data.mobile;
      newPerson.email = data.email;
      newPerson.address = data.address;
      newPerson.salary = data.salary;

  Save the newPerson document to the database
}

without router we used app.get() or app.post with router we use route.get etc

{
 callback function to handle success or error which isnt used now!! we used async await

  newPerson.save((err, savedPerson) => {
    if (err) {
        console.error(" Error saving person:", err);
        res.status(500).json("Internal Server Error")
    }else{
        console.log(" Person saved successfully:", savedPerson);
        res.status(201).json("Data Saved Successfully ", savedPerson);
    }})
}