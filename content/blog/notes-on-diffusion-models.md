---

title: "My Journey Into Diffusion Models"
description: "Learning notes on how diffusion models generate images by gradually removing noise and why they have become one of the most influential generative AI techniques."
tags: ["deep-learning", "generative-ai", "diffusion-models", "learning"]
------------------------------------------------------------------------

When I first heard about diffusion models, I couldn't understand how adding random noise to an image could possibly help generate realistic pictures. It seemed completely counterintuitive.

After reading papers, watching lectures, and experimenting with simple implementations, I realized the key idea isn't about adding noise—it's about **learning how to reverse the process**.

This post summarizes what I've learned so far.

## The Core Idea

Imagine taking a clear photograph and slowly adding tiny amounts of random Gaussian noise.

After a few steps, the image becomes blurry.

After hundreds of steps, it eventually becomes indistinguishable from pure noise.

The surprising part is that a neural network can learn to reverse this process.

Instead of generating an image all at once, the model starts from random noise and gradually removes it, one step at a time, until a meaningful image appears.

That simple idea forms the foundation of modern diffusion models.

## Forward Process

The forward process is straightforward.

At every timestep, a small amount of Gaussian noise is added to the image.

```text
Original Image
      │
      ▼
Small Noise
      │
      ▼
More Noise
      │
      ▼
Even More Noise
      │
      ▼
Pure Gaussian Noise
```

Since the amount of noise added at each step is known, this process is easy to simulate during training.

## Reverse Process

The reverse process is where learning happens.

Given a noisy image, the neural network predicts the noise that was added.

By repeatedly estimating and removing this noise, the image gradually becomes cleaner.

```text
Random Noise
      │
      ▼
Predict Noise
      │
      ▼
Remove Noise
      │
      ▼
Repeat
      │
      ▼
Generated Image
```

Instead of directly predicting pixels, many diffusion models learn to predict the noise itself, which turns out to be a much more stable learning objective.

## A Simplified Training Loop

Conceptually, training looks something like this:

```python
for image in dataset:
    timestep = sample_random_timestep()
    noisy_image, noise = add_noise(image, timestep)

    predicted_noise = model(noisy_image, timestep)

    loss = mse(predicted_noise, noise)
    loss.backward()
```

The objective is simple: teach the network to estimate the noise that was added.

## Why Are Diffusion Models So Good?

One reason diffusion models became so popular is the quality of the images they generate.

Compared with earlier generative approaches, they often produce:

* Higher visual quality
* Better diversity
* More stable training
* Strong conditioning through text prompts
* Fine-grained control during image generation

This is why many modern image generation systems are based on diffusion rather than GANs.

## Challenges

Despite their impressive capabilities, diffusion models are not without limitations.

Generating an image requires many denoising steps, making inference slower than many alternative approaches.

Training also demands large datasets and significant computational resources.

Researchers are actively exploring methods to reduce the number of sampling steps while maintaining image quality.

## What I Want to Learn Next

As I continue studying diffusion models, I'm particularly interested in exploring:

* DDPM and the original diffusion formulation
* DDIM for faster sampling
* Latent Diffusion Models
* Stable Diffusion architecture
* Classifier-Free Guidance
* Text conditioning with CLIP embeddings
* Flow Matching and newer generative approaches

My goal isn't just to understand how to use diffusion models, but to understand **why they work** and how recent research continues to improve their efficiency and quality.

This post is part of my learning journey. I'll continue updating these notes as I read more papers, implement small experiments, and deepen my understanding of generative AI.
