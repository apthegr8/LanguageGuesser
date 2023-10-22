import langs from 'langs';
import { franc } from 'franc';

// Get the command line arguments
const args = process.argv.slice(2);

if (args.length === 0) {
  console.log('Provide some input');
} else {
  // Join the command line arguments into a single string
  const inputText = args.join(' ');

  // Detect the language using franc
  const code = franc(inputText);

  if (code === 'und') {
    console.log('Language could not be detected.');
  } else {
    // Get the language name from the detected language code
    const languageName = langs.where('3', code);
    console.log(`Detected language: ${languageName.name}`);
  }
}
