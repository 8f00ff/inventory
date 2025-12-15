import express from 'express';
import type { Request, Response } from 'express';

const app = express();
app.use(express.json());

const inventoryRouter = express.Router();

const inventories: Record<string, Record<string, number>> = {};

inventoryRouter.get('/:playerId', (req: Request, res: Response) => {
  try {
    const { playerId } = req.params;
    const playerInventory = inventories[playerId] || {};
    return res.status(200).json(playerInventory);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

inventoryRouter.post('/:playerId', (req: Request, res: Response) => {
  try {
    const { playerId } = req.params;
    const { items } = req.body;
    
    if (!items || typeof items !== 'object' || Array.isArray(items)) {
      return res.status(400).json({ error: 'Invalid or missing items object' });
    }
    
    if (!inventories[playerId]) {
      inventories[playerId] = {};
    }
    
    for (const [item, quantity] of Object.entries(items)) {
      if (typeof quantity !== 'number' || !Number.isInteger(quantity) || quantity < 0) {
        return res.status(400).json({ error: `Invalid quantity for item ${item}. Must be a non-negative integer.` });
      }
      inventories[playerId][item] = (inventories[playerId][item] || 0) + quantity;
    }
    
    return res.status(200).json(inventories[playerId]);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

inventoryRouter.put('/:playerId/:item', (req: Request, res: Response) => {
  try {
    const { playerId, item } = req.params;
    const { quantity } = req.body;
    
    if (quantity === undefined || typeof quantity !== 'number' || !Number.isInteger(quantity) || quantity < 0) {
      return res.status(400).json({ error: 'Invalid or missing quantity. Must be a non-negative integer.' });
    }
    
    if (!inventories[playerId]) {
      return res.status(404).json({ error: `Player with ID ${playerId} not found.` });
    }
    
    inventories[playerId][item] = quantity;
    
    return res.status(200).json(inventories[playerId]);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

inventoryRouter.delete('/:playerId/:item', (req: Request, res: Response) => {
  try {
    const { playerId, item } = req.params;
    
    if (!inventories[playerId] || !inventories[playerId][item]) {
      return res.status(404).json({ error: 'Item not found in inventory' });
    }
    
    delete inventories[playerId][item];
    
    return res.status(200).json({ success: true });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

app.use('/inventory', inventoryRouter);
app.listen(3000, () => console.log('API running on port 3000'));
