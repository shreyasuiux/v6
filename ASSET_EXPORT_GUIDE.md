# Asset Export Guide

## Overview

This guide explains how to export all images from Figma and place them in the proper location to eliminate `figma:asset` dependencies.

## Why This is Necessary

- **Build Safety**: `figma:asset` imports create runtime dependencies on Figma Make's virtual module system
- **Version Control**: Real image files can be committed to Git
- **Regeneration Safety**: When Figma components are regenerated, asset imports won't be reintroduced
- **Deployment**: Application can be deployed to any static host without Figma dependencies

## Directory Structure

Create the following directory structure under `/src/assets/`:

```
/src/assets/
├── images/
│   ├── home/           # Home page / Desktop72.tsx images
│   ├── about/          # About Us page images
│   ├── team/           # Our Team page images
│   ├── erp/            # ERP Testing page images
│   └── security/       # Security page images
└── assetManifest.ts    # ✅ Already created
```

## Export Instructions

### Step 1: Create Directory Structure

```bash
mkdir -p src/assets/images/home
mkdir -p src/assets/images/about
mkdir -p src/assets/images/team
mkdir -p src/assets/images/erp
mkdir -p src/assets/images/security
```

### Step 2: Export Images from Figma

For each image listed below, you need to:

1. Open the Figma file
2. Find the image/frame
3. Right-click → Export → PNG (or original format)
4. Save with the filename specified below

### Step 3: Place Images in Correct Directories

## Complete Asset List

### 🏠 Home Page Assets (20 images)

**Location**: `/src/assets/images/home/`

| Filename | Figma Asset ID | Description |
|----------|----------------|-------------|
| `background-b36d65e6.png` | `b36d65e6d5148be9a5b3d8fb5fea1a46ffb9a8ca` | Primary background |
| `background1-1a517fa9.png` | `1a517fa94894b5a94a875f9331d4cc4672a5d40d` | Secondary background |
| `use-case-6961e642.png` | `6961e642219c16b338f71d4935a0dc57020a74e3` | Use case image 1 |
| `use-case-87b14632.png` | `87b14632e82dcbb61499a02b5d19b8187afbe5fa` | Use case image 2 |
| `use-case-ad95b013.png` | `ad95b013337e7237926fc6b9faedee08616b4c4f` | Use case image 3 |
| `use-case-ca704118.png` | `ca704118f45abbe60ac2283dd2ffc09d2a3fb59b` | Use case image 4 |
| `use-case-47439eae.png` | `47439eae9fca2b9e404c4eacd4f9ae072d03a948` | Use case image 5 |
| `use-case-229515ca.png` | `229515ca494f5daf2bcb69b7823e1204984cf222` | Use case image 6 |
| `use-case-dbc9fc23.png` | `dbc9fc236a13a5116a3f63329ac34f990432947c` | Use case image 7 |
| `video-thumb-21aef04d.png` | `21aef04df93cb005196410573faff5de9f224241` | Video thumbnail 1 |
| `video-thumb-e1acc164.png` | `e1acc164b54db373b1ee7226d0ec89ba2098b773` | Video thumbnail 2 |
| `video-thumb-e94d03a1.png` | `e94d03a1e289a34c178f6daa41bae92f7b1a8209` | Video thumbnail 3 |
| `video-thumb-53d6989787836bf5c5453e97fe3b1f34da18acd6.png` | `53d6989787836bf5c5453e97fe3b1f34da18acd6` | Video thumbnail 4 |
| `video-thumb-71fd2723.png` | `71fd272332970f167df7709130424fd4367c2002` | Video thumbnail 5 |
| `video-thumb-fa19fa5f.png` | `fa19fa5f30a082ecd2a14aedef7aef55f20fb3d0` | Video thumbnail 6 |
| `case-study-religare-22956f5a.png` | `22956f5aa9eeed7384c644e4cc46b174e527e40d` | Case study - Religare |
| `abhijit-shah-801ed3f5.png` | `801ed3f587b24072472c58fa442921ca8c5a84d6` | Abhijit Shah photo |
| `texture-225d51d9.png` | `225d51d90ac23d1d315ee056047f3310ff4bc3e6` | Texture overlay |
| `noise-texture-598fe7fc.png` | `598fe7fcf07400bacbe5020a845208e39047abd0` | Noise texture |
| `career-opportunities-30ff0ea3.png` | `30ff0ea367d5d594d5243c9fc89d82e80dd9dfce` | Career opportunities image |

