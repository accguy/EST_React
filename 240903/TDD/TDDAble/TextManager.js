class TextManager {
  constructor() {
    this.value = { data: "hello Jiwon!" };
  }

  getValue() {
    return this.value.data;
  }

  setValue(newValue) {
    this.value = newValue;
  }
}
