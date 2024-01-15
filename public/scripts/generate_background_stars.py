import random

def generate_box_shadows(n):
    shadows = []
    for _ in range(n):
        shadow = f"{random.randint(0, 2000)}px {random.randint(0, 2000)}px #FFF"
        shadows.append(shadow)
    return ", ".join(shadows)

# Utilisation de la fonction pour générer les ombres
shadows_small = generate_box_shadows(700)
shadows_medium = generate_box_shadows(200)
shadows_big = generate_box_shadows(100)

# Affichage des valeurs générées
print("Shadows Small:\n", shadows_small)
print("\n\nShadows Medium:\n", shadows_medium)
print("\n\nShadows Big:\n", shadows_big)
