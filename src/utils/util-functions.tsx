export function getRandomArbitraryFloor(min: number, max: number) {
  return Math.floor(Math.random() * (max - min) + min);
}

export function shuffle(a: Array<any>) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function getRandomArbitrary(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }

// export {};