### 👥 About Us Page Assets (33 images)

**Location**: `/src/assets/images/about/`

#### Our Initiatives (6 images)
| Filename | Figma Asset ID |
|----------|----------------|
| `initiative-9bf64763.png` | `9bf64763e80240a076498f7927e98c4ae713fca0` |
| `initiative-b2dd2071.png` | `b2dd2071572718606e2154e8ce96cc9a02d8b5d3` |
| `initiative-9a70cf65.png` | `9a70cf65aa08ed79f7a7608d1a4836bc36b0d9e6` |
| `initiative-fc320e75.png` | `fc320e75b25d80a3430750ed622a1fbefd6f7c64` |
| `initiative-fc72ccea.png` | `fc72ccea1afff8d94c419573a638b0ee303b4c0c` |
| `initiative-4ca36db6.png` | `4ca36db6682d50e54d3d5a0581b7d5fce966bbd5` |

#### ACC Sports & Culture (15 images)
| Filename | Figma Asset ID |
|----------|----------------|
| `sports-46619644.png` | `466196444e0309c58107dc9996fa62e467c81a0e` |
| `sports-a4911890.png` | `a4911890851b1bb8376062247e886f1d9a24ac0c` |
| `sports-518c6c3f.png` | `518c6c3f1e3dffa1008ad20907ff787ac547a393` |
| `sports-35101aee.png` | `35101aee231e56f3932717a233a7c1c1429bef4d` |
| `sports-3b485fd5.png` | `3b485fd59385670e325acde9bd2e37310b7e109f` |
| `sports-752c9b0a.png` | `752c9b0a691627f3aba498e129630ecd9d2bdd2a` |
| `sports-a10306cd.png` | `a10306cd4248c3653a5abdb6f052eb1c1bf33d37` |
| `sports-4271a31e.png` | `4271a31e8a5759f25b6e70836b2cb974be85d573` |
| `sports-4040e1b9.png` | `4040e1b9c924bbd458841371b71f99cce8ab969f` |
| `sports-897def58.png` | `897def581f3b7f27400e8dc899be8575dbdff2e3` |
| `sports-658afb09.png` | `658afb09da7887bfbdf51e3df6283a0a0120fd5a` |
| `sports-4032b83b.png` | `4032b83b2305add00e9ec6208c455b8894d995de` |
| `sports-b3453236.png` | `b3453236164fc3430c397b0ec7178e8a1e5456ee` |
| `sports-9b251072.png` | `9b251072db6db179cb9aa764eeb599ce397d5b66` |
| `sports-fe37ae76.png` | `fe37ae767ce4fabe9539ed8161800d5496660ff8` |

#### Rewards and Recognition (12 images)
| Filename | Figma Asset ID |
|----------|----------------|
| `rewards-6cca96e9.png` | `6cca96e924a63e08093d42a9a8cae26c68579671` |
| `rewards-dff95ddd.png` | `dff95dddfc96f2bf1cde08642b47e535e8c5faec` |
| `rewards-f7f6e538.png` | `f7f6e538aeefd0262aeffe3119e2517f2c5c3294` |
| `rewards-2f2aec27.png` | `2f2aec276211e747d29ef5ff2fed85bf88148086` |
| `rewards-1bc40f57.png` | `1bc40f5719a31e462d42cab063401d3d8cc511b8` |
| `rewards-a9f3bc6e.png` | `a9f3bc6ea7c56f56abba4465b6aa2b3e6a671ed7` |
| `rewards-175919ee.png` | `175919eefebd6d3a64850c1c8f88231629bda4bc` |
| `rewards-863004ef.png` | `863004ef523ae1f1019b0d36ccfc0a1d9067d95f` |
| `rewards-f74330dc.png` | `f74330dc610aa16195f16725a23ce498b1abeb1a` |
| `rewards-ce939824.png` | `ce939824671c9ec90f74eb277827edc8ca5d9610` |
| `rewards-e72b8f85.png` | `e72b8f8544b4b6c612cbf4dac4cd881b38ded9ee` |
| `rewards-7f18d71a.png` | `7f18d71a9ffc9d2845149dce4911fdc2f0b68ed2` |

