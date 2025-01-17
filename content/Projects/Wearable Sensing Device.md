## Abstract
The goal in to design electronics for a wearable heart-rate sensor that is small sized and incorporates wireless data transfer.

## Considerations:

To begin, I will look at low power consumption techniques for my circuit. It is very important that for wearable device that uses a battery inside of the housing since I don't want the battery to drain in one day.


I will design a circuit to extract the data wirelessly using the sensing of the body through the electronic devices.

It is also important that I design a small footprint for the device.
## Low Power Consumption

The goal is to optimize the capacity that is tied to the size of the battery.
![image1](Projects/references/image1.png)
I will study the the power gating techniques and types of connectivities to save on power consumption, as well as incorporating sleep modes for the sensors to decrease power consumption when the device is not being used.

## Sensing

In this wireless heart rate monitor, the photoplethysmography (PPG) will be used as an optical technique to detect volumetric changes in blood peripheral circulation.
![image1](Projects/references/image2.png)
Sleep modes will be used when we are not measuring heart rates. This will ensure that the system will be in a very low power consumption mode by not drawing any current when not measuring any relevant data. The system will then be waken up when needed.

Edge processing will be used to only retrieve the information that we want, like heart rate, rather than raw data from the sensing components.

## Small Footprint
For a wearable design, the housing should be minimized.

## Types of Connectivity
We need to consider (1) what range do we need for our connectivity and (2) what data rates do we need? This should match the need for our replication.
![image1](Projects/references/image3.png)

Since our device will use Bluetooth or Wi-Fi to connect to a smartphone, we’ll be focusing on those respective frequency ranges.

Higher data rates will also lead to higher power consumption, therefore we must optimize the tradeoff between trying to have as much data possible exposed over bluetooth while not consuming too much power.

When choosing connectivity modules, we must choose pre-certified modules. - Q. WHY??

Another consideration that we must look after is if we are going to combine Bluetooth or Wifi, we must consider that they are on the same frequency. By using RF switches to share the same antena, this will enable us to have a small footprint device. - Q. WHY??

Q. Will I be using Bluetooth, Wi-Fi, or both??

I am seeing if this works...........???