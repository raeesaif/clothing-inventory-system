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
                        <Field>
                            <Label htmlFor="Location-1">Location</Label>
                            <Input id="Location-1" name="location" placeholder="Full Address" />
                        </Field>
                        <div className="flex justify-between gap-3 items-center" >
                            <Field>
                                <Label htmlFor="manager-1">Manager Name</Label>
                                <Input id="manager-1" name="managerName" placeholder="Manager Name" />
                            </Field>
                            <Field>
                                <Label htmlFor="phone-1">Phone</Label>
                                <Input id="phone-1" name="phone" placeholder="+1 00-000" />
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
