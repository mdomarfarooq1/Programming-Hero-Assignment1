function formatValue(input: string | number | boolean): string | number | boolean {
  if (typeof input === 'string') 
    {
    return input.toUpperCase();
    } 
  else if (typeof input === 'number') 
    {
    return input * 10;
    } 
    else {
    return !input;
    }
}


function getLength(input: string | any[]): number {
  if (typeof input === 'string')
  {
    return input.length;
  } 
  else 
  {
    return input.length;
  }
}

class Person {
  name: string;
  age: number;
  constructor(name: string, age: number)
   {
    this.name = name;
    this.age = age;
   }
  getDetails(): string 
  {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}

function filterByRating(books: { title: string; rating: number }[]): { title: string; rating: number }[] 
{
  const result: { title: string; rating: number }[] = [];
  
  for (let i = 0; i < books.length; i++)
   {
    if (books[i].rating >= 4) 
    {
      result.push(books[i]);
    }
   }
  return result;
}


function filterActiveUsers(users: { id: number; name: string; email: string; isActive: boolean }[]): { id: number; name: string; email: string; isActive: boolean }[] {
  const activeUsers: { id: number; name: string; email: string; isActive: boolean }[] = [];
  
  for (let i = 0; i < users.length; i++)
     {
    if (users[i].isActive === true)
       {
      activeUsers.push(users[i]);
       }
     }
  return activeUsers;
}

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}
function printBookDetails(book: Book): void {
  const available = book.isAvailable ? 'Yes' : 'No';
  console.log(`Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${available}`);
}

function getUniqueValues(array1: (number | string)[], array2: (number | string)[]): (number | string)[] {
  const result_array: (number | string)[] = [];
  for (let i = 0; i < array1.length; i++) {
    let isDuplicate = false;
    for (let j = 0; j < result_array.length; j++) {
      if (result_array[j] === array1[i]) {
        isDuplicate = true;
        break;
      }
    }
    if (!isDuplicate) {
      result_array.push(array1[i]);
    }
  }
  for (let i = 0; i < array2.length; i++) {
    let isDuplicate = false;
    for (let j = 0; j < result_array.length; j++) {
      if (result_array[j] === array2[i]) {
        isDuplicate = true;
        break;
      }
    }
    if (!isDuplicate) {
      result_array.push(array2[i]);
    }
  }
  return result_array;
}


function calculateTotalPrice(products: { name: string; price: number; quantity: number; discount?: number }[]): number {
  if (products.length === 0)
     {
    return 0;
     }
  const total = products.reduce((sum, product) => {
    let productTotal = product.price * product.quantity;

    if (product.discount)
       {
      const discountAmount = productTotal * (product.discount / 100);
      productTotal = productTotal - discountAmount;
      }
    
    return sum + productTotal;
  }, 0);
  
  return total;
}
