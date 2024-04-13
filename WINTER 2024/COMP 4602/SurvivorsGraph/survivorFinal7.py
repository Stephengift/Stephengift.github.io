import networkx as nx
import matplotlib.pyplot as plt
import numpy as np
# Filtering the dataset for Episode 1 interactions only


data_episode_10_13 = [
    # Episode 10
    ("Bruce", "Jake", -1), ("Emily", "Julie", 1), ("Emily", "Katurah", 1),
    ("Emily", "Dee", 1), ("Emily", "Drew", 1), ("Jake", "Drew", -1),
    ("Emily", "Bruce", -1), ("Emily", "Jake", -1), ("Katurah", "Bruce", -1),
    ("Dee", "Bruce", -1), ("Drew", "Bruce", -1), ("Julie", "Bruce", -1),
    ("Austin", "Bruce", -1), ("Emily", "Jake", -1), ("Katurah", "Jake", -1), ("Dee", "Jake", -1),
    ("Drew", "Jake", -1), ("Julie", "Jake", -1), ("Austin", "Jake", -1),
    ("Katurah", "Julie", -1), ("Emily", "Julie", -1), ("Emily", "Bruce", -1), ("Bruce", "Jake", 1),
    
    # Episode 11
    ("Drew", "Julie", 1), ("Drew", "Austin", 1),
    ("Drew", "Dee", 1), ("Julie", "Drew", 1), ("Julie", "Austin", 1),
    ("Julie", "Dee", 1), ("Austin", "Julie", 1), ("Austin", "Drew", 1),
    ("Dee", "Julie", 1), ("Dee", "Drew", 1), ("Dee", "Austin", 1),
    ("Austin", "Dee", 1), ("Katurah", "Jake", 1), ("Jake", "Katurah", 1),
    ("Katurah", "Julie", -1), ("Austin", "Julie", -1), ("Katurah", "Austin", 1),
    ("Austin", "Katurah", 1), ("Dee", "Julie", -1), ("Drew", "Jake", 1),("Drew", "Austin", 1), 
    ("Jake", "Drew", 1), ("Jake", "Austin", 1), ("Austin", "Dee", 1),
    ("Austin", "Julie", -1), ("Jake", "Julie", -1), ("Drew", "Julie", -1),
    ("Dee", "Julie", 1), ("Julie", "Emily", -1),
    
    # Episode 12
    ("Dee", "Julie", 1), ("Julie", "Dee", 1), ("Dee", "Julie", -1),
    ("Julie", "Austin", -1), ("Julie", "Drew", -1), ("Julie", "Dee", -1),
    ("Drew", "Julie", -1), ("Julie", "Dee", 1),("Dee", "Julie", 1), ("Julie", "Drew", -1), ("Austin", "Dee", 1),
    ("Austin", "Katurah", 1), ("Dee", "Austin", 1), ("Jake", "Julie", 1),
    ("Katurah", "Dee", 1), ("Dee", "Katurah", 1),("Drew", "Austin", 1), ("Dee", "Austin", -1),
    
    # Episode 13
    ("Dee", "Austin", 1), ("Katurah", "Dee", -1), ("Katurah", "Austin", -1),
    ("Katurah", "Julie", 1), ("Julie", "Katurah", 1), ("Katurah", "Jake", -1),
    ("Jake", "Austin", 1), ("Jake", "Katurah", 1), ("Austin", "Dee", 1),
    ("Katurah", "Jake", 1), ("Jake", "Katurah", 1), ("Katurah", "Jake", -1), ("Jake", "Katurah", -1), ("Dee", "Jake", 1),
    ("Austin", "Katurah", -1)

]





G_ep10_13 = nx.DiGraph()

# Add edges with attributes for relationship values
for acting_character, receiving_character, relationship in data_episode_10_13:
    # Check if edge exists
    if G_ep10_13.has_edge(acting_character, receiving_character):
        # Update weight if edge exists
        G_ep10_13[acting_character][receiving_character]['weight'] += relationship
    else:
        # Add new edge with weight
        G_ep10_13.add_edge(acting_character, receiving_character, weight=relationship)

# Drawing the graph for Episode 1
plt.figure(figsize=(10, 8))
pos_ep10_13 = nx.spring_layout(G_ep10_13, seed=42)  # for consistent layout

# Draw nodes
nx.draw_networkx_nodes(G_ep10_13, pos_ep10_13, node_size=700, node_color="skyblue")

# Draw edges
edges_ep10_13 = G_ep10_13.edges(data=True)
colors_ep10_13 = ['green' if data['weight'] > 0 else 'red' for _, _, data in edges_ep10_13]
weights_ep10_13 = [abs(data['weight']) * 2 for _, _, data in edges_ep10_13]
nx.draw_networkx_edges(G_ep10_13, pos_ep10_13, edge_color=colors_ep10_13, width=weights_ep10_13)

# Draw labels
nx.draw_networkx_labels(G_ep10_13, pos_ep10_13)

plt.title("Survivors TV Show Character Relationships - Episode 10 - 13")
plt.axis('off')  # Turn off the axis
plt.show()
