<div align="center">

# 🚀 Microfrontend Production Versioning & Deployment

### Immutable Builds • Deployment Snapshots • Safe Rollbacks

<p>
A practical exploration of how to safely deploy independently versioned
<strong>Host</strong>, <strong>Product</strong>, and <strong>Cart</strong>
microfrontends while maintaining compatibility and enabling reliable rollback.
</p>

<br />

<img src="https://img.shields.io/badge/Architecture-Microfrontend-blue?style=for-the-badge" />
<img src="https://img.shields.io/badge/Module%20Federation-Enabled-purple?style=for-the-badge" />
<img src="https://img.shields.io/badge/Deployment-Immutable-success?style=for-the-badge" />
<img src="https://img.shields.io/badge/Rollback-Snapshot%20Based-orange?style=for-the-badge" />

</div>

<br />

---

# 📌 A CTO Question That Turned Into a Hands-On Experiment

Recently, [**Lorenzo De Francesco**](https://www.linkedin.com/in/lorenzodefrancesco/en/) asked me an interesting question about the Microfrontend architecture:

> **"Interesting setup. Question: once in prod with Host/Product/Cart, how do you handle deployment when remotes evolve at different speeds? If Product App needs Redux 2.0 but Cart stays on 1.9, how do you navigate the singletons without breaking everything?**
>
> **Asking because that's where the MFE magic disappears — federation works, but then rollback becomes a nightmare if you don't have immutable snapshots of what was actually deployed."**

That question made me think beyond just getting Module Federation working.

So I decided to actually build and test the problem.

## 🔥 First: Reproduce the Dependency Conflict

I intentionally created a version mismatch between the Microfrontends.

- Product → Axios `1.20.x`
- Cart → Axios `0.27.2`
- Axios → configured as a singleton

This allowed me to see what actually happens when independently developed MFEs require incompatible dependency versions.

From there, I identified three possible approaches:

### Option 1 — Upgrade Cart

Move Cart to a compatible dependency version.

### Option 2 — Isolate Cart

Stop sharing the dependency with Cart and allow it to use its own version.

### Option 3 — Reject the Deployment

If the combination isn't compatible and can't be safely isolated, don't allow that deployment combination into production.

But then came the bigger part of the question:

**What happens when the deployment is already live?**

## 🚀 Building the Deployment & Rollback Layer

I added a small deployment system to simulate how we could manage this safely.

### Immutable Builds

Every deployment gets a unique build ID.

```text
build-20260913072419
build-20260913073127
...

### The Risks

| Problem | Description |
|---|---|
| 🔀 **Independent deployments** | Each MFE can be deployed at a different time |
| ⚠️ **Shared dependency conflicts** | Different MFE versions may require incompatible dependencies |
| ❓ **Unknown combinations** | "Latest" does not tell us which exact builds are running together |
| 🔎 **Difficult debugging** | Hard to identify the exact combination that introduced a problem |
| 🔄 **Unsafe rollback** | Rebuilding an older version does not guarantee the exact previous artifact |

The application consists of:

```text
                    ┌─────────────┐
                    │    HOST     │
                    └──────┬──────┘
                           │
                    ┌──────┴──────┐
                    │             │
              ┌─────▼─────┐ ┌────▼─────┐
              │  PRODUCT  │ │   CART   │
              │    MFE    │ │   MFE    │
              └───────────┘ └──────────┘
```

**Few screenshot while doing testing**
<img width="1164" height="1080" alt="proble-2" src="https://github.com/user-attachments/assets/a97bd902-be53-4da5-8239-bea602d11fc7" />
<img width="1332" height="1080" alt="proble," src="https://github.com/user-attachments/assets/e39c097b-faef-47a1-9682-d80fe3d17272" />
<img width="1249" height="574" alt="cart-mf-isue" src="https://github.com/user-attachments/assets/e29ae4fc-dc74-47e3-b6c2-940c60cab3a5" />
