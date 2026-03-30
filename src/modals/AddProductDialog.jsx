import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { Field, FieldGroup } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
const sizes = [
    "XS", "S", "M", "L", "XL", "XXL",
    "One Size",
    "38", "39", "40", "41", "42", "43", "44"
]
const colors = ["Charcoal", "Midnight Blue", "Navy", "White", "Cognac", "Burgundy", "Indigo", "Gold", "Camel", "Khaki", "Black", "Ivory"];
export function AddProductDialog({ open, onClose }) {
    return (
        <Dialog open={open} onOpenChange={onClose} >
            <form>
                <DialogContent className="sm:max-w-sm">
                    <DialogHeader>
                        <DialogTitle>Add New Product</DialogTitle>
                    </DialogHeader>
                    <FieldGroup>
                        <Field>
                            <Label htmlFor="productName">Product Name</Label>
                            <Input id="productName" name="name" placeholder="e.g. Chelsea Store" />
                        </Field>
                        <div className="flex justify-between gap-3 items-center" >
                            <Field>
                                <Label htmlFor="Category-1">Category</Label>
                                <Select>
                                    <SelectTrigger className="w-full max-w-48">
                                        <SelectValue placeholder="Select" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectLabel>All Categories</SelectLabel>
                                            <SelectItem value="outerwear"> Outerwear</SelectItem>
                                            <SelectItem value="dresses">Dresses</SelectItem>
                                            <SelectItem value="biazers">Biazers</SelectItem>
                                            <SelectItem value="shirts">Shirts</SelectItem>
                                            <SelectItem value="footerwear">Footerwear</SelectItem>
                                            <SelectItem value="knitwear">Knitwear</SelectItem>
                                            <SelectItem value="denim">Denim</SelectItem>
                                            <SelectItem value="accessories">Accessories</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </Field>
                            <Field>
                                <Label htmlFor="Price-1">Price ($)</Label>
                                <Input id="Price-1" name="price" placeholder="0.00" />
                            </Field>
                        </div>
                        <div className="flex justify-between gap-3 items-center" >
                            <Field>
                                <Label htmlFor="Size-1">Size</Label>
                                <Select>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select" />
                                    </SelectTrigger>

                                    <SelectContent>
                                        {sizes.map((size) => (
                                            <SelectItem key={size} value={size}>
                                                {size}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </Field>
                            <Field>
                                <Label htmlFor="Color-1">Color</Label>
                                <Select>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select" />
                                    </SelectTrigger>

                                    <SelectContent>
                                        {colors.map((color) => (
                                            <SelectItem key={color} value={color}>
                                                {color}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </Field>
                        </div>
                        <Field>
                            <Label htmlFor="SKU-1">SKU</Label>
                            <Input id="SKU-1" name="SKU" placeholder="LT-XX-000" />
                        </Field>
                    </FieldGroup>
                    <DialogFooter>
                        <Button className="text-white cursor-pointer w-full text-center" type="submit">Add Product</Button>
                    </DialogFooter>
                </DialogContent>
            </form>
        </Dialog>
    )
}
