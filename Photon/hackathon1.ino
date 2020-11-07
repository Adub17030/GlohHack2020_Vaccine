// This #include statement was automatically added by the Particle IDE.
#include <HttpClient.h>

// This #include statement was automatically added by the Particle IDE.
#include <neopixel.h>

#include <HttpClient.h>

unsigned int nextTime = 0;    // Next time to contact the server
HttpClient http;

http_header_t headers[] = {
    { "Accept" , "*/*"},
    { NULL, NULL } // NOTE: Always terminate headers will NULL
};

http_request_t request;
http_response_t response;

 
#define PIXEL_COUNT 35						// 24 Pixels on our ring
#define PIXEL_PIN D0						// Ring uses D6 as default pin
#define PIXEL_TYPE WS2812B					// Ring uses WS2812 Pixels
#define MIC_INPUT A0
 
Adafruit_NeoPixel pixels(PIXEL_COUNT, PIXEL_PIN, PIXEL_TYPE);	// Create out “ring” object	
 
int pixelCounter = 0;                       // Used for choosing a specific LED
bool too_high = false;

int LED = D3;              // LED connected to digital pin D3
int analogPin = 2;       // potentiometer connected to analog pin A0
double val = 0;        // variable to store the read values
double temp_max = 86; //max temp desired
double temp;


 void switch_color(int c1, int c2, int c3){
  // The first NeoPixel in a strand is #0, second is 1, all the way up
  // to the count of pixels minus one.
  for(int i=0; i<PIXEL_COUNT; i++) { // For each pixel...

    // pixels.Color() takes RGB values, from 0,0,0 up to 255,255,255
    // Here we're using a moderately bright green color:
    pixels.setPixelColor(i, pixels.Color(c1, c2, c3));

  
    
  } pixels.show();
      // Send the updated pixel colors to the hardware.
}

void setup()
{
    Serial.begin(9600);
	pinMode(PIXEL_PIN, OUTPUT);      // sets the ledPin as output
	pixels.begin();
	pixels.setBrightness(150);  
	Particle.variable("temp", temp);
	Particle.variable("too_high", too_high);
}

void loop()
{
	val = analogRead(analogPin);  // read the analogPin values go from 0 to 4095
	//analogWrite(LED, val/16);  // Generate PWM from values from 0 to 255
	double voltage = val/4096*4.64;
	double Tc = 0.0195;
	double Voc = 0.4;
	temp = (voltage-0.4)/Tc;
	temp = temp*1.8 +32 -40; // C -> F
	if(temp>82.5){
	    switch_color(255, 0, 0);
	    too_high = true;
	    Serial.println(temp);
	}
	delay(100);
    
}



















