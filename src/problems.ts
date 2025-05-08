function formatString (input: string, toUpper = true): string {
  return toUpper ? input.toUpperCase() : input.toLowerCase()
}

function filterByRating (
  items: { title: string; rating: number }[]
): { title: string; rating: number }[] {
  return items.filter(item => {
    if (item.rating >= 4.0) {
      return item
    }
  })
}

function concatenateArrays<T> (...arrays: T[][]): T[] {
  return arrays.reduce((acc, curr) => acc.concat(curr), [])
}

class Vehicle {
  private make: string
  private year: number

  constructor (make: string, year: number) {
    this.make = make
    this.year = year
  }

  getInfo (): string {
    return `Make: ${this.make}, Year: ${this.year}`
  }
}

class Car extends Vehicle {
  private model: string
  constructor (make: string, year: number, model: string) {
    super(make, year)
    this.model = model
  }

  getModel (): string {
    return `Model: ${this.model}`
  }
}

function processValue (value: string | number): number {
  return typeof value === 'string' ? value.length : value * 2
}

interface Product {
  name: string
  price: number
}

function getMostExpensiveProduct (products: Product[]): Product | null {
  if (products.length === 0) {
    return null
  }
  return products.reduce((prev, curr) => {
    return prev.price > curr.price ? prev : curr
  })
}

enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday
}

function getDayType (day: Day): string {
  switch (day) {
    case Day.Monday:
    case Day.Tuesday:
    case Day.Wednesday:
    case Day.Thursday:
    case Day.Friday:
      return 'Weekday'
    case Day.Saturday:
    case Day.Sunday:
      return 'Weekend'
    default:
      return 'Invalid day'
  }
}

async function squareAsync (n: number): Promise<number> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (n < 0) {
        reject(new Error('Negative number not allowed'))
      } 
      else {
        resolve(n * n)
      }
    }, 1000)
  })
}
