export class Utility{
    static async generateRandomName() {
        const randomString = Math.random().toString(36).substring(2, 15); // Generate a random string
        return randomString;
      }
}

