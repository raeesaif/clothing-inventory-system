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
import { Textarea } from "@/components/ui/textarea"
export function AddRestockOrderDialog({ open, onClose }) {
    return (
        <Dialog open={open} onOpenChange={onClose} >
            <form>
                <DialogContent className="sm:max-w-sm">
                    <DialogHeader>
                        <DialogTitle>Create Restock Order</DialogTitle>
                    </DialogHeader>
                    <FieldGroup>
                        <Field>
                            <Label htmlFor="Branch-1">Branch</Label>
                            <Select>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select branch" />
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
                            <Label htmlFor="product-1">Product</Label>
                            <Select>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>All Categories</SelectLabel>
                                        <SelectItem value="silkeveningdress"> Silk Evening Dress</SelectItem>
                                        <SelectItem value="linensummershirt">Linen Summer Shirt</SelectItem>
                                        <SelectItem value="Merino">Merino Wool Sweater</SelectItem>
                                        <SelectItem value="Silk">Silk Pocket Square</SelectItem>
                                        <SelectItem value="Cashmere">Cashmere Scarf</SelectItem>
                                        <SelectItem value="CashmereOver">Cashmere Overcoat</SelectItem>
                                        <SelectItem value="Leather">Leather Chelsea Boots</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </Field>
                        <Field>
                            <Label htmlFor="Quantity-1">Quantity</Label>
                            <Input id="Quantity-1" name="Quantity" placeholder="Enter quantity" />
                        </Field>
                        <Field>
                            <Label htmlFor="Note-1">Note</Label>
                            <Textarea id="Note-1" name="Note" placeholder="Additional notes" />
                        </Field>
                    </FieldGroup>
                    <DialogFooter>
                        <Button className="text-white cursor-pointer w-full text-center" type="submit">Submit Order</Button>
                    </DialogFooter>
                </DialogContent>
            </form>
        </Dialog>
    )
}