### 👨‍💼 Our Team Page Assets (8 images)

**Location**: `/src/assets/images/team/`

| Filename | Figma Asset ID | Person |
|----------|----------------|--------|
| `nilesh-b80572a2.png` | `b80572a25a08475d09dc37d1abf2fce4f72c0b71` | Nilesh |
| `rogin-5685ff2e.png` | `5685ff2e056dfa1e9912bd2ccbe23c6d8a24a5fe` | Rogin |
| `shubho-5a9665dc.png` | `5a9665dc5bb0acd277f054cb189a3ca3ca08caca` | Shubho |
| `ghanshyam-c7a46eb6.png` | `c7a46eb6c93832045fe74ef6c407fe8d8863f24a` | Ghanshyam |
| `mithun-0c7842c9.png` | `0c7842c9dc87b50359dff7ed9674bb2f8bcd1936` | Mithun |
| `reema-2d690d90.png` | `2d690d90fb59c300d87ba32b7237e83d0743ea85` | Reema |
| `priyanka-59ed03aa.png` | `59ed03aa4774efa6bdfb05c3506765d58ddf3156` | Priyanka |
| `sachin-a9aa5d6e.png` | `a9aa5d6e3a92fbd8d8a4255e2f951dda566a4ce2` | Sachin |

### 🔧 ERP Testing Page Assets (1 image)

**Location**: `/src/assets/images/erp/`

| Filename | Figma Asset ID |
|----------|----------------|
| `hero-e41cd012.png` | `e41cd012327332c8710285fad37e540f72ad6a37` |

### 🔒 Security Page Assets (1 image)

**Location**: `/src/assets/images/security/`

| Filename | Figma Asset ID |
|----------|----------------|
| `dashboard-29053ebd.png` | `29053ebd206c6c622f83685d6124ce31792e8465` |

## Total Asset Count

- **Home Page**: 20 images
- **About Us Page**: 33 images
- **Our Team Page**: 8 images
- **ERP Testing Page**: 1 image
- **Security Page**: 1 image
- **TOTAL**: **63 images**

## Alternative: Placeholder Images

If you cannot export images immediately, you can use placeholder images temporarily:

```bash
# Create placeholder files (empty PNG files)
# This will prevent build errors while you export real images
touch src/assets/images/home/background-b36d65e6.png
# ... repeat for all files
```

Or use a placeholder service by updating `assetManifest.ts`:

```typescript
// Temporary fallback for development
const PLACEHOLDER_BASE = 'https://via.placeholder.com/800x600/1a1a2e/ffffff?text=';

export const homeAssets = {
  background: PLACEHOLDER_BASE + 'Background',
  // ... etc
};
```

## Verification

After exporting all assets, verify the structure:

```bash
# Should show all directories
ls -la src/assets/images/

# Should show 20 files
ls -la src/assets/images/home/

# Should show 33 files
ls -la src/assets/images/about/

# Should show 8 files
ls -la src/assets/images/team/

# Should show 1 file
ls -la src/assets/images/erp/

# Should show 1 file
ls -la src/assets/images/security/
```

## Next Steps

Once assets are exported:

1. ✅ Assets exported to correct directories
2. ✅ Asset manifest already created (`/src/assets/assetManifest.ts`)
3. 🔄 Update application pages to import from manifest (automated in next step)
4. 🔄 Create wrapper for Desktop72.tsx to inject images as props
5. ✅ Build application - should have zero `figma:asset` imports

## Notes

- **File Format**: Keep original format (PNG recommended for images, SVG for vectors)
- **File Size**: Consider optimizing images (WebP, compression) after export
- **Naming Convention**: Use the exact filenames specified - they match the manifest
- **Version Control**: Commit all images to Git after export

## Troubleshooting

### Images not loading in browser

Check browser console and network tab. Common issues:
- File path incorrect in manifest
- File not exported from Figma
- File permissions incorrect

### Build errors

- Ensure all asset paths in manifest match actual file locations
- Check that import statements use correct paths
- Verify TypeScript can resolve image imports (add to `vite-env.d.ts` if needed)

---

**Status**: 📋 Documentation Complete | 📦 Awaiting Asset Export | 🔄 Code Refactoring In Progress
