export async function loadConfig() {
    const response = await fetch('/config.json');
    if (!response.ok) {
      throw new Error('Failed to load configuration');
    }
    const config = await response.json();
    console.log(config);
    return config;
  }
